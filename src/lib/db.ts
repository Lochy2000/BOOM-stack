import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

let isConnected = false;

/**
 * Connect to MongoDB
 * Called automatically when using db()
 */
export const connectDB = async () => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  }
  return client;
};

/**
 * Get database instance
 * Usage: const items = await db().collection("items").find().toArray()
 */
export const db = () => {
  const dbName = process.env.MONGODB_DB || "boom";
  return client.db(dbName);
};
