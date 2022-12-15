import { Router } from "express";

import message_handler from "../../handlers/message_handler";

const message_router = Router();

message_router.post("/message", message_handler.post_message);

export default message_router;
