import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    agentId: { type: String, required: true },
    userId: { type: String, required: true },
    propertyId: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    maxPeople: { type: Number },
    roomNo: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
