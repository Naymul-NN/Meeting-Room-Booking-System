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
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
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

export const slot = model<Tslot>('slot', slotSchema);