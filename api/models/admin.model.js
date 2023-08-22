import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: Boolean, default: false },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clearance: {
      type: Number,
      default: 1,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    relationship: { type: String, required: true },
    gender: { type: String, required: true },
    Identification: { type: [String], required: true },
    bankName: { type: String, required: true },
    accName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    profileImg: { type: String, required: true },
    phoneNumber: { type: Number, required: true, minlength: 11, maxlength: 13 },
    description: { type: String, required: true },
    LGA: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
