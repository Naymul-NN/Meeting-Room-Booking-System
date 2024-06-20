import httpStatus from "http-status"
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';
import catchAsync from '../../utils/catchAsync';

const userSingup = catchAsync(async (req, res) => {
  const result = await userService.singUp(req.body)
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User registered successfully',
      data: result
  })
})

export const UserControllers = {
  userSingup,
};