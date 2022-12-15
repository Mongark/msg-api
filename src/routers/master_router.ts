import { Router, Request, Response } from "express";

import message_router from "./message_router/message_router";

const master_router = Router();

const healthRouter = Router();

master_router.get('/ping', (_req: Request, res: Response) => res.status(200).json("pong"));

master_router.use("/", healthRouter);
master_router.use("/", message_router);

export default master_router;
