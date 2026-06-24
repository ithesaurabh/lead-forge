import { z } from "zod";
import { uploadSchema } from "./validation.js";

export type uploadDto = z.infer<typeof uploadSchema>;