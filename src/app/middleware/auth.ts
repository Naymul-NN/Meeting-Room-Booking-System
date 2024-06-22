import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../error/appErrors";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TuserRole } from "../modules/user/user.interface";
const auth = (...requiredRoles:TuserRole[]) => {
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
            const role = (decoded as JwtPayload).role;

            if (requiredRoles && !requiredRoles.includes(role)){
                throw new AppError(httpStatus.UNAUTHORIZED,'YOU are not authorize')
            }


           req.user = decoded as JwtPayload;
           next();

        })

       
    });

};

export default auth