

import express from 'express';

import { roomcontroller } from "./room.controller";
import validationRequest from '../../middleware/validateRequest';
import { roomValidation } from './room.validation';
import auth from '../../middleware/auth';


const router = express.Router();

router.post('/', 
validationRequest(roomValidation.roomValidationSchema),
roomcontroller.createRoom);

router.get('/', auth() ,roomcontroller.getALLRoom)

router.get('/:id',roomcontroller.getSingleRoom)
router.put('/:id',roomcontroller.updateRoom)
router.delete('/:id',roomcontroller.deleteRoom)


export const RoomRoutes = router