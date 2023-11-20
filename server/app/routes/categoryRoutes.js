import { Router } from "express";
import categoryController from "#app/controllers/categoryController.js";

const router = new Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.post("/", categoryController.create);
router.update("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

export default router;