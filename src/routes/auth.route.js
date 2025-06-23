import express from "express";

import authController from "../controllers/auth.controller.js"
const authRouter = express.Router();

authRouter.post("/register/doctor", authController.register);
authRouter.post("/login/doctor", authController.login);

export default authRouter;
