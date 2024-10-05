"use client";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../components/ui/menubar";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Events",
      path: "/events",
    },

    {
      id: 3,
      name: "Services",
      path: "/service",
    },

    {
      id: 4,
      name: "Gallery",
      path: "/galleryList",
    },
    {
      id: 6,
      name: "About",
      path: "/about",
    },
    {
      id: 5,
      name: (
        <Button
          className=" bg-[#af8533] stroke-inherit font-bold shadow-black"
          type="button"
        >
          Wedding Decor & Event
        </Button>
      ),
      path: "/weddings",
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div
      className="flex items-center 
    justify-between p-4 shadow-sm"
    >
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <Image src="/Untitled-2.png" alt="logo" width={180} height={100} />
        </Link>

        <ul className="md:flex gap-8 hidden font-bold lg:text-1.5xl ">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className="hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="inline-flex lg:hidden md:flex gap-8    ">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="font-bold lg:text-1.5xl">
              Menu
            </MenubarTrigger>
            <MenubarContent className="text-gray font-semibold">
              <div>
                <Link href={"/"}>
                  <MenubarItem>Home</MenubarItem>
                </Link>

                <Link href={"/events"}>
                  <MenubarItem>Events</MenubarItem>
                </Link>
                <Link href={"/service"}>
                  <MenubarItem>Services</MenubarItem>
                </Link>

                <Link href={"/galleryList"}>
                  <MenubarItem>Gallery</MenubarItem>
                </Link>

                <Link href={"/weddings"}>
                  <Button
                    className="grid w-[160px] bg-[#af8533] stroke-inherit font-bold shadow-black"
                    type="button"
                  >
                    Wedding Decor & Event
                  </Button>
                </Link>
                <Link href={"/about"}>
                  <MenubarItem>About</MenubarItem>
                </Link>

                <Button>
                  <LogoutLink> Logout </LogoutLink>
                </Button>
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>{" "}
      {user ? (
        <Popover>
          <PopoverTrigger>
            {user?.picture ? (
              <Image
                src={user?.picture}
                alt="profile-image"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                }
                alt="profile-image"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex  flex-col gap-2">
              <Link
                href={"/my-booking"}
                className="cursor-pointer
            hover:bg-slate-100 p-2 rounded-md"
              >
                My Booking
              </Link>
              <li
                className="cursor-pointer
            hover:bg-slate-100 p-2 rounded-md"
              >
                <LogoutLink> Logout </LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          {" "}
          <Button>Log In / Sign In</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
