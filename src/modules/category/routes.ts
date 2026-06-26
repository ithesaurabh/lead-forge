import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import categoryController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createCategorySchema, patchCategorySchema, updateCategorySchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", categoryController.getCategory);
router.get("/:id", validate({params: onlyIdSchema}),categoryController.getOneCategory);
router.post("/",  validate({body: createCategorySchema}),categoryController.createCategory);
router.put("/", validate({body: updateCategorySchema}),categoryController.updateCategory);
router.patch("/", validate({body: patchCategorySchema}),categoryController.patchCategory); 
router.delete("/:id", validate({params: onlyIdSchema}),categoryController.deleteCategory); 

export default router;  