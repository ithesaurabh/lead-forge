import type { Prisma } from "../../generated/prisma/client.js";
import prisma from "../../prisma/client.js";


type ChangeCategoryStatusInput = {
  id: string;
  isActive: boolean;
};

type CategoryUpdateInput = {
  id: string;
  name?: string;
  description?: string;
  image?: string;
  tags?: string[];
};
const findManyByIds = async (ids: string[]) => {
  return prisma.category.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      id: true,
    },
  });
};
const findBySlug = async (slug: string) => {
  return prisma.category.findUnique({
    where: { slug },
  });
};

const findByNameExceptThis = async (name: string, id: string) => {
  return prisma.category.findFirst({
    where: {
      name,
      id: {
        not: id,
      },
    },
  });
};

const getCategory = async () => {
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      isActive:true
    },
  });
};

const getOneCategory = async (id: string) => {
  return prisma.category.findUnique({
    where:{
      id
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      tags:true,
      isActive:true
    },
  });
};


const findById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

const createCategory = async (data: Prisma.CategoryCreateInput) => {
  return prisma.category.create({
    data
  });
};

const changeStatus = async (data: ChangeCategoryStatusInput) => {
  return prisma.category.update({
    where: { id: data.id },
    data: { isActive: data.isActive },
  });
};

const updateCategory = async (data: CategoryUpdateInput) => {
  return prisma.category.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
      image:data.image,
      tags: data.tags
    }
  });
};

const deleteCategory = async (id: string) => {
  return prisma.category.delete({
    where: {
      id,
    },
  });
};

export default {findManyByIds, findBySlug, findById, getCategory,  getOneCategory, createCategory, changeStatus, updateCategory, deleteCategory, findByNameExceptThis };