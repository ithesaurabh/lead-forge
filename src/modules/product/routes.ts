import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import productController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createProductSchema, patchProductSchema, updateProductSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", productController.getProduct);
router.get("/:id", validate({params: onlyIdSchema}),productController.getOneProduct);
router.post("/",  validate({body: createProductSchema}),productController.createProduct);
router.put("/", validate({body: updateProductSchema}),productController.updateProduct);
router.patch("/", validate({body: patchProductSchema}),productController.patchProduct); 
router.delete("/:id", validate({params: onlyIdSchema}),productController.deleteProduct); 

export default router;  