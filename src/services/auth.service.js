import prisma from "../config/prisma.js";

const authService = {};

authService.findUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

authService.createUser = (data) => {
  return prisma.user.create({
    data,
  });
};
export default authService;
