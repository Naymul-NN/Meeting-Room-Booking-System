import { Schema, model } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema = new Schema<Tbooking>({
    room: {
        type: Schema.Types.ObjectId,
        required: [true, 'Room ID is required'],
        ref: 'Room'
    },
    slots: [{
        type: Schema.Types.ObjectId,
        required: [true, 'At least one slot ID is required'],
        ref: 'Slot'
    }],
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User ID is required'],
        ref: 'User'
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    totalAmount: {
        type: Number,
        required: [true, 'Total amount is required']
    },
    isConfirmed: {
        type: String,
        default: "unconfirmed"
       
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

export const Booking = model<Tbooking>('Booking', bookingSchema);