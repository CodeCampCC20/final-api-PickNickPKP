import { object, ref, Schema, string } from "yup";

export const registerSchema = object({
  username: string().min(3).required("username is required more than 4"),
  password: string().min(3).required("password is required more than 4"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "confirmpassword is invalid"
  ),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    const mergeErr = new Error(errTxt)
    
    next(mergeErr);
  }
};
