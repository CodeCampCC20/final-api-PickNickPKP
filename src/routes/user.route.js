import express from "express";

import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/register/user", userController.register);
userRouter.post("/login/user", userController.login);

export default userRouter;
