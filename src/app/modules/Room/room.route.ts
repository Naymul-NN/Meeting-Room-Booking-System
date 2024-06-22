

import express from 'express';

import { roomcontroller } from "./room.controller";
import validationRequest from '../../middleware/validateRequest';
import { roomValidation } from './room.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';


const router = express.Router();

router.post('/',
    auth(USER_ROLE.admin),
    validationRequest(roomValidation.roomValidationSchema),
    roomcontroller.createRoom);

router.get('/',
    roomcontroller.getALLRoom)

router.get('/:id', roomcontroller.getSingleRoom)

router.put('/:id',
    auth(USER_ROLE.admin),
    roomcontroller.updateRoom)

router.delete('/:id',
    auth(USER_ROLE.admin),
    roomcontroller.deleteRoom)


export const RoomRoutes = router