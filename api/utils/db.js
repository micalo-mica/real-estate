import mongoose from "mongoose";

const connect = async () => {
  try {
    // await mongoose.connect(process.env.MONGO);
    await mongoose.connect("mongodb://127.0.0.1:27017/Orantage");
    // await mongoose.connect("mongodb://localhost:27017/Orantage");
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

export default connect;
