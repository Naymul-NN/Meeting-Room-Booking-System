import express from 'express';
import { UserControllers } from './user.controller';
import validationRequest from '../middleware/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post('/signup',
    validationRequest(UserValidation.userValidationSchema) ,
    UserControllers.userSingup);

export const UserRoutes = router