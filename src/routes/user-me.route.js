import express from "express";

import userController from "../controllers/user.controller.js";
import authenticate from "../middlewares/authen.middleware.js";
const userGetMeRouter = express.Router();

userGetMeRouter.get("/users/me", authenticate, userController.getMe);
// docGetMeRouter.patch("/users/me", );

export default userGetMeRouter;
