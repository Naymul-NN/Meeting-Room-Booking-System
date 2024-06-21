import AppError from "../../error/appErrors";
import { Troom } from "./room.interface";
import { Room } from "./room.model";


const createRoomintoDb = async (payload: Troom) => {
    const result = await Room.create(payload);
    return result;
};

const getAllRoomFromDb = async () => {
    const result = await Room.find({ isDeleted: { $ne: true } });
    return result;
};

const getSingleRoomFromDb = async (id:string) => {
    const result = await Room.findById(id);
    if (!result) {
        throw new AppError(404, 'this room not found');
      }
    return result;
};

const updateRoomInfo = async (
    id: string,
    payload: Partial<Troom>,
) => {

    const result = await Room.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
};

const deleteRoomFromDB = async (id: string) => {
    const result = await Room.findByIdAndUpdate(id, { isDeleted: true },
        {
            new: true,
        },
    );
    return result;
}



export const roomService = {
    createRoomintoDb,
    getAllRoomFromDb,
    getSingleRoomFromDb,
    updateRoomInfo,
    deleteRoomFromDB
}