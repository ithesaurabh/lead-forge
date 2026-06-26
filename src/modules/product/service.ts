import sanitizeRichText from "../../utils/sanitize-html.js";
import type { CreateProductDto, UpdateProductDto, PatchProductDto, onlyIdDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";
import repository from "./repository.js";
import categoryRepository from "../category/repository.js";
import slugify from "../../utils/slugify.js";

const createProduct = async (payload: CreateProductDto) => {
  const slug = slugify(payload.name);
  const existingproduct = await repository.findBySlug(slug);

  if (existingproduct) {
    throw new ApiError(400, "Product already exists");
  }
  const categories = await categoryRepository.findManyByIds(payload.categories);

  if (categories.length !== payload.categories.length) {
    throw new ApiError(400, "One or more categories do not exist.");
  }
  const product = await repository.createProduct({
    name: payload.name,
    description: payload.description ? sanitizeRichText(payload.description) : undefined,
    categories: {
      connect: payload.categories.map(id => ({
        id,
      })),
    },
    images: payload.images,
    tags: payload.tags,
    slug: slug,
  });
  return await repository.getOneProduct(product.id);
};

const patchProduct = async (payload: PatchProductDto) => {
  const existingProduct = await repository.findById(payload.id);

  if (!existingProduct) {
    throw new ApiError(400, "Product doesn't exist");
  }

  return repository.changeStatus({
    id: payload.id,
    isActive: payload.newStatus,
  });
};


const udpateProduct = async (payload: UpdateProductDto) => {
  const existingProduct = await repository.findById(payload.id);

  if (!existingProduct) {
    throw new ApiError(400, "Product doesn't exist");
  }

  const isNameNotUnique = payload.name ? await repository.findByNameExceptThis(payload.name, payload.id) : false;
  if (isNameNotUnique) {
    throw new ApiError(400, "Name already exists");
  }

  return repository.updateProduct({
    id: payload.id,
    name: payload.name,
    description: payload.description ? sanitizeRichText(payload.description) : undefined,
    categories: {
      connect: payload.categories.map(id => ({
        id,
      })),
    },
    images: payload.images,
    tags: payload.tags
  });
};

const getProduct = async () => {
  const product = await repository.getProduct();
  return product;
}
const getOneProduct = async (payload: onlyIdDto) => {
  const product = await repository.getOneProduct(payload.id);
  if (!product) {
    throw new ApiError(404, "Product doesn't exist");
  }
  return product;
}
const deleteProduct = async (payload: onlyIdDto) => {
  const existingProduct = await repository.findById(payload.id);
  if (!existingProduct) {
    throw new ApiError(404, "Product doesn't exist");
  }
  await repository.deleteProduct(payload.id);

  return true;
}

export default { createProduct, getProduct, patchProduct, udpateProduct, getOneProduct, deleteProduct };