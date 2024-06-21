import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingService } from "./booking.service";


const createBookingController = catchAsync(async (req, res) => {
    const result = await bookingService.createBooking(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking created successfully',
        data: result,
    });
});

const getALLBookings = catchAsync(async (req, res) => {
    const result = await bookingService.getAllBookingFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rooms retrieved successfully',
        data: result
    })
  });

export  const bookingController = {
 createBookingController ,
 getALLBookings

};
