import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ wedding }) => {
  const truncateBlogDesc =
    wedding.attributes.Descrption?.length > 80
      ? wedding.attributes.Descrption?.substring(0, 80) + "..."
      : wedding.attributes.Descrption;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={"/weddings/" + wedding?.id}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          {/* <div> */}
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={wedding.attributes.img?.data?.attributes.url}
            alt={""}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {wedding.attributes.Title}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
        <Link href={"/weddings/" + wedding.id} className="w-full">
          <h2
            className="p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[11px] mt-2
                        cursor-pointer 
                        bg-primary text-white font-bold"
          >
            Book Now
          </h2>
        </Link>
      </Link>
    </div>
  );
};

export default BlogCard;
