import { z } from "zod";

const validationSchema = z.object({
    body: z.object({
        date: z.date().optional(),
        startTime: z.string(),
        endTime: z.string(),
        isBooked: z.boolean().optional().default(false)
    })
});

export default validationSchema;