import mongoose from "mongoose";
const { Schema } = mongoose;

const AgentSchema = new Schema(
  {
    userId: { type: String, required: true },
    Name: { type: String, default: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    bankName: { type: String, required: true },
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    profileImg: { type: String, required: true },
    verified: { type: Boolean, default: false },
    description: { type: String },
    stateOfOrigin: { type: String, required: true },
    LGA: { type: String, required: true },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
    likeNo: { type: Number, default: 0 },
    Identification: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("Agent", AgentSchema);
