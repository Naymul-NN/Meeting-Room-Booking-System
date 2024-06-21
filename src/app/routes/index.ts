import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { RoomRoutes } from '../modules/Room/room.route';
import { RoomSlotsRoutes } from '../modules/Slot/slot.route';
import { BookingRoutes } from '../modules/Booking/booking.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
  {
    path: '/slots',
    route: RoomSlotsRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;