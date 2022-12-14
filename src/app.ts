import express from "express";
import cors from "cors";

const app = express();
const healthRouter = express.Router();

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.setHeader("Content-type", "application/text");
    res.status(200).send("pong");
});

app.use("/", healthRouter);

export default app;

