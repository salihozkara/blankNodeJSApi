import express from "express";
import { createServer } from "http";
import router from "./src/routes/index.route.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(router);

const httpServer = createServer(app);
let port = 8081;
httpServer.listen(port);
console.log(`http server listening at port ${port}`);

export default { app };
