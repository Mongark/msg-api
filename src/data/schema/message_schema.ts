import { Schema } from "mongoose";

const message_schema = new Schema({
    from_user: String,
    to_user: String,
    message: String,
});

export default message_schema;
