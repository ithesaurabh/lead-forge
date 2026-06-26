import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(200, "Name cannot exceed 200 characters"),

  categories: z
    .array(
      z.uuid("Invalid category ID")
    )
    .min(1, "At least one category is required")
    .max(5, "A product cannot belong to more than 5 categories"),
  
  description: z
    .string()
    .trim()
    .max(50000, "Description too long")
    .optional(),

  images: z
    .array(
      z.url("Invalid image URL")
    )
    .min(1, "At least one image is required")
    .max(10, "Maximum 10 images are allowed"),

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

export const patchProductSchema = z.object({
  id: z.string().trim(),
  newStatus: z.boolean(),
});

export const updateProductSchema = z.object({
  id: z.string().trim(),

  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(200, "Name cannot exceed 200 characters").optional(),

  categories: z
    .array(
      z.uuid("Invalid category ID")
    )
    .min(1, "At least one category is required")
    .max(5, "A product cannot belong to more than 5 categories"),

  description: z
    .string()
    .trim()
    .max(50000, "Description too long")
    .optional(),

  images: z
    .array(
      z.url("Invalid image URL")
    )
    .min(1, "At least one image is required")
    .max(10, "Maximum 10 images are allowed"),

  tags: z
    .array(
      z.string().trim().min(1).max(50)
    )
    .max(20, "Maximum 20 tags allowed")
    .optional(),
});
