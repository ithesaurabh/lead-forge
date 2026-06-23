import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import userController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createUserSchema, patchUserSchema, updateUserSchema, changePasswordUserSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", authenticate, authorize("user.read"), userController.getUser);
router.get("/:id", authenticate,  validate({params: onlyIdSchema}),userController.getOneUser);
router.post("/", authenticate, validate({body: createUserSchema}),userController.createUser);
router.put("/", authenticate, validate({body: updateUserSchema}),userController.updateUser);
router.patch("/", authenticate, validate({body: patchUserSchema}),userController.patchUser); 
router.patch("/change-password", authenticate, validate({body: changePasswordUserSchema}),userController.changePassword); 
router.delete("/:id", authenticate, validate({params: onlyIdSchema}),userController.deleteUser); 

export default router;  