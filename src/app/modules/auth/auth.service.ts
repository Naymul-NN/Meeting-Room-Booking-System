import httpStatus from "http-status";
import AppError from "../../error/appErrors";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt"

const loginUser = async (payload: TLoginUser)=> {
    console.log(payload)
    // checking if the user is exist

    const user = await User.findOne({email: payload?.email})
    console.log(user);
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
    
    
    return {userDetails};
}

export const AuthService = {
    loginUser,
}