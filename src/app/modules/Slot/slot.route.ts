import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { createRoomSlots, getAvailableSlotsController } from "./slot.controller";
import express from "express"
const router = express.Router();

router.post('/',
    auth(USER_ROLE.admin),
    createRoomSlots);
router.get('/availability', getAvailableSlotsController);


export const RoomSlotsRoutes = router