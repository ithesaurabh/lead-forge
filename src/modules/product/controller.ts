import { Request, Response } from "express";
import service from "./service.js";
import {  CreateProductDto, onlyIdDto, PatchProductDto, UpdateProductDto } from "./types.js";
import ApiError from "../../utils/ApiError.js";

const getProduct = async (req: Request, res: Response) => {
  const product = await service.getProduct();

  return res.status(200).json({success: true,
    message: "Products fetched successfully",
    data: product,
  });
};

const getOneProduct = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  const product = await service.getOneProduct(req.params);

  return res.status(200).json({success: true,
    message: "Product data fetched successfully",
    data:product
  })
}
const deleteProduct = async (req: Request<onlyIdDto, {}, {}>, res: Response) => {
  await service.deleteProduct(req.params);

  return res.status(200).json({success: true,
    message: "Product deleted successfully",
  })
}

const createProduct = async (req: Request<{}, {}, CreateProductDto>, res: Response ) => {
  const product = await service.createProduct(req.body);

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: product,
  });
};

const patchProduct = async ( req: Request<{}, {}, PatchProductDto>, res: Response ) => {
  await service.patchProduct(req.body);

  return res.status(200).json({
    success: true,
    message: "Product status updated successfully",
  });
};

const updateProduct = async ( req: Request<{}, {}, UpdateProductDto>, res: Response ) => {
  await service.udpateProduct(req.body);

  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
  });
};

export default { createProduct, getProduct, patchProduct, updateProduct, getOneProduct, deleteProduct };