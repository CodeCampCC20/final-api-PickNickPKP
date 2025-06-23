import express from "express";

import authController from "../controllers/auth.controller.js"
import { registerSchema, validate } from "../validator/validate.js";
const authRouter = express.Router();

authRouter.post("/register/doctor", validate(registerSchema),authController.register);
authRouter.post("/login/doctor", authController.login);

export default authRouter;
