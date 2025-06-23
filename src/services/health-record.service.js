import prisma from "../config/prisma.js";

const healthRecordService = {};

healthRecordService.findUserByUsername = (type) => {
  return prisma.health_recode.findUnique({
    where: { type },
  });
};

healthRecordService.createUser = (data) => {
  return prisma.health_recode.create({
    data,
  });
};

healthRecordService.findUserById = (id) => {
  return prisma.health_recode.findUniquse({
    where: { id },
    select: {
      id: true,
      type: true,
      value: true,
    },
  });
};

export default healthRecordService;
