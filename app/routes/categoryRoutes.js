import { Router } from "express";
import categoryController from "#app/controllers/categoryController.js";

const router = new Router();

router.get("/", categoryController.getAll);
router.get("/create", categoryController.create);
router.get("/:id", categoryController.getOne);

export default router;