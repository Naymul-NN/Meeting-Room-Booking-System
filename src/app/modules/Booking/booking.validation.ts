import { z } from "zod";

const bookingValidationSchema = z.object({
    
    totalAmount: z.number().positive("Total amount must be positive"),
   
    isDeleted: z.boolean().default(false),
});

export const bookingValidation = {
    bookingValidationSchema,
}

