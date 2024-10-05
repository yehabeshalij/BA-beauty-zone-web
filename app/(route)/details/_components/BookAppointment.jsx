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
} from "../../../../components/ui/sheet";

import { CalendarDays, Clock, Scroll } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import Link from "next/link";
import { Calendar } from "../../../../components/ui/calendar";
import { Button } from "../../../../components/ui/button";
import GlobalApi from "../../../_utils/GlobalApi";
import { Textarea } from "../../../../components/ui/textarea";

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 11; i <= 12; i++) {
      timeList.push({
        time: i + ":00 ጠዋት ",
      });
    }
    for (let i = 1; i <= 5; i++) {
      timeList.push({
        time: i + ":00 ጠዋት",
      });
    }
    for (let i = 6; i <= 12; i++) {
      timeList.push({
        time: i + ":00 ቀን",
      });
    }
    for (let i = 1; i <= 4; i++) {
      timeList.push({
        time: i + ":00 ማታ",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user?.given_name + " " + user?.family_name,
        Email: user?.email,
        Time: selectedTimeSlot,
        Pickdate: date,
        stylist: doctor.id,
        Note: note,
        CustomerName: name,
        Phone: phone,
      },
    };
    console.log(data);
    GlobalApi.bookAppointment(data).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("ምዝገባውን አከናውነዋል ይዝናኑበት!");
      }
    });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </SheetTrigger>

      <SheetContent className="overflow-auto">
        {/* <DialogHeader> */}
        <SheetTitle>Book Appointment</SheetTitle>
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

          <h2 className="my-5 font-bold">Select Time</h2>
          <div className="  flex flex-col gap-3">
            <div className="grid grid-cols-3 ">
              {timeSlot?.map((item, index) => (
                <Button
                  variant="outline"
                  className={`border rounded-full p-2 px-3 hover:bg-primary hover:text-white  ${
                    item.time == selectedTimeSlot && "bg-primary text-white"
                  }`}
                  onClick={() => setSelectedTimeSlot(item.time)}
                >
                  {item.time}
                </Button>
              ))}
            </div>
            <div></div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            ></form>
          </div>
        </SheetDescription>
        <div className=" flex flex-col gap-5">
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
                  disabled={
                    !(date && selectedTimeSlot && name && phone && note)
                  }
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

export default BookAppointment;
