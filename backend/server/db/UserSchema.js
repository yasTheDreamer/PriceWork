import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  salary: { type: Number, required: false },
  jobTitle: { type: String, required: false },
  zipCode: { type: Number, required: false },
  experience: { type: Number, required: false },
  email: { type: String, required: false },
  timeStamp: { type: String, required: true },
  socialLogin1: { type: String, required: false },
  socialLogin2: { type: String, required: false },
});

export default mongoose.model("User", UserSchema);
