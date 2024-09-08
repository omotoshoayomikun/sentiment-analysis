import BlogList from "@/components/Blog/BlogList";
import NavLink from "@/components/Nav/NavLink";
import React from "react";

function page() {
  return (
    <>
      <NavLink />
      <div className="sidePadding w-full h-auto pb-14  mt-8">
        <div className="grid gap-10 grid-cols-3">
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
        </div>
      </div>
    </>
  );
}

export default page;
