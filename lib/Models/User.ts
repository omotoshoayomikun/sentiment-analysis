import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
  },
  phone: String,
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model('User', UserSchema)