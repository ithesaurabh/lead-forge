import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import roleController from "./controller.js";
import {createRoleSchema, updateRoleSchema, onlyIdSchema, assignPermissionsSchema } from "./validation.js";

const router = Router();

router.get("/", roleController.getRoles);
router.get("/:id", validate({params: onlyIdSchema}),roleController.getOneRole);
router.post("/", validate({body: createRoleSchema}),roleController.createRole);
router.put("/", validate({body: updateRoleSchema}),roleController.updateRole);
router.post("/:id/permissions", validate( {params: onlyIdSchema, body: assignPermissionsSchema,}), roleController.assignPermissions);
router.delete("/:id", validate({params: onlyIdSchema}),roleController.deleteRole);

export default router;