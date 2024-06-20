import express from 'express';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';
import validationRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post('/signup',
    validationRequest(UserValidation.userValidationSchema) ,
    UserControllers.userSingup);

export const UserRoutes = router