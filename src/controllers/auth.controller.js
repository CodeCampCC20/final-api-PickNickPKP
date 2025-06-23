import authService from "../services/auth.service.js";
import hashService from "../services/hash.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const { username, password, confirmPassword ,specialization } = req.body;
    const existUser = await authService.findUserByUsername(username);
    console.log("existUser", existUser);

    if (existUser) {
      createError(400, "User already exist");
    }

    const hashPassword = hashService.hashPassword(password);

    const newUser = await authService.createUser({
      username,
      password: hashPassword,
      specialization,
    });
    console.log("newUser", newUser);

    res.status(201).json({
      message: "Register doctor Successfully",
    });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { username, password ,specialization } = req.body;
    // const existUser = await authService.findUserByUsername(username);
    // console.log("existUser", existUser);

    const user = await prisma.doctor.findFirst({
      where: {
        username,
        specialization,
      },
    });
    console.log(user);

    if (!user) {
      createError(400, "Username or Password invalid");
    }
    const isMatchPassword = hashService.comparePassword(
      password,
      user.password
    );
    console.log("isMatchPassword", isMatchPassword);

    const payload = { id: user.id };
    const accessToken = jwtService.genAccessToken(payload);
    console.log("accessToken", accessToken);

    res.status(200).json({
      id: user.id,
      username: user.username,
      accessToken,
      specialization: user.specialization,
    });
  } catch (error) {
    next(error);
  }
};


authController.getMe = async (req, res, next) => {
  try {
    const user = await prisma.doctor.findFirst({
      omit: {
        password: true,
        specialization: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json({ user });
  } catch (error) {
    next(error);
  }
};
export default authController;
