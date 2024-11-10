"use client"

import React, {useState, useEffect} from "react";
import { Input } from "../Form/Input";
import { Btn } from "../Form/Btn";
import { useRouter } from "next/navigation";
import { GetCookie, PutApi } from "../../../lib/Actions";
import { toast } from "react-toastify";
import { ToastOption } from "@/Data/ToastOption";

function Settings({data}) {

  const [value, setValue] = useState({
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    email: data.email || "",
    phone: data.phone || "",
    id: data._id
  });
  
  const router = useRouter();
  const [loading, setLoading] = useState({ login: false });

  const Inputs = [
    {
      id: 1,
      name: "lastname",
      label: "Last name",
      type: "text",

    },
    {
      id: 2,
      name: "firstname",
      label: "First name",
      type: "text",

    },
    {
      id: 3,
      name: "email",
      label: "Email",
      type: "email",
      disabled: true,
    },
    {
      id: 4,
      name: "phone",
      label: "Phone Number",
      type: "tel",

    },
  ];

  // useEffect(() => {
  //   const GetData = async () => {
  //     const cookie = await GetCookie();
  //     if (!cookie) router.push("/");
  //   };

  //   GetData();
  // }, []);

  const handleOnchange = (e, name) => {
    setValue({...value, [name]: e.target.value});
  }

  const handleSubmit = async () => {
    try {
      setLoading({ ...loading, login: true });
      const response = await PutApi(`${process.env.NEXT_PUBLIC_BASEURL}/api/user/profile/${value.id}`, JSON.stringify(value) );
      if (!response.success) {
        setLoading({ ...loading, login: false });
        toast.error(response.message, ToastOption);
      } else {
        setLoading({ ...loading, login: false });
        toast.success(response.message, ToastOption);
        setValue(response.data);
        router.refresh();
      }
    } catch (error) {
      setLoading({ ...loading, login: false });
      toast.error(error.message, ToastOption);
    } finally {
      setLoading({ ...loading, login: false });
    }
  }

  console.log(value)

  return (
    <>
      <div className="h-[340px] overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-2 gap-5">
            {
                Inputs.map((input) => (
                    <Input key={input.id} {...input} value={value[input.name]} handleOnchange={handleOnchange} />
                ))
            }
        </div>
        <Btn title="Update" handleClick={handleSubmit}  disabled={loading.login} styles={{width: "200px", background: "#007bff"}} />
      </div>
    </>
  );
}

export default Settings;
