
import { Tslot } from "./slot.interface";
import { slot } from "./slot.model";

export const createRoomSlotsIntoDb = async (slots: Tslot[]) => {
    const result = await slot.insertMany(slots);
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