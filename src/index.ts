import express from 'express';
import mongoose from 'mongoose';
import { Application, Request, Response, NextFunction } from "express";
import routes from './routes/index';
import * as environment from './environment.json';

const app: Application = express();
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is running on ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create the database connection 
const DBURI = environment.mongoDBUrl;
mongoose.connect(DBURI,function(error){
	if(error){
		console.log(error);
	} else {
        console.log(`Databse is running using ${DBURI}`);
    }
});

app.use((req: Request, res: Response, next: NextFunction) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
	
	//Set Cache Control 
	//res.header('Cache-Control', 'max-age='+7*86400000);

    // Pass to next layer of middleware
    next();
});

routes.initialize(app);

export {
    app
}