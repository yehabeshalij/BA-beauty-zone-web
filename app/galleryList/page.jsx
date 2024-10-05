"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";

function GalleryList({ heading = "Gallery" }) {
  const [galleryList, setGalleryList] = useState([]);
  const [galleryList1, setGalleryList1] = useState([]);
  const [galleryList2, setGalleryList2] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);
  const getGalleryList = () => {
    GlobalApi.getGalleryList().then((resp) => {
      console.log(resp.data.data);
      setGalleryList(resp.data.data);
    });
  };

  useEffect(() => {
    getGalleryList1();
  }, []);
  const getGalleryList1 = () => {
    GlobalApi.getGalleryList1().then((resp) => {
      console.log(resp.data.data);
      setGalleryList1(resp.data.data);
    });
  };

  useEffect(() => {
    getGalleryList2();
  }, []);
  const getGalleryList2 = () => {
    GlobalApi.getGalleryList2().then((resp) => {
      console.log(resp.data.data);
      setGalleryList2(resp.data.data);
    });
  };
  return (
    <div>
      <h2 className="font-bold text-xl text-center">{heading}</h2>
      <div
        className="grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4"
      >
        {galleryList &&
          galleryList.map((gallery, index) => (
            <div
              className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
              key={index}
            >
              <Link href="/gallerypage" className="w-full">
                <Image
                  src={gallery.attributes?.image?.data?.attributes?.url}
                  alt="gallery"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
              </Link>

              <div className="mt-3 items-baseline flex flex-col gap-1">
                <h2 className="font-bold">{gallery.attributes.Name}</h2>
              </div>
            </div>
          ))}
        {galleryList1 &&
          galleryList1.map((gallery, index) => (
            <div
              className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
              key={index}
            >
              <Link href="/gallerypageone" className="w-full">
                <Image
                  src={gallery.attributes?.image?.data?.attributes?.url}
                  alt="gallery"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
              </Link>

              <div className="mt-3 items-baseline flex flex-col gap-1">
                <h2 className="font-bold">{gallery.attributes.Name}</h2>
              </div>
            </div>
          ))}
        {galleryList2 &&
          galleryList2.map((gallery, index) => (
            <div
              className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
              key={index}
            >
              <Link href="/gallerypagetwo" className="w-full">
                <Image
                  src={gallery.attributes?.image?.data?.attributes?.url}
                  alt="gallery"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
              </Link>

              <div className="mt-3 items-baseline flex flex-col gap-1">
                <h2 className="font-bold">{gallery.attributes.Name}</h2>
              </div>
            </div>
          ))}
      </div>
      <div
        className="grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4"
      ></div>
    </div>
  );
}

export default GalleryList;
