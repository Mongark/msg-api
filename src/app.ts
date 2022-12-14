import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const healthRouter = express.Router();

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.setHeader("content-type", "application/text");
    res.status(200);
    res.send("pong");
});

app.use("/", healthRouter);

export default app;

