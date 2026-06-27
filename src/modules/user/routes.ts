import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import userController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createUserSchema, patchUserSchema, updateUserSchema, changePasswordUserSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", authenticate, authorize("user.read"), userController.getUser);
router.get("/:id", authenticate, authorize("user.read"), validate({ params: onlyIdSchema }), userController.getOneUser);
router.post("/", authenticate,authorize("user.create"), validate({ body: createUserSchema }), userController.createUser);
router.put("/", authenticate, authorize("user.update"), validate({ body: updateUserSchema }), userController.updateUser);
router.patch("/", authenticate,authorize("user.update"), validate({ body: patchUserSchema }), userController.patchUser);
router.patch("/change-password",authorize("user.update"), authenticate, validate({ body: changePasswordUserSchema }), userController.changePassword);
router.delete("/:id", authenticate,authorize("user.delete"), validate({ params: onlyIdSchema }), userController.deleteUser);

export default router;  