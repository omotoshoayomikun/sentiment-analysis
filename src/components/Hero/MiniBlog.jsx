import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";


function MiniBlog(props) {
  return (
    <div className="card">
      <div className="font-bold mb-6"> {props.data.desc} </div>
      <div className="mb-6 line-clamp-6 text-justify">{props.data.body}</div>
      <div className="w-max ml-auto flex items-center gap-3 text-blue-700">
        <Link href={props.data.route}>Read More </Link> <FaLongArrowAltRight />
      </div>
    </div>
  );
}

export default MiniBlog;
