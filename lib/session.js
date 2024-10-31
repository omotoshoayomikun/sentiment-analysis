import "server-only";
// "use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.SECRET);
const cookie = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 30 * 24 * 60 * 60 * 1000,
};


export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}


export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    return null;
  }
}



export const createSession = async (payload) => {
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt(payload);
  
    cookies().set(cookie.name, session, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: expires,
    });
  };
  
  
  export const verifySession = async () => {
    const cookie = cookies().get(cookies.name)?.value;
    const session = await decrypt(cookie);
  
    if(session) {
      return session;
    } else {
      return false;
    }
  
  };