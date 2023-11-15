import registerRoutes from "#app/router.js";
import "#app/global/sequelize.js";
import bodyParser from "body-parser";

const DOMAIN = "http://localhost";
const PORT = 3000;
const HOST = `${DOMAIN}:${PORT}`;

import express from "express";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
registerRoutes(app);

app.listen(PORT);
console.log("Server is active now");