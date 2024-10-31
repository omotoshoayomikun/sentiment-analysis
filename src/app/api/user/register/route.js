import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/database";
import { User } from "../../../../../lib/Models/User";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    await connectDB();
    const { password, email, confirmPassword } = await request.json();

    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return NextResponse.json({ message: "User already exists" }, {status: 400});
    } else {
      
          const saltRounds = 10;
          if (password !== confirmPassword) {
            return NextResponse.json({
              message: "Passwords do not match"}, {status: 400});
          } else {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = new User({
              email,
              password: hashedPassword,
            });
            await newUser.save();
            return NextResponse.json({
              message: "New user saved successfully"}, {status: 200});
          }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "An error occurred"}, {status: 400});
  }
};
