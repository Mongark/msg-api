import { Router } from "express";

import message_handler from "../../handlers/message_handler";

const message_router = Router();

message_router.post("/message", message_handler.post_message);
message_router.get("/message", message_handler.get_message);
message_router.get("/messages", message_handler.get_messages);

export default message_router;
