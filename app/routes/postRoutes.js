import { Router } from "express";
import postController from "#app/controllers/postController.js";

const router = new Router();

router.get("/", postController.getAll);
router.get("/create", postController.create);
router.get("/:id", postController.getOne);
router.get("/:key/:value", postController.getAllBy);

export default router;