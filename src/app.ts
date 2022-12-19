import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import master_router from "./routers/master_router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(master_router);

export default app;

