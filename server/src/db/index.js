import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log("error while connecting mongoDB", error.message);
    process.exit(1);
  }
};

export default connectDB;