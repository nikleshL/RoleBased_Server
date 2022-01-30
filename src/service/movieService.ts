import { Request, Response } from "express";
import { commonService } from './commonService';
import * as environment from '../environment.json';

class MovieService {
    constructor() {}

    /**
     * Method to Return a list of comments
     */
    async getCharacterList (req: Request, res: Response) {
        try {
            const url = environment.api + "/character";
            const options = commonService.generateOptionsWithToken(req, 'GET', url);
            return await commonService.getExternalApiResponse(options, req, res);
        } catch (error){
            throw error;
        }
    }
}

export const movieService = new MovieService();