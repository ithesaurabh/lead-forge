import sanitizeRichText from "../../utils/sanitize-html.js";
import type { CreateCategoryDto, UpdateCategoryDto, PatchCategoryDto, onlyIdDto} from "./types.js";
import ApiError from "../../utils/ApiError.js";
import repository from "./repository.js";
import slugify from "../../utils/slugify.js";

const createCategory = async (payload: CreateCategoryDto) => {
  const slug = slugify(payload.name);
  const existingcategory = await repository.findBySlug(slug);

  if (existingcategory) {
    throw new ApiError(400, "Category already exists");
  }
  
  const category = await repository.createCategory({
    name: payload.name,
    description: payload.description ? sanitizeRichText(payload.description) : undefined,
    image: payload.image,
    tags: payload.tags,
    slug: slug
  });
  return await repository.getOneCategory(category.id);
};

const patchCategory = async (payload: PatchCategoryDto) => {
  const existingCategory = await repository.findById(payload.id);

  if (!existingCategory) {
    throw new ApiError(400, "Category doesn't exist");
  }

  return repository.changeStatus({
    id : payload.id,
    isActive: payload.newStatus,
  });
};


const udpateCategory = async (payload: UpdateCategoryDto) => {
  const existingCategory = await repository.findById(payload.id);

  if (!existingCategory) {
    throw new ApiError(400, "Category doesn't exist");
  }

  const isNameNotUnique = payload.name ? await repository.findByNameExceptThis(payload.name, payload.id) : false;
  if(isNameNotUnique){
    throw new ApiError(400, "Name already exists");
  }

  return repository.updateCategory({
    id : payload.id,
    name : payload.name,
    description :payload.description ? sanitizeRichText(payload.description) : undefined,
    image : payload.image,
    tags : payload.tags
  });
};

const getCategory = async ()=>{
  const category = await repository.getCategory();
  return category;
}
const getOneCategory = async (payload : onlyIdDto)=>{
  const category = await repository.getOneCategory(payload.id);
  return category;
}
const deleteCategory = async (payload : onlyIdDto)=>{
  const category = await repository.findById(payload.id);
  if(!category){
    throw new ApiError(404, "Category doesn't exist");
  }
  await repository.deleteCategory(payload.id);

  return true;
}

export default { createCategory, getCategory, patchCategory, udpateCategory, getOneCategory, deleteCategory};