import mongoose from "mongoose";
const { Schema } = mongoose;

const PaymentDetailSchema = new Schema(
  {
    propertyId: { type: String, required: true },
    agentId: { type: String, required: true },
    roomNo: { type: String, required: true },
    tenantId: { type: String, required: true },
    tenantName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    timeRange: { type: String, required: true },
    expiresOn: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    payment_intent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PaymentDetail", PaymentDetailSchema);
