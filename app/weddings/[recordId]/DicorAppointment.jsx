import React, { useEffect, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";

import { CalendarDays, Clock, Scroll } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import Link from "next/link";

import { Calendar } from "../../../components/ui/calendar";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import GlobalApi from "../../_utils/GlobalApi";

function DecorAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user?.given_name + " " + user?.family_name,
        Email: user?.email,
        Pickdate: date,
        Note: note,
        CustomerName: name,
        Phone: phone,
      },
    };
    console.log(data);
    GlobalApi.decorAppointment(data).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Booking Confirmation Enjoy it.");
      }
    });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="mt-3 rounded-full">Decor Book Appointment</Button>
      </SheetTrigger>

      <SheetContent className="overflow-auto">
        {/* <DialogHeader> */}
        <SheetTitle>Decor Book Appointment</SheetTitle>
        <SheetDescription>
          <div className=" grid grid-cols  gap-5 items-baseline">
            <h2 className="flex gap-2 items-center">
              <CalendarDays className="text-primary h-5 w-5" />
              Select Date
            </h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={isPastDay}
              className="rounded-md border"
            />
          </div>

          <h2 className="my-5 font-bold"></h2>

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className=" w-[300px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
            className=" w-[300px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
          />
        </SheetDescription>
        <div className=" flex flex-col gap-5">
          <Textarea
            className="mt-3"
            placeholder="NOTES..............."
            onChange={(e) => setNote(e.target.value)}
          />

          <Link href="/">
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  className="grid w-[400px]"
                  type="button"
                  disabled={!(date && name && phone && note)}
                  onClick={() => saveBooking()}
                >
                  Book
                </Button>
              </SheetClose>
            </SheetFooter>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default DecorAppointment;
