import express from "express";

import authController from "../controllers/auth.controller.js"
const authRouter = express.Router();

authRouter.post("/doctor", authController.register);
// authRouter.post("/user", (req,res) => {});

export default authRouter;
