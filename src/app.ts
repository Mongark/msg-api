import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import message_router from "./routes/message_router";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const healthRouter = express.Router();

const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL;

mongoose.connect(MONGO_URL);
const database = mongoose.connection;

database.on('error', (err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get('/ping', (req: express.Request, res: express.Response) => res.status(200).json("pong"));

app.use("/", healthRouter);
app.use("/", message_router);

export default app;

