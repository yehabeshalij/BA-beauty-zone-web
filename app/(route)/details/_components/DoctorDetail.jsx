"use client";
import { GraduationCap, LogIn, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "./BookAppointment";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import LoginLink from "@kinde-oss/kinde-auth-nextjs";

function DoctorDetail({ doctor }) {
  const socialMediaList = [
    {
      id: 1,
      icon: "/youtube.png",
      url: "",
    },
    {
      id: 2,
      icon: "/linkedin.png",
      path: "/service",
    },
    {
      id: 3,
      icon: "/twitter.png",
      url: "",
    },
    {
      id: 4,
      icon: "/facebook.png",
      url: "",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        {/* Doctor Image  */}
        <div>
          <Image
            src={doctor.attributes?.image?.data?.attributes?.url}
            width={200}
            height={200}
            alt="doctor-image"
            className="rounded-lg w-full h-[280px] object-cover"
          />
        </div>
        {/* Doctor Info  */}
        <div className="col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline">
          <h2 className="font-bold text-2xl">{doctor.attributes?.Name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <GraduationCap />
            <span>{doctor.attributes?.Year_of_Experience} of Experince</span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor.attributes.Adsress}</span>
          </h2>
          <h2
            className="text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary"
          >
            {doctor.attributes?.categories.data[0]?.attributes?.Name}
          </h2>
          <div className="flex gap-6 pb-5">
            <Link href="https://t.me/BAmenbeautyzone">
              {" "}
              <FaTelegram className="text-2xl cursor-pointer hover:text-blue-600" />
            </Link>
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaTiktok className="text-2xl cursor-pointer hover:text-black" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </div>

          <BookAppointment doctor={doctor} />
        </div>

        {/* About Doctor  */}
      </div>
      <div className="p-3 border-[1px] rounded-lg mt-5 ">
        <h2 className="font-bold text-[30px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2 min-h-[300px] prose mx-auto my-10">
          {doctor.attributes.About}
        </p>
      </div>
    </>
  );
}

export default DoctorDetail;
