import cors from "cors";
import { Router } from "express";
const router = Router();

import * as applicationController from "../controllers/applicationController.js";

router.post("/",  applicationController.create);
router.get("/application",  applicationController.getAll);
router.put("/:id",  applicationController.update);
router.delete("/:id", applicationController.remove);
router.get("/user/:userId", applicationController.getByUserId);

export default router;