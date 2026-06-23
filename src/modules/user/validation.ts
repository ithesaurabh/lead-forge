import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),

  lastName: z
    .string()
    .trim()
    .max(50, "Last name cannot exceed 50 characters")
    .optional(),

  email: z
    .email("Invalid email address")
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters"),

  roleId: z.string().uuid("Invalid role id").optional()
});

export const onlyIdSchema = z.object({
  id: z.string().trim()
});

export const patchUserSchema = z.object({
  id: z.string().trim(),
  newStatus: z.boolean(),
});

export const changePasswordUserSchema = z.object({
  email: z
    .email("Invalid email address")
    .toLowerCase(),
  newPassword: z.string().trim(),
});

export const updateUserSchema = z.object({
  id: z.string().trim(),

  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters").optional(),

  lastName: z
    .string()
    .trim()
    .max(50, "Last name cannot exceed 50 characters")
    .optional(),

  email: z
    .email("Invalid email address")
    .toLowerCase().optional(),
  
  roleId: z.string().uuid("Invalid role id").optional()
});
