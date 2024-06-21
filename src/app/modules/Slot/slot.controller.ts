import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { calculateSlotIntervals, createRoomSlotsIntoDb, getAvailableSlots } from "./slot.service";
import catchAsync from "../../utils/catchAsync";

const createRoomSlots = catchAsync(async (req,res) => {
    const { room, date, startTime, endTime } = req.body;
    const slotDuration = 60; // 60 minutes slot duration

    // Calculate slot intervals
    const slots = calculateSlotIntervals(startTime, endTime, slotDuration);

    // Prepare payload for room slots creation
    const slotPayloads = slots.map(slot => ({
        room,
        date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        isBooked: false,
    }));

    // Create room slots in the database
    const result = await createRoomSlotsIntoDb(slotPayloads);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Slots created successfully',
        data: result,
    });
});

const getAvailableSlotsController = catchAsync(async (req,res) => {
    const { date, roomId } = req.query;

    // Retrieve available slots
    const result = await getAvailableSlots(date as string, roomId as string);

    // Check if data is empty and send appropriate response
    if (result.length === 0) {
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'No available slots found',
            data: [],
        });
    } else {
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Available slots retrieved successfully',
            data: result,
        });
    }
});

export { getAvailableSlotsController };

export { createRoomSlots };