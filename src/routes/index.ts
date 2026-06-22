import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import roleRoutes from "../modules/roles/routes.js";
import permissionRoutes from "../modules/permissions/route.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/role", roleRoutes);
router.use("/permission", permissionRoutes);
export default router;