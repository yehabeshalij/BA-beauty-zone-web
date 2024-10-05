import Link from "next/link";
import React from "react";

function Packegefour() {
  return (
    <div
      className="grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4"
    >
      <div className="p-5">
        <p className="text-gray-800 font-bold text-2xl pb-4">
          full Wedding packege
        </p>

        <Link href={"/details/"} className="w-full">
          <h2
            className="p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[11px] mt-2
                        cursor-pointer 
                        hover:bg-primary hover:text-white"
          >
            Book Now
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Packegefour;
