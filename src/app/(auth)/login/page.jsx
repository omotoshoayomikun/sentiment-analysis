"use client";
import { Btn } from "@/components/Form/Btn";
import { Input } from "@/components/Form/Input";
import NavLink from "@/components/Nav/NavLink";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LoginAction } from "../../../../lib/Actions";
import { toast, Bounce } from "react-toastify";
import { ToastOption } from "@/Data/ToastOption";

function Page() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState({
    login: false,
  });
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();

  const Inputs = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 2,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleOnchange = (e, name) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handlLogin = async () => {
    try {
      setLoading({ ...loading, login: true });
      const response = await LoginAction(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/user/login`,
        JSON.stringify(value)
      );
      if (!response.success) {
        toast.error(response.message, ToastOption);
      } else {
        toast.success(response.message, ToastOption);
        router.push("/");
      }
    } catch (err) {
      setLoading({ ...loading, login: false });
      // setErrMsg(err.message);
      toast.error(err.message, ToastOption);
    } finally {
      setLoading({ ...loading, login: false });
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <NavLink />
      <div className="w-full h-full flex justify-center items-center">
        <div className={`login_card mt-[-140px]`}>
          <h3 className="mb-5 text-[22px] font-bold text-center">LOGIN</h3>
          <div>
            {Inputs.map((input, index) => (
              <div className="mb-5" key={index}>
                <Input
                  {...input}
                  value={value[input.name]}
                  handleOnchange={handleOnchange}
                />
              </div>
            ))}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <small className="font-bold text-[12px]">Remember Me</small>
              </div>
              <div className="">
                <Link
                  href=""
                  className="text-[15px] text-[--anchor-text-color] cursor-pointer"
                >
                  Forget Password
                </Link>
              </div>
            </div>
            <div className="">
              <Btn
                title="Login"
                handleClick={handlLogin}
                disabled={loading.login}
              />
            </div>
            <div className="ml-auto mr-auto w-[max-content] mt-2">
              <Link
                href="/sign-up"
                className="text-center text-[--anchor-text-color] text-[12px]"
              >
                sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
