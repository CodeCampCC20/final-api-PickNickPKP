import express from "express";
import healthRecordPost from "../controllers/health-record.controller.js";

const healthRecordRouter = express.Router();

healthRecordRouter.post("/health-records", healthRecordPost);
// healthRecordRouter.patch("/doctor/me", authController.updateRoleUser );

export default healthRecordRouter;
