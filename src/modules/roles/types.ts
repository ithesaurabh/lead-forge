import { z } from "zod";
import { createRoleSchema, updateRoleSchema, onlyIdSchema, assignPermissionsSchema} from "./validation.js";

export type CreateRoleDto = z.infer<typeof createRoleSchema>;
export type UpdateRoleDto = z.infer<typeof updateRoleSchema>;
export type onlyIdDto = z.infer<typeof onlyIdSchema>;
export type AssignPermissionsDto = z.infer<typeof assignPermissionsSchema>;