import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../error/appErrors";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
const auth = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const token = req.headers.authorization;

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'you are not authorized');
        }

        //    if the token is valid or not 

        jwt.verify(token, config.jwt_access_secret as string, function (err, decoded) {

            // err
            if (err) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'you are not authorize')
            }

           req.user = decoded as JwtPayload;
           
           next();

        })

       
    });

};

export default auth