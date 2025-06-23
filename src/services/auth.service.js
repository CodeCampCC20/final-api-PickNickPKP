import prisma from "../config/prisma.js";

const authService = {};

authService.findUserByUsername = (username) => {
  return prisma.doctor.findUnique({
    where: { username },
  });
};

authService.createUser = (data) => {
  return prisma.doctor.create({
    data,
  });
};
export default authService;
