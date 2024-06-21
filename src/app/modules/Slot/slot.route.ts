import { createRoomSlots } from "./slot.controller";
import express from "express"
const router = express.Router();

router.post('/', 
createRoomSlots);


export const RoomSlotsRoutes = router