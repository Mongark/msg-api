import { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        required: true,
        type: String,
    },
});

export default UserSchema;
