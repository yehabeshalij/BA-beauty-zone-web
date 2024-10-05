"use client";

import React, { useEffect, useState } from "react";
import Categories from "./_components/Categories";
import Category from "./_components/Category";
import Blogs from "./_components/Blogs";
import Description from "./[recordId]/DicorAppointment";
import GlobalApi from "../_utils/GlobalApi";

function Widdings({ params }) {
  const [catagoriews, setCategories] = useState();
  const [weddings, setWedding] = useState();

  useEffect(() => {
    getWeddingCategory();
  }, []);
  const getWeddingCategory = () => {
    GlobalApi.getWeddingCategory(params.recordId).then((resp) => {
      setCategories(resp.data.data);
    });
  };
  useEffect(() => {
    getWedding();
  }, []);
  const getWedding = () => {
    GlobalApi.getWedding(params.recordId).then((resp) => {
      setWedding(resp.data.data);
    });
  };

  return (
    <div>
      <Categories catagoriews={catagoriews} />
      {/* <Description /> */}
      <Blogs weddings={weddings} />
    </div>
  );
}

export default Widdings;
