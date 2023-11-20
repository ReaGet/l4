import { Router } from "express";
import postController from "#app/controllers/postController.js";

const router = new Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.get("/:key/:value", postController.getAllBy);
router.post("/", postController.create);
router.update("/:id", postController.update);
router.delete("/:id", postController.delete);

export default router;