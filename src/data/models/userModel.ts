import { model } from "mongoose";
import UserSchema from "../schema/userSchema";

const UserModel = model('Users', UserSchema);

export default UserModel;
