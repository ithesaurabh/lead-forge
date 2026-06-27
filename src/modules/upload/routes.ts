import { Router } from "express";
import * as uploadController from "./controller.js";
import { upload } from "../../middlewares/upload.js";
import authorize from "../../middlewares/authorize.js";
import authenticate from "../../middlewares/authenticate.js";

const router = Router();

router.post("/", authenticate, authorize("upload.create"), upload.single("file"), uploadController.uploadFile);

export default router;