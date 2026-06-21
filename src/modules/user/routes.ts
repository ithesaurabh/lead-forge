import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import userController from "./controller.js";
import { createUserSchema, patchUserSchema, updateUserSchema, changePasswordUserSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", userController.getUser);
router.get("/:id", validate({params: onlyIdSchema}),userController.getOneUser);
router.post("/", validate({body: createUserSchema}),userController.createUser);
router.put("/", validate({body: updateUserSchema}),userController.updateUser);
router.patch("/", validate({body: patchUserSchema}),userController.patchUser); //to change the status
router.patch("/change-password", validate({body: changePasswordUserSchema}),userController.changePassword); //to change the password
router.delete("/:id", validate({params: onlyIdSchema}),userController.deleteUser); //to change the password

export default router;