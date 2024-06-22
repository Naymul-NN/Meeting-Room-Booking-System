import express from "express"
import { bookingController } from "./booking.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
// import { createBookingController } from "./booking.controller";

const router = express.Router();

router.post('/',
    auth(USER_ROLE.user),
    bookingController.createBookingController);

router.get('/', 
    auth(USER_ROLE.admin),
    bookingController.getALLBookings);

router.put('/:id',
    auth(USER_ROLE.admin),
    bookingController.updateBooking);
router.delete('/:id',
    auth(USER_ROLE.admin),
    bookingController.deleteBooking);




export const BookingRoutes = router