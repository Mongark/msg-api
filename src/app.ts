import express from "express";
import cors from "cors";

const app = express();
const healthRouter = express.Router();

app.use(express.json());
app.use(cors());

app.get('/ping', (req: express.Request, res: express.Response) => res.status(200).json("pong"));

app.use("/", healthRouter);

export default app;

