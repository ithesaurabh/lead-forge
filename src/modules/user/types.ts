import { z } from "zod";
import { createUserSchema } from "./validation.js";

export type CreateUserDto =
  z.infer<typeof createUserSchema>;