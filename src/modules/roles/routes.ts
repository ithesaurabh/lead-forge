import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import roleController from "./controller.js";
import { createRoleSchema, updateRoleSchema, onlyIdSchema, assignPermissionsSchema } from "./validation.js";
import authorize from "../../middlewares/authorize.js";
import authenticate from "../../middlewares/authenticate.js";

const router = Router();

router.get("/", authenticate, authorize("role.read"), roleController.getRoles);
router.get("/:id", authenticate, authorize("role.read"), validate({ params: onlyIdSchema }), roleController.getOneRole);
router.post("/", authenticate, authorize("role.create"), validate({ body: createRoleSchema }), roleController.createRole);
router.put("/", authenticate, authorize("role.update"), validate({ body: updateRoleSchema }), roleController.updateRole);
router.post("/:id/permissions", authenticate, authorize("role.update"), validate({ params: onlyIdSchema, body: assignPermissionsSchema, }), roleController.assignPermissions);
router.delete("/:id", authenticate, authorize("role.delete"), validate({ params: onlyIdSchema }), roleController.deleteRole);

export default router;