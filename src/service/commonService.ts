import { Request, Response } from "express";
import request from "request";
import * as environment from '../environment.json';
import { commonUtility } from '../utility/commonUtility';

class CommonService {
    constructor() {}

    /**
     * Method to call external API with exception handling and request and response logging
     * @param {*} options
     * @param {*} req
     * @param {*} res
     */
    getExternalApiResponse (options: any, req: Request, res: Response) {
        return new Promise(function (success, failure) {
            request(options, function (error: any, response: any, body: any) {
            let data = (commonUtility.isJson(body)) ? JSON.parse(body) : body;
            if(error){
                failure(error);
            }else if (response.statusCode > 204) {
                failure(data);
            } else {
                success(data);
            }
            });
        });
    };

    /**
     * Method to create options
     * @param {*} req
     * @param {*} method
     * @param {*} url
     */
     generateOptionsWithToken (req: Request, method: any, url: any) {
        const options = {
            url: url,
            auth: {
              'bearer': environment.token
            },
            method: method,
            rejectUnauthorized: false,
            requestCert: false,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          };
          return options;
    };
}

export const commonService = new CommonService();