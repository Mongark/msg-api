import { model } from "mongoose";
import MessageSchema from "../schema/messageSchema";

const MessageModel = model('Messages', MessageSchema);

export default MessageModel;
