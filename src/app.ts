import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { debug } from "console";

import { connectDB } from "./database/database";
import master_router from "./routers/master_router";

dotenv.config();

const app = express();

const db = connectDB();

if(!db) throw("DB failed to connect");

process.on('SIGTERM', () => db.close(true, () => debug("Closing connection to MongoDB")));

app.use(express.json());
app.use(cors());

app.use(master_router);

export default app;

