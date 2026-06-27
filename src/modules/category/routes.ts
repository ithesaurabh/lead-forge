import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import categoryController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createCategorySchema, patchCategorySchema, updateCategorySchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", authenticate, authorize("category.read"), categoryController.getCategory);
router.get("/:id", authenticate, authorize("category.read"), validate({ params: onlyIdSchema }), categoryController.getOneCategory);
router.post("/", authenticate, authorize("category.create"), validate({ body: createCategorySchema }), categoryController.createCategory);
router.put("/", authenticate, authorize("category.update"), validate({ body: updateCategorySchema }), categoryController.updateCategory);
router.patch("/", authenticate, authorize("category.update"), validate({ body: patchCategorySchema }), categoryController.patchCategory);
router.delete("/:id", authenticate, authorize("category.delete"), validate({ params: onlyIdSchema }), categoryController.deleteCategory);

export default router;  