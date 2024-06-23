import cors from "cors";
import { Router } from "express";
const router = Router();

import * as CategoryController from "../controllers/categoryController.js";

router.post("/", cors(), CategoryController.create);
router.get("/category", cors(), CategoryController.getAll);

export default router;