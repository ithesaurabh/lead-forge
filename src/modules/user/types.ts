import { z } from "zod";
import { createUserSchema, patchUserSchema, updateUserSchema, changePasswordUserSchema, onlyIdSchema } from "./validation.js";

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type PatchUserDto = z.infer<typeof patchUserSchema>;
export type ChangePasswordUserDto = z.infer<typeof changePasswordUserSchema>;
export type onlyIdDto = z.infer<typeof onlyIdSchema>;