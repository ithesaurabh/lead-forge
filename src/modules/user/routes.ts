import { Router } from "express";

import { validate } from "../../middlewares/validate.js";

import userController from "./controller.js";
import { createUserSchema } from "./validation.js";

const router = Router();

router.post("/", validate({body: createUserSchema}),userController.createUser);

export default router;