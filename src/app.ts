import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import message_router from "./routes/message_router";
import { connectDB } from "./database/database";
import {debug} from "console";

dotenv.config();

const app = express();
const healthRouter = express.Router();

const db = connectDB();

if(!db) throw("DB failed to connect");

process.on('SIGTERM', () => {
    db.close(true, () => {
        debug("Closing connection to MongoDB");
    });
});

app.use(express.json());
app.use(cors());

app.get('/ping', (_req: express.Request, res: express.Response) => res.status(200).json("pong"));

app.use("/", healthRouter);
app.use("/", message_router);

export default app;

