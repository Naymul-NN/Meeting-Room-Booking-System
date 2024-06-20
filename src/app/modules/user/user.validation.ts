import { z } from "zod";
import { Role } from "./user.constant";

const userVlidationSchema = z.object({
    
    password: z.string().max(20, {message: 'password can not be more then 20 characters'}).optional(),
    role: z.enum([...Role] as [string, ...string[]]),
   
});
export const UserValidation = {
    userVlidationSchema,
}