import express from "express";
import cors from "cors";
import message_router from "./routes/message_router";

const app = express();
const healthRouter = express.Router();

app.use(express.json());
app.use(cors());

app.get('/ping', (req: express.Request, res: express.Response) => res.status(200).json("pong"));

app.use("/", healthRouter);
app.use("/", message_router);

export default app;

