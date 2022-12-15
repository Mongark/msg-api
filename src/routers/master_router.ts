import { Router, Request, Response } from "express";

import message_router from "./message_router/message_router";
import health_router from "./health_router/health_router";

const master_router = Router();

master_router.use("/", health_router);
master_router.use("/", message_router);

export default master_router;
