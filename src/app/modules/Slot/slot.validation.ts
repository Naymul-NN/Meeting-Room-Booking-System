import { z } from "zod";

const validationSchema = z.object({
    body: z.object({
        date: z.date().optional(),
        startTime: z.number().int().positive().nonnegative({ message: 'startTime is required' }),
        endTime: z.number().int().positive().nonnegative({ message: 'endTime is required' }),
        isBooked: z.boolean().optional().default(false)
    })
});

export default validationSchema;