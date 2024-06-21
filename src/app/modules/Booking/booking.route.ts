import express from "express"
import { bookingController } from "./booking.controller";
// import { createBookingController } from "./booking.controller";

const router = express.Router();

router.post('/', bookingController.createBookingController);
router.get('/', bookingController.getALLBookings);




export const BookingRoutes = router