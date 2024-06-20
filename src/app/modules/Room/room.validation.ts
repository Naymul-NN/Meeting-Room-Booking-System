import { z } from "zod";


const roomValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        roomNo: z.number().int().positive("Room number must be a positive integer"),
        floorNo: z.number().int().positive("Floor number must be a positive integer"),
        capacity: z.number().int().positive("Capacity must be a positive integer"),
        pricePerSlot: z.number().positive("Price per slot must be a positive number"),
        amenities: z.array(z.string().min(1, "Amenity must be a non-empty string")).min(1, "At least one amenity is required"),
        // isDeleted: z.boolean().default(false),
    })
});

export const roomValidation = {
    roomValidationSchema,
}