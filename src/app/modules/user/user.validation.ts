import { z } from "zod";
import { Role } from "./user.constant";

const userValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20, {message: 'password can not be more then 20 characters'}),
        role: z.enum([...Role] as [string, ...string[]]),
    })
   
});
export const UserValidation = {
    userValidationSchema,
}