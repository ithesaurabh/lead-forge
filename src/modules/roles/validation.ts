import { z } from "zod";

export const createRoleSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name cannot exceed 20 characters"),

  description: z
    .string()
    .trim()
    .max(50, "Description cannot exceed 50 characters")
    .optional()
});

export const onlyIdSchema = z.object({
  id: z.string().trim()
});

export const updateRoleSchema = z.object({
  id: z.string().trim(),

  name: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters").optional(),

  description: z
    .string()
    .trim()
    .max(50, "Last name cannot exceed 50 characters")
    .optional()
});

export const assignPermissionsSchema = z.object({
  permissionIds: z
    .array(z.uuid())
    .min(1, "At least one permission is required"),
});