// lib/database.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MongoDb;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

// Use a cached global variable to reuse connection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 5,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB Connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
