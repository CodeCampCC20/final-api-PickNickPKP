import userService from "../services/auth.service.js";
import hashService from "../services/hash.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";

const userController = {};

userController.register = async (req, res, next) => {
  try {
    const { username, password, confirmPassword, specialization } = req.body;
    const existUser = await userService.findUserByUsername(username);
    console.log("existUser", existUser);

    if (existUser) {
      createError(400, "User already exist");
    }

    const hashPassword = hashService.hashPassword(password);

    const newUser = await userService.createUser({
      username,
      password: hashPassword,
      specialization,
    });
    console.log("newUser", newUser);

    res.status(201).json({
      message: "Register  Successfully",
    });
  } catch (error) {
    next(error);
  }
};

userController.login = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body;
    const existUser = await userService.findUserByUsername(username);
    console.log("existUser", existUser);

    const user = await prisma.user.findFirst({
      where: {
        username,
        specialization,
      },
    });
    console.log(user);

    if (!existUser) {
      createError(400, "Username or Password invalid");
    }
    const isMatchPassword = hashService.comparePassword(
      password,
      existUser.password
    );
    console.log("isMatchPassword", isMatchPassword);

    const payload = { id: existUser.id };
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

userController.getMe = async (req, res, next) => {
  try {
    // const {id} = req.user;
    // console.log(id)
    const user = await prisma.user.findFirst({
      // where:{
      //   id: Number(id)
      // },
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
export default userController;
