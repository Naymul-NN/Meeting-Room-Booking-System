
// import { Schema, model } from "mongoose";
// import { TUser } from "./user.interface";

import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'
import validator from "validator";

// const userSchema = new Schema<TUser>({
//     name : {
//         type : String,
//         required: true,
//     },
//     email: {
//         type : String,
//         required: true,
//     },
//     password: {
//         type : String,
//         required: true,
//     },
//     role: {
//         type : String,
//         required:true,
//         enum:[ "admin","user" ]
//     },
//     address:{
//         type: String,
//         required: true,
//     },
// },
// {
//     timestamps:true
// });

// export const User = model<TUser>('user', userSchema);
const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: '{VALUE} is not a valid email',
        }
    },
    password: {
        type: String,
        required: true,
        unique: true,
        
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    },
    address: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    // hashing password and save into db 
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))

    next()
})


export const User = model<TUser>('User', userSchema);