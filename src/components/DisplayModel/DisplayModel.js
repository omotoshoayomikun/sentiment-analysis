"use client"

import React from "react";
import styles from "./DisplayModel.module.css";
import { OutlineBtn } from "../Form/Btn";
import { useRouter } from "next/navigation";

function DisplayModel(props) {
    const router = useRouter()
  return (
    <>
      <div className="w-[100%] h-full fixed flex items-center justify-center z-50 top-0 left-0">
        <div className="w-[450px] h-[250px] bg-white rounded-xl p-4 z-10">
            <h3 className="h-[170px] w-full justify-center items-center flex text-2xl ">Please you need to login before you can leave reviews</h3>
            <div className="flex gap-3 justify-end">
            <OutlineBtn title="Login" styles={{border: "1.7px solid green"}} handleClick={() => router.push("/login")} />
            <OutlineBtn title="Cancel" styles={{border: "1.7px solid red"}} handleClick={() => props.setModel(false)} />

            </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#0b0b0b84]" onClick={() => props.setModel(false)}></div>
      </div>
    </>
  );
}

export default DisplayModel;
