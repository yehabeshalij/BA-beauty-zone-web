"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

function GalleryPage() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getimage1();
  }, []);
  const getimage1 = () => {
    GlobalApi.getimage1().then((resp) => {
      console.log(resp.data.data);
      setGallery(resp.data.data);
    });
  };
  return (
    <div>
      <div
        className="grid grid-cols-2 
    sm:grid-cols-2 md:grid-cols-3
    gap-7 mt-4
     lg:grid-cols-4"
      >
        {gallery &&
          gallery.map((item, index) => (
            <div
              className="border-[1px] rounded-lg p-3
            cursor-pointer hover:border-primary
            hover:shadow-sm transition-all ease-in-out"
              key={index}
            >
              <Image
                src={item.attributes?.image?.data?.attributes?.url}
                alt="gallery"
                width={200}
                height={100}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default GalleryPage;
