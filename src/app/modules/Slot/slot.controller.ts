import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { calculateSlotIntervals, createRoomSlotsIntoDb } from "./slot.service";
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

export { createRoomSlots };