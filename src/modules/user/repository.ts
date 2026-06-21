import type { Prisma } from "../../generated/prisma/client.js";
import prisma from "../../prisma/client.js";


type ChangeUserStatusInput = {
  id: string;
  isActive: boolean;
};

type UserUpdateInput = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

type changePasswordInput = {
  email: string;
  newPasswordHash: string;
}

const getUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      isActive: true,
    },
  });
};

const getOneUser = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      isActive: true,
    },
  });
};

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
    data
  });
};

const changeStatus = async (data: ChangeUserStatusInput) => {
  return prisma.user.update({
    where: { id: data.id },
    data: { isActive: data.isActive },
  });
};

const updateUser = async (data: UserUpdateInput) => {
  return prisma.user.update({
    where: { id: data.id },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    }
  });
};

const changePassword = async (data: changePasswordInput) => {
  return prisma.user.update({
    where: { email: data.email },
    data: {
      passwordHash: data.newPasswordHash
    }
  })
}


export default {
  findByEmail,
  findById,
  createUser,
  getUsers,
  changeStatus,
  updateUser,
  changePassword,
  getOneUser
};