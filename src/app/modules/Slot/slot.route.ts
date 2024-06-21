import { createRoomSlots, getAvailableSlotsController } from "./slot.controller";
import express from "express"
const router = express.Router();

router.post('/', 
createRoomSlots);
router.get('/availability', getAvailableSlotsController);


export const RoomSlotsRoutes = router