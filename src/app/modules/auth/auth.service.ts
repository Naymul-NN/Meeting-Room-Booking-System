import httpStatus from "http-status";
import AppError from "../../error/appErrors";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: TLoginUser)=> {
   
    // checking if the user is exist

    const user = await User.findOne({email: payload?.email})
    // console.log(user);
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "this user not found")
    }

    const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password);
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Incorrect password");
    }

    // Return user details (excluding password)
    const userDetails = {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
        // Add any other fields you need to return
    };

    // access token

    const jwtPayload = {
        userEmail: user.email,
        role: user.role
    }

    const accessToken = jwt.sign(
        jwtPayload,
        config.jwt_access_secret as string,
        {expiresIn: '10d'}
    )
    
    
    return {
        token: accessToken,
        data: userDetails,
    };
}

export const AuthService = {
    loginUser,
}