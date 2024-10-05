"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "../../../context/CategoryContext";

const Categories = ({ catagoriews }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(catagoriews?.data[0].attributes.Title);
  }, []);
  console.log(catagoriews);
  return (
    <div
      className="grid grid-cols-2 
  sm:grid-cols-2 md:grid-cols-3
  gap-7 mt-4
   lg:grid-cols-4 font-extrabold text-black "
    >
      {catagoriews &&
        catagoriews?.map((category, index) => (
          <div key={category?.id}>
            <Category cat={category} />
          </div>
        ))}
    </div>
  );
};

export default Categories;
