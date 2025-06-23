import prisma from "../config/prisma.js";

const userService = {};

userService.findUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

userService.createUser = (data) => {
  return prisma.user.create({
    data,
  });
};
export default userService;
