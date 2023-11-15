import "#app/global/sequelize.js";
import express from "express";
import bodyParser from "body-parser";
import convertEmptyStringToNull from "#app/middlewares/convertEmptyStringToNull.js";
import postsRouter from "#app/routes/postRoutes.js";
import categoryRouter from "#app/routes/categoryRoutes.js";

const DOMAIN = "http://localhost";
const PORT = 3000;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(convertEmptyStringToNull);
app.use("/api/posts", postsRouter);
app.use("/api/categories", categoryRouter);

app.listen(PORT);
console.log("Server is active now");