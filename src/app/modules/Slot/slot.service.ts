
// import { Room } from "../Room/room.model";
import { Tslot } from "./slot.interface";
import { Slot } from "./slot.model";

export const createRoomSlotsIntoDb = async (slots: Tslot[]) => {
    const result = await Slot.insertMany(slots);
    return result;
};

// Function to calculate slot intervals
export const calculateSlotIntervals = (startTime: string, endTime: string, slotDuration: number) => {
    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    const totalDuration = endMinutes - startMinutes;
    const numberOfSlots = totalDuration / slotDuration;
    const slots = [];

    for (let i = 0; i < numberOfSlots; i++) {
        const slotStart = minutesToTime(startMinutes + i * slotDuration);
        const slotEnd = minutesToTime(startMinutes + (i + 1) * slotDuration);
        slots.push({ startTime: slotStart, endTime: slotEnd });
    }

    return slots;
};

// Helper function to convert "HH:MM" to minutes since midnight
const parseTimeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

// Function to retrieve available slots based on date and roomId
export const getAvailableSlots = async (date?: string, roomId?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { isBooked: false };

    if (date) {
        query.date = date;
    }

    if (roomId) {
        query.room = roomId;
    }

    // Use populate to include room details
    const result = await Slot.find(query).populate('room');
    return result;
};