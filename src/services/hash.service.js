import bcrypt from "bcryptjs";

const hashService = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, 10);
  },
  comparePassword: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  },
};

export default hashService;
