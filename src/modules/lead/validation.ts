import { z } from "zod";
import { LeadStatus, LeadType } from "../../generated/prisma/client.js";

export const createLeadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .optional(),

  email: z
    .email("Invalid email address")
    .toLowerCase(),

  address: z
    .string()
    .trim()
    .max(1000, "Address is too long")
    .optional(),

  message: z
    .string()
    .trim()
    .max(5000, "Message is too long")
    .optional(),

  type: z.nativeEnum(LeadType, "Invalid lead type"),

  status: z.nativeEnum(LeadStatus, "Invalid lead status").optional(),

  productId: z
    .uuid("Invalid product ID")
    .optional(),
});
export const onlyIdSchema = z.object({
  id: z.uuid("Invalid ID"),
});

export const patchLeadSchema = z.object({
  id: z.uuid("Invalid ID"),
  status: z.nativeEnum(LeadStatus, "Invalid lead status"),
});