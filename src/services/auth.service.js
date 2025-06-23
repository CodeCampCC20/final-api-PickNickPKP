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

authService.findUserById = (id) => {
  return prisma.doctor.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      role: true,
    },
  });
};

authService.findUserById = (id) => {
  return prisma.doctor.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });
};
export default authService;
