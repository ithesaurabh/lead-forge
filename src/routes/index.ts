import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import roleRoutes from "../modules/roles/routes.js";
import permissionRoutes from "../modules/permissions/route.js";
import categoryRoutes from "../modules/category/routes.js";
import productRoutes from "../modules/product/routes.js";
import authRoutes from "../modules/auth/routes.js";
import uploadRoutes from "../modules/upload/routes.js";

const router = Router();

router.use("/upload", uploadRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/role", roleRoutes);
router.use("/permission", permissionRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export default router;