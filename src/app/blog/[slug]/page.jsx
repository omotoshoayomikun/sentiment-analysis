"use client";

import Blog1 from "@/components/Blog/Blog1/page";
import Blog2 from "@/components/Blog/Blog2/page";
import Blog3 from "@/components/Blog/Blog3/page";
import NavLink from "@/components/Nav/NavLink";
import Image from "next/image";
import React from "react";

function page({params}) {

  const {slug} = params;

  return (
    <>
      <NavLink />
      {
        slug === "1" && <Blog1 />
      }
      {
        slug === "2" && <Blog2 />
      }
      {
        slug === "3" && <Blog3 />
      }
    </>
  );
}

export default page;
