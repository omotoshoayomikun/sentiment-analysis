import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/database";
import { User } from "../../../../../lib/Models/User";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { createSession } from "../../../../../lib/session";
import { SetCookie } from "../../../../../lib/Actions";

export const POST = async (request) => {
  try {
    await connectDB();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    } else {
      const comparePass = await bcrypt.compare(password, user.password);

      if (!comparePass) {
        return NextResponse.json(
          { message: "Invalid password" },
          { status: 401 }
        );
      } else {
        try {
          const session = JSON.stringify({ user_id: user._id, email: user.email });
           return NextResponse.json({ message: "Login successful", data: session } , { status: 200});
          //  await SetCookie("session", session);
          // await createSession(session);
          // return new Response.json({message: "Login successful"}, {
          //   status: 200,
          //   headers: {
          //     "Set-Cookie": "theme=dark"
          //   }
          // });
        } catch (err) {
          return NextResponse.json(
            { message: "An error occurred" },
            { status: 500 }
          );
        }
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};
