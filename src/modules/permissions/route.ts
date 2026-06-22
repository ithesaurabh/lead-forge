import { Router } from "express";
import permissionController from "./controller.js";
const router = Router();

router.get("/", permissionController.getPermissions);

export default router;