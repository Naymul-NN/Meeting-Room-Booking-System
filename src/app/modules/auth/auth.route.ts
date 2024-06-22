import validationRequest from "../../middleware/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import express from "express";
const router = express.Router();

router.post('/login',
validationRequest(AuthValidation.loginValidationSchema),
AuthControllers.loginUser,

)

export const AuthRoutes = router