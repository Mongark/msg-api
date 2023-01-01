import { Schema } from "mongoose";

const MessageSchema = new Schema({
    message: {
        required: true,
        type: String,
    },
    from_user: {
        required: true,
        type: String,
    },
    to_user: {
        required: true,
        type: String,
    },
});

export default MessageSchema;
