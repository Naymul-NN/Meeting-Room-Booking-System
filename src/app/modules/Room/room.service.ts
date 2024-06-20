import { Troom } from "./room.interface";
import { Room } from "./room.model";


const createRoomintoDb = async (payload: Troom) => {
    const result = await Room.create(payload);
    return result;
};

const getAllRoomFromDb = async () => {
    const result = await Room.find();
    return result;
};

const getSingleRoomFromDb = async (id:string) => {
    const result = await Room.findById(id);
    return result;
};



export const roomService = {
    createRoomintoDb,
    getAllRoomFromDb,
    getSingleRoomFromDb,
}