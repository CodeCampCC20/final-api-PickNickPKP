import express from "express";
import authController from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authen.middleware.js";

const doctorGetMeRouter = express.Router();

doctorGetMeRouter.get("/doctor/me", authenticate,authController.getMe);
doctorGetMeRouter.patch("/doctor/me", authController.updateUser );

export default doctorGetMeRouter;
