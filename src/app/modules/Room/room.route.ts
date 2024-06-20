

import express from 'express';

import { roomcontroller } from "./room.controller";
import validationRequest from '../../middleware/validateRequest';
import { roomValidation } from './room.validation';


const router = express.Router();

router.post('/', 
validationRequest(roomValidation.roomValidationSchema),
roomcontroller.createRoom);

router.get('/',roomcontroller.getALLRoom)
router.get('/:id',roomcontroller.getSingleRoom)


export const RoomRoutes = router