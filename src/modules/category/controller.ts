import { Request, Response } from "express";
import service from "./service.js";
import {  CreateCategoryDto, onlyIdDto, PatchCategoryDto, UpdateCategoryDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";

const getCategory = async (req: Request, res: Response) => {
  const category = await service.getCategory();

  if(category.length === 0) {
    throw new ApiError(404, "No data found");
  }
  
  return res.status(200).json({success: true,
    message: "Categories fetched successfully",
    data: category,
  });
};

const getOneCategory = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const category = await service.getOneCategory(req.params);

  if(!category){
    throw new ApiError(401, "Category doesn't exist");
  }

  return res.status(200).json({success: true,
    message: "Category data fetched successfully",
    data:category
  })
}
const deleteCategory = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  await service.deleteCategory(req.params);

  return res.status(200).json({success: true,
    message: "Category deleted successfully",
  })
}

const createCategory = async (req: Request<{}, {}, CreateCategoryDto>, res: Response ) => {
  const category = await service.createCategory(req.body);

  return res.status(201).json({
    success: true,
    message: "Category created successfully",
    data: category,
  });
};

const patchCategory = async ( req: Request<{}, {}, PatchCategoryDto>, res: Response ) => {
  await service.patchCategory(req.body);

  return res.status(200).json({
    success: true,
    message: "Category status updated successfully",
  });
};

const updateCategory = async ( req: Request<{}, {}, UpdateCategoryDto>, res: Response ) => {
  await service.udpateCategory(req.body);

  return res.status(200).json({
    success: true,
    message: "Category updated successfully",
  });
};

export default { createCategory, getCategory, patchCategory, updateCategory, getOneCategory, deleteCategory };