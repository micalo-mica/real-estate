import mongoose from "mongoose";
const { Schema } = mongoose;

const PropertySchema = new Schema({
  userId: { type: String, required: true },
  agentId: { type: String, required: true },
  houseId: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
  mapLocation: {
    lat: { type: String },
    lng: { type: String },
  },
  propertyFor: {
    type: String,
    required: true,
    enum: ["sell", "rent"],
  },
  photos: { type: [String], required: true },
  propertyName: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  cat: { type: String, required: true },
  price: { type: Number, required: true },
  photos: { type: [String], required: true },
  rooms: { type: [String] },
  lowestPrice: { type: Number },
  likes: { type: [String], default: [] },
  dislikes: { type: [String], default: [] },
  likeNo: { type: Number, default: 0 },
  totalStars: { type: Number, default: 0 },
  starNumber: { type: Number, default: 0 },
  totalRomes: { type: Number, default: 0 },

  featured: { type: Boolean, default: false },
  Amenities: {
    isWater: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    singleMeter: { type: Boolean, default: false },
    smoking: { type: Boolean, default: false },
    inCity: { type: Boolean, default: false },
    closeToCity: { type: Boolean, default: false },
    portsArea: { type: Boolean, default: false },
    childrenPlayArea: { type: Boolean, default: false },
    trees: { type: Boolean, default: false },
    gate: { type: Boolean, default: false },
    lifter: { type: Boolean, default: false },
    swimmingPool: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
  },
});

export default mongoose.model("Property", PropertySchema);
