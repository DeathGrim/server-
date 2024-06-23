import cors from "cors";
import { Router } from "express";
const router = Router();

import * as ServiceController from "../controllers/Service.controller.js";
import checkAuth from "./../utils/checkAuth.js";

router.post("/",  ServiceController.create);
router.get("/service",  ServiceController.getAll);

export default router;