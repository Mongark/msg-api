import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import cors from 'cors';

import MessageRoutes from './routes/messageRouter';

dotenv.config();

const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL; // TODO: find more elegant solution to this line.


mongoose.connect(MONGO_URL);
const database = mongoose.connection;

const masterRouter = Router();
const app = express();

database.on('error', (error) => {
    console.log(error);
})

app.use(json());
app.use(cors());

masterRouter.get('/ping', (req, res) => res.status(200).send("pong"));
masterRouter.use('/messages', MessageRoutes);

app.use('/api', masterRouter);

export default app;
