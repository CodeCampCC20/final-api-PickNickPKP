import authService from "../services/auth.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    console.log("authorization", authorization);
    if (!authorization || !authorization.startsWith("Bearer")) {
      createError(401, "Unauthorization!!!");
    }

    const token = authorization.split(" ")[1];
    console.log("token", token);

    if (!token) {
      createError(401, "Unauthorization !!!");
    }

    const payload = jwtService.verifyToken(token);
    console.log("payload", payload);

    const user = await authService;
  } catch (error) {
    next(error);
  }
};

export default authenticate;
