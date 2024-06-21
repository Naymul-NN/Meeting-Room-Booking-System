import { Types } from "mongoose"

export type Tslot = {
   room: Types.ObjectId,
   date: Date,
   startTime: string,
   endTime: string,
   isBooked: boolean
}