import { z } from "zod";
import { createProductSchema, updateProductSchema, patchProductSchema, onlyIdSchema } from "./validation.js";

export type CreateProductDto = z.infer<typeof createProductSchema>;
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
export type PatchProductDto = z.infer<typeof patchProductSchema>;
export type onlyIdDto = z.infer<typeof onlyIdSchema>;