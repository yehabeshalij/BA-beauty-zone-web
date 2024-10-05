"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../_utils/GlobalApi";
import DecorAppointment from "./DicorAppointment";

function BlogPage({ params }) {
  const [wedding, setWeddings] = useState([]);
  useEffect(() => {
    getWeddingById();
  }, []);
  const getWeddingById = () => {
    GlobalApi.getWeddingById(params.recordId).then((resp) => {
      console.log(resp.data.data);
      setWeddings(resp.data.data);
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/weddings ">{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5 ">
        <Image
          priority
          layout="fill"
          src={wedding.attributes?.img?.data.attributes.url}
          alt={""}
        />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{wedding.attributes?.Title}</h1>
        <p className="text-gray-600 mt-2">{wedding.attributes?.Descrption}</p>
        <div className="mt-4 flex items-center text-gray-400"></div>
      </div>
      <DecorAppointment wedding={wedding} />
    </div>
  );
}

export default BlogPage;
