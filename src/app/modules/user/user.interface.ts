import { USER_ROLE } from "./user.constant";

export type  Trole = 'user' | 'admin' ;
export type TUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: Trole ;
    address: string;

}

export type TuserRole = keyof typeof USER_ROLE;