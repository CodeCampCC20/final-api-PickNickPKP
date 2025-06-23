import express from "express";

import userController from "../controllers/user.controller.js";
const userGetMeRouter = express.Router();

userGetMeRouter.get("/users/me", userController.getMe);
// docGetMeRouter.patch("/users/me", );

export default userGetMeRouter;
