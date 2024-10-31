"use client"

import React, {useState} from "react";
import { Input } from "../Form/Input";
import { Btn } from "../Form/Btn";

function Settings({data}) {

  const [value, setValue] = useState({
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    email: data.email || "",
    phone: data.phone || "",
    password: "******",
  });

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

    },
    {
      id: 4,
      name: "phone",
      label: "Phone Number",
      type: "tel",

    },
    {
      id: 5,
      name: "password",
      label: "Password",
      type: "password",

    },
  ];

  const handleOnchange = (e, name) => {
    setValue({...value, [name]: e.target.value});
  }

  return (
    <>
      <div className="h-[387px] overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-2 gap-5">
            {
                Inputs.map((input) => (
                    <Input key={input.id} {...input} value={value[input.name]} handleOnchange={handleOnchange} />
                ))
            }
        </div>
        <Btn title="Update" styles={{width: "200px", background: "#007bff"}} />
      </div>
    </>
  );
}

export default Settings;
