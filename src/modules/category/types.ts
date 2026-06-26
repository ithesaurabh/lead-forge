import { z } from "zod";
import { createCategorySchema, updateCategorySchema, patchCategorySchema, onlyIdSchema } from "./validation.js";

export type CreateCategoryDto = z.infer<typeof createCategorySchema>;
export type UpdateCategoryDto = z.infer<typeof updateCategorySchema>;
export type PatchCategoryDto = z.infer<typeof patchCategorySchema>;
export type onlyIdDto = z.infer<typeof onlyIdSchema>;