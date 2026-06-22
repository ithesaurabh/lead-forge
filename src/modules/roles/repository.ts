import type { Prisma } from "../../generated/prisma/client.js";
import prisma from "../../prisma/client.js";

type RoleUpdateInput = {
  id: string;
  name?: string;
  description?: string;
};

const findByNameExceptThis = async (name: string, id: string) => {
  return prisma.role.findFirst({
    where: {
      name,
      id: {
        not: id,
      },
    },
  });
};

const findById = async (id: string) => {
  return prisma.role.findUnique({
    where: { id },
  });
};

const findByName = async (name: string) => {
  return prisma.role.findUnique({
    where: { name },
  });
};
const findByIdWithPermissions = async (
  id: string
) => {
  return prisma.role.findUnique({
    where: {
      id,
    },
    include: {
      rolePermissions: {
        include: {
          permission: true,
        },
      },
    },
  });
};

const getRoles = async () => {
  return prisma.role.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });
};

const createRole = async (data: Prisma.RoleCreateInput) => {
  return prisma.role.create({
    data
  });
};

const updateRole = async (data: RoleUpdateInput) => {
  return prisma.role.update({
    where: { id: data.id },
    data: {
      name : data.name,
      description: data.description,
    }
  });
};

const getOneRole = async (id: string) => {
  return prisma.role.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      description: true
    },
  });
};

const deleteRole = async (id: string) => {
  return prisma.role.delete({
    where: {
      id,
    },
  });
};
const assignPermissions = async (roleId: string, permissionIds: string[]) => {
  await prisma.rolePermission.deleteMany({
    where: {
      roleId,
    },
  });

  return prisma.rolePermission.createMany({
    data: permissionIds.map((permissionId) => ({
      roleId,
      permissionId,
    })),
  });
};

export default { findByNameExceptThis,findById, findByName, getRoles, createRole, updateRole, getOneRole, deleteRole, assignPermissions, findByIdWithPermissions };