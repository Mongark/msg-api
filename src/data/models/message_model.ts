import { model } from "mongoose";

import message_schema from "../schema/message_schema";

const message_model = model('message', message_schema);

export default message_model;
