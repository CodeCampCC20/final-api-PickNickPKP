import authService from "../services/auth.service.js";
import hashService from "../services/hash.service.js";
import createError from "../utils/create-error.js";

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existUser = await authService.findUserByUsername(username);
    console.log("existUser", existUser);

    if (existUser) {
      createError(400, "User already exist");
    }

    const hashPassword = hashService.hashPassword(password);

    const newUser = await authService.createUser({
      username,
      password: hashPassword,
    });
    console.log("newUser", newUser);

    res.status(201).json({
      message:  "Register doctor Successfully",
    });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existUser = await authService.findUserByUsername(username);
    console.log("existUser", existUser);

    if (!existUser) {
      createError(400, "Username or Password invalid");
    }
    const isMatchPassword = hashService.comparePassword(
      password,
      existUser.password
    );
    console.log('isMatchPassword', isMatchPassword)

    const payload = {id: existUser.id}
    // const accessToken = 
  } catch (error) {}
};
export default authController;
