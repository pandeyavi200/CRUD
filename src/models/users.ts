import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  name: string;
  dept: string;
}

interface User {
  name: string;
  dept: string;
}

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;
