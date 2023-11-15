import postController from "./controllers/postController.js";
import convertEmptyStringToNull from "./middlewares/convertEmptyStringToNull.js";

export default function registerRoutes(app){
	app.use(convertEmptyStringToNull);
	app.get("/", (_req, res) => {
		res.end("2");
	});
	app.get("/posts/", postController.getAll.bind(postController));
	app.get("/posts/create", postController.create.bind(postController));
	app.get("/posts/:id", postController.getOne.bind(postController));
	app.get("/posts/:key/:value", postController.getAllBy.bind(postController));
};