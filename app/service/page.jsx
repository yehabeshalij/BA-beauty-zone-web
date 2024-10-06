"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { FaFacebook } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";

function Services({ doctorList, heading = "BA Mens Beauty Salon Services" }) {
  return (
    <div>
      <div className="mb-10 px-8">
        <h2 className="font-bold text-xl text-center">{heading}</h2>

        <div
          className="grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4"
        >
         
          <div
            className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
           
          >
            <Link href={"/packegeone"} className="w-full">
              <Image
                src="/IMG_4112-min.jpg"
                alt="packege"
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </Link>
            <div className="mt-3 items-baseline flex flex-col gap-1">
              <h2 className="font-bold text-primary text-sm">Packege 1</h2>
              <h2 className="text-primary text-sm">Price</h2>

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

          <div
            className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
          
          >
            <Link href={"/packegetwo/"} className="w-full">
              <Image
                src="/IMG_4112-min.jpg"
                alt="packege"
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </Link>
            <div className="mt-3 items-baseline flex flex-col gap-1">
              <h2 className="font-bold text-primary text-sm">Packege 2</h2>
              <h2 className="text-primary text-sm">Price</h2>

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

          <div
            className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
           
          >
            <Link href={"/packegethree/"} className="w-full">
              <Image
                src="/IMG_4112-min.jpg"
                alt="packege"
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </Link>
            <div className="mt-3 items-baseline flex flex-col gap-1">
              <h2 className="font-bold text-primary text-sm">Packege 3</h2>
              <h2 className="text-primary text-sm">Price</h2>

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

          <div
            className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
            
          >
            <Link href={"/packegefour/"} className="w-full">
              <Image
                src="/IMG_4112-min.jpg"
                alt="packege"
                width={200}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </Link>
            <div className="mt-3 items-baseline flex flex-col gap-1">
              <h2 className="font-bold text-primary text-sm">
                Full Wedding Packege
              </h2>
              <h2 className="text-primary text-sm">Price</h2>

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
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl text-center">
          Our Salon Services and Pricing
        </h2>
        <div
          className="grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4"
        >
          <div className="p-10 items-center">
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Hair Styling
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Hair Treatment
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Face Treatment
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Body Massage
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Face Steam
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Hair color
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              Hair Washing
            </h1>
            <h1 className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <BsScissors className="text-primary h-5 w-5 " />
              ስለ ጸጉር ደህንነት ማማከር
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
