import { Request, Response, NextFunction } from "express";
import { commonController } from "./commonController";
import { movieService } from '../service/movieService';

class MovieController {
    constructor() {}

    /**
     * Method to get list of character
     */
     async getCharacterList (req: Request, res: Response, next: NextFunction) {
        try{
            let characterList = await movieService.getCharacterList(req, res);
            const response = commonController.successResponse(characterList);
            return res.status(200).send(response);
        } catch (err){
            const response = commonController.errorResponse(err);
            return res.status(500).send(response);
        }
    }
}

export const movieController = new MovieController();