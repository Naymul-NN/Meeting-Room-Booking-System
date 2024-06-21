import { Schema, model } from "mongoose";
import { Tslot } from "./slot.interface";

const slotSchema = new Schema<Tslot>({
    room: {
        type: Schema.Types.ObjectId,
        required: [true, 'room id is required'],
        ref: 'Room'
    },
    date:{ 
        type: Date
     },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
},
    {
        timestamps: true
    });

export const Slot = model<Tslot>('slot', slotSchema);