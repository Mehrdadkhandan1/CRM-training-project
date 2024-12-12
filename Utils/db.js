import mongoose from "mongoose";

async function connectDb() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected DB");
}

export default connectDb