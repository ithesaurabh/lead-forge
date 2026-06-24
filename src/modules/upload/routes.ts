import { Router } from "express";
import * as uploadController from "./controller.js";
import { upload } from "../../middlewares/upload.js";

const router = Router();

router.post("/", upload.single("file"), uploadController.uploadFile);

export default router;