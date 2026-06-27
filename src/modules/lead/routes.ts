import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import leadController from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import authorize from "../../middlewares/authorize.js";
import { createLeadSchema, patchLeadSchema, onlyIdSchema } from "./validation.js";

const router = Router();

router.get("/", authenticate, authorize("lead.read"), leadController.getLead);
router.get("/:id", authenticate, authorize("lead.read"), validate({ params: onlyIdSchema }), leadController.getOneLead);
router.post("/", validate({ body: createLeadSchema }), leadController.createLead);
router.patch("/", authenticate, authorize("lead.update"), validate({ body: patchLeadSchema }), leadController.patchLead);
router.delete("/:id", authenticate, authorize("lead.delete"), validate({ params: onlyIdSchema }), leadController.deleteLead);

export default router;  