import { Request, Response, NextFunction } from "express";
import { roles } from '../config/roles'
import { commonController } from '../controller/commonController';

class UserMiddleware {
    constructor() {}

    /**
     * middelware to authorised for user
    */
    public grantAccess(action: any, resource: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const permission = roles.can(req.body.user.role)[action](resource);
                if (!permission.granted) {
                    const error = {
                        message: "You don't have enough permission to perform this action"
                    }
                    const response = commonController.errorResponse(error);
                    return res.status(401).send(response);
                }
                next();
            } catch (error) {
                next(error);
            }
        }
    }

    /**
     * middelware to check if logged in
    */
    /* async allowIfLoggedin (req: Request, res: Response, next: NextFunction) {
        try {
            const user = res.locals.loggedInUser;
            if (!user)
                return res.status(401).json({
                    error: "You need to be logged in to access this route"
                });
            req.user = user;
            next();
        } catch (error) {
            next(error);
        }
    } */
}

export const userMiddleware = new UserMiddleware();