"use client";

import { Btn } from "@/components/Form/Btn";
import { Input } from "@/components/Form/Input";
import NavLink from "@/components/Nav/NavLink";
import Link from "next/link";
import React, { useState } from "react";
import { RegisterAction } from "../../../../lib/Actions";
import { toast, Bounce } from 'react-toastify';
import { useRouter } from "next/navigation";


const ToastOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

function Page() {

  const router = useRouter();

  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState({
    login: false,
  });
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

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
    {
      id: 3,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const handleOnchange = (e, name) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handlRegister = async () => {
    if (
      value.email == "" ||
      value.password == "" ||
      value.confirmPassword == ""
    ) {
      setErrMsg("Please fill in all fields");
    } else if (value.password !== value.confirmPassword) {
      setErrMsg("Passwords do not match");
    } else {
      try {
        setErrMsg("");
        setLoading({ ...loading, login: true });
        const response = await RegisterAction(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/user/register`,
          JSON.stringify(value)
        );

        if (!response.success) {
          toast.error(response.message, ToastOption);
          setErrMsg(response.message || "An error occurred");
        } else {
          toast.success(response.message, ToastOption);
          router.push("/login");
        }

        // setErrMsg("");
        // setLoading({ ...loading, login: false });
      } catch (err) {
        setLoading({ ...loading, login: false });
        toast.error(err.message, ToastOption);
        setErrMsg(err.message);
      } finally {
        setLoading({ ...loading, login: false });
      }
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <NavLink />
      <div className="w-full h-full flex justify-center items-center">
        <div className={`login_card mt-[-140px]`}>
          <h3 className="mb-5 text-[22px] font-bold text-center">SIGN UP</h3>
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
          </div>
          {errMsg && (
            <div className="text-center font-bold mt-[-12px] text-red-700">
              {errMsg}
            </div>
          )}
          <div className="">
            <Btn
              title="Register"
              handleClick={handlRegister}
              disabled={loading.login}
            />
          </div>
          <div className="text-center mt-3 text-[13px]">
          Already have an account? 
            <Link href="/login" className="text-[13px] text-[--anchor-text-color] cursor-pointer ml-1">
               Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
