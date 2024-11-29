"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookieOption = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
};

export const RegisterAction = async (url, body) => {
  try {
    const res = await fetch(url, { method: "POST", body: body });
    const data = await res.json();
    if (res.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err) {
    return { success: false, message: err.message || "An error occurred" };
  }
};

export const LoginAction = async (url, body) => {
  try {
    const res = await fetch(url, { method: "POST", body: body });
    const data = await res.json();
    if (res.ok) {
      SetCookie("session", data.data);
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err) {
    return { success: false, message: err.message || "An error occurred" };
  }
};

export const CreateSentimentAction = async (url, body) => {
  try {
    const res = await fetch(url, { method: "POST", body: body });
    const data = await res.json();
    if (res.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err) {
    return { success: false, message: err.message || "An error occurred" };
  }
};

export const PutApi = async (url, body) => {
  try {
    const res = await fetch(url, { method: "POST", body: body });
    const data = await res.json();
    if (res.ok) {
      return { success: true, message: data.message, data: data.data };
    } else {
      return { success: false, message: data.message, data: data };;
    }
  } catch (err) {
    return { success: false, message: err.message || "An error occurred" };
  }
};

export const GetApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      return { success: true, message: data.message, data: data.data};
    } else {
      return { success: false, message: data.message, data: data};
    }
  } catch (err) {
    return { success: false, message: err.message || "An error occurred" };
  }
};

export const GetCookie = () => {
  const cookie = cookies().get("session");
  if (cookie) {
    const cookieValue = JSON.parse(cookie.value);
    return cookieValue;
  } else {
    return false;
  }
};

export const DeleteCookie = async () => {
  const result = await cookies().delete("session");
};

export const SetCookie = async (name, value) => {
  await cookies().set(name, value, cookieOption);
  //  console.log(cookie);
};
