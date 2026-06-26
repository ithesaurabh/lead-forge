import type { Prisma } from "../../generated/prisma/client.js";
import prisma from "../../prisma/client.js";


type ChangeProductStatusInput = {
  id: string;
  isActive: boolean;
};

type ProductUpdateInput = {
  id: string;
  name?: string;
  description?: string;
  categories?: {
    connect: { id: string }[];
  };
  images?: string[];
  tags?: string[];
};

const findBySlug = async (slug: string) => {
  return prisma.product.findUnique({
    where: { slug },
  });
};

const findByNameExceptThis = async (name: string, id: string) => {
  return prisma.product.findFirst({
    where: {
      name,
      id: {
        not: id,
      },
    },
  });
};

const getProduct = async () => {
  return prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      isActive:true
    },
  });
};

const getOneProduct = async (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      images: true,
      tags: true,
      isActive: true,
      categories: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  });
};


const findById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

const createProduct = async (data: Prisma.ProductCreateInput) => {
  return prisma.product.create({
    data
  });
};

const changeStatus = async (data: ChangeProductStatusInput) => {
  return prisma.product.update({
    where: { id: data.id },
    data: { isActive: data.isActive },
  });
};

const updateProduct = async (data: ProductUpdateInput) => {
  return prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
      categories: data.categories,
      images: data.images,
      tags: data.tags
    }
  });
};

const deleteProduct = async (id: string) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

export default { findBySlug, findById, getProduct,  getOneProduct, createProduct, changeStatus, updateProduct, deleteProduct, findByNameExceptThis };