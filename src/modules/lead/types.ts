import { z } from "zod";
import { createLeadSchema, patchLeadSchema, onlyIdSchema } from "./validation.js";

export type CreateLeadDto = z.infer<typeof createLeadSchema>;
export type PatchLeadDto = z.infer<typeof patchLeadSchema>;
export type OnlyIdDto = z.infer<typeof onlyIdSchema>;