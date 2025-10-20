import "dotenv/config";
import app from "./app.js";
import { connectMongo } from "./db/mongo.js";
// import { serve } from "bun";

const PORT = parseInt(process.env.PORT || "3000", 10);

// Bun style: app.fetch را مستقیماً به Bun.serve بده
await connectMongo();

export default {
  port: PORT,
  fetch: app.fetch,
};

// serve({
//     port: 3000,
//     fetch: app.fetch,
//   });

//   console.log("✅ Custom server started on http://localhost:3000");
