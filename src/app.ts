import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const healthRouter = express.Router();

app.use(bodyParser.text());
// app.use(bodyParser.urlencoded());
// app.use(cors());

app.get('/ping', (req, res) => {
    res.setHeader("content-type", "application/text");
    res.status(200);
    res.send("pong")
    res.end();
});

app.use("/", healthRouter);

export default app;

