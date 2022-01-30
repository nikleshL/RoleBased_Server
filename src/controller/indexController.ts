import { Request, Response, NextFunction } from "express";

class IndexController {
    constructor() {}

    /**
     * Method to to check health
     */
     public healthCheck (req: Request, res: Response, next: NextFunction) {
        res.status(200).send({
            'message': 'Running Successfully'
        })
    }
}

export const indexController = new IndexController();