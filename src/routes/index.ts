import { Application } from 'express';
import { indexController } from '../controller/indexController';
import { movieController } from '../controller/movieController';
import { userMiddleware } from '../middleware/userMiddleware'


const initialize = (app: Application) => {
    app.get('/api/healthcheck', indexController.healthCheck);
    app.post('/api/getCharacterList', userMiddleware.grantAccess('readAny','data'), movieController.getCharacterList);
}

export default {
    initialize
};