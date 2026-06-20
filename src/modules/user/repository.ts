import prisma from "../../prisma/client.js";

const findByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const findById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

const createUser = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data,
  });
};

const getUsers = async () => {
  return prisma.user.findMany();
};

export default {
  findByEmail,
  findById,
  createUser,
  getUsers,
};