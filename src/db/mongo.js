import mongoose from "mongoose";

export async function connectMongo() {
  const url = process.env.MONGO_URL;
  if (!url) throw new Error("MONGO_URL is not set");
  await mongoose.connect(url);
  console.log("✅ Mongo connected with Mongoose");
}
