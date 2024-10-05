import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Stream<span className="text-blue-600">line</span>
            </p>
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
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Wedding Decor & Events
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Wedding Decoration
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Wedding Planner
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Birthday Decoration
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Decoration Material Rent
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <Link href="/about">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/service">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Services
              </li>
            </Link>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Customer Service
            </li>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact: 0911107691
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Phone: 0920534560
            </li>{" "}
            <Link
              href={
                "https://www.google.com/maps/place/Ferensay+Mazoria/@9.0572881,38.7745339,17z/data=!4m6!3m5!1s0x164b8f1cca2c02d3:0x442507dcf0dcaea4!8m2!3d9.0572828!4d38.7771088!16s%2Fg%2F11nnng7tk7?entry=ttu"
              }
            >
              {" "}
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Address: Ferensay Mazoria Bldg
              </li>
            </Link>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Email: bamenssalon@gmail.com
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2024 All rights reserved | Build with ❤ Alex{" "}
        </h1>
      </div>
    </>
  );
}

export default Footer;
