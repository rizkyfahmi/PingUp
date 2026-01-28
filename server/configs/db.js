import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURL = `${process.env.MONGODB_URL}/pingup`;
    await mongoose.connect(mongoURL);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
