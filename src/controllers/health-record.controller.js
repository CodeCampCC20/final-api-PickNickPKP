import hashService from "../services/hash.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";
import healthRecordService from "../services/health-record.service.js";

// const healthRecordController = {};

const healthRecordPost = async (req, res, next) => {
  try {
    const { type, value } = req.body;
    const user = await prisma.health_recode.create({
      data: {
        type,
        value,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      message: "create health record Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default healthRecordPost;
