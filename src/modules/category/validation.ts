import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  description: z
    .string()
    .trim()
    .max(50000, "Description too long")
    .optional(),

  image: z
    .url("Invalid image URL")
    .optional(),

   tags: z
    .array(
      z.string().trim().min(1).max(50)
    )
    .max(20, "Maximum 20 tags allowed")
    .optional(),
});

export const onlyIdSchema = z.object({
  id: z.string().trim()
});

export const patchCategorySchema = z.object({
  id: z.string().trim(),
  newStatus: z.boolean(),
});

export const updateCategorySchema = z.object({
  id: z.string().trim(),

  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters").optional(),

  description: z
    .string()
    .trim()
    .max(50000, "Description too long")
    .optional(),

  image: z
    .url("Invalid image URL")
    .optional(),

 tags: z
    .array(
      z.string().trim().min(1).max(50)
    )
    .max(20, "Maximum 20 tags allowed")
    .optional(),
});
