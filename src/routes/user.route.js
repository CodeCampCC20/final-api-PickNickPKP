import express from "express";

import userController from "../controllers/user.controller.js";
import { registerSchema, validate } from "../validator/validate.js";
const userRouter = express.Router();

userRouter.post("/register/user", validate(registerSchema),userController.register);
userRouter.post("/login/user", userController.login);

export default userRouter;
