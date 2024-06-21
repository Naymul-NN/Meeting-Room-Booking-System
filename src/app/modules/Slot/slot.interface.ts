import { Types } from "mongoose"

export type Tslot = {
   room: Types.ObjectId,
   date: Date,
   startTime: number,
   endTime: number,
   isBooked: boolean
}