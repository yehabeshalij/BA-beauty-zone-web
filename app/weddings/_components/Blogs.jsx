"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "../../../context/CategoryContext";
import Link from "next/link";

const Blogs = ({ weddings }) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs =
    weddings &&
    weddings?.filter((wedding, index) => {
      return (
        wedding &&
        wedding.attributes.catagoriews.data.some(
          (cat, index) => cat.attributes.Title === category
        )
      );
    });
  return (
    <div
      className="grid grid-cols-2 
    sm:grid-cols-2 md:grid-cols-3
    gap-7 mt-4
     lg:grid-cols-4 "
    >
      {filteredBlogs &&
        filteredBlogs.map((wedding) => (
          <div key={wedding.id}>
            <BlogCard wedding={wedding} />
          </div>
        ))}
    </div>
  );
};

export default Blogs;
