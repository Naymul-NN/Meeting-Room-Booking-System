import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { roomService } from "./room.service"


const createRoom = catchAsync(async (req, res) => {
    const result = await roomService.createRoomintoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room added successfully',
        data: result
    })
  });

const getALLRoom = catchAsync(async (req, res) => {
    const result = await roomService.getAllRoomFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rooms retrieved successfully',
        data: result
    })
  });

const getSingleRoom = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await roomService.getSingleRoomFromDb(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rooms retrieved successfully',
        data: result
    })
  });


  export const roomcontroller = {
       createRoom,
       getALLRoom,
       getSingleRoom,
  }
  