import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import productController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createProductSchema, patchProductSchema, updateProductSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/",authenticate, authorize("product.read"), productController.getProduct);
router.get("/:id",authenticate, authorize("product.read"), validate({params: onlyIdSchema}),productController.getOneProduct);
router.post("/", authenticate, authorize("product.create"), validate({body: createProductSchema}),productController.createProduct);
router.put("/",authenticate, authorize("product.update"), validate({body: updateProductSchema}),productController.updateProduct);
router.patch("/", authenticate, authorize("product.update"), validate({body: patchProductSchema}),productController.patchProduct); 
router.delete("/:id", authenticate, authorize("product.delete"), validate({params: onlyIdSchema}),productController.deleteProduct); 

export default router;  