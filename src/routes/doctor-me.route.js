import express from "express";
import authController from "../controllers/auth.controller.js";

const doctorGetMeRouter = express.Router();

doctorGetMeRouter.get("/doctor/me", authController.getMe);
// doctorGetMeRouter.patch("/users/me", );

export default doctorGetMeRouter;
