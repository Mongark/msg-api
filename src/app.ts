import express from "express";
import cors from "cors";

const app = express();
const healthRouter = express.Router();

app.use(express.json());
app.use(cors());

app.get('/ping', (req: express.Request, res: express.Response) => {
    res.setHeader("content-type", "application/json");
    res.status(200);
    res.json("pong");
});

app.use("/", healthRouter);

export default app;

