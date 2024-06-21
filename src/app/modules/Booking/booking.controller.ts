import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBooking } from "./booking.service";

const createBookingController = catchAsync(async (req, res) => {
    const result = await createBooking(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking created successfully',
        data: result,
    });
});

export { createBookingController };