import React from "react";
import { BsScissors } from "react-icons/bs";

function About() {
  return (
    <div className="p-3 border-[1px] rounded-lg mt-5 ">
      <h2 className="font-bold text-[30px]">
        About for <span className="text-primary ">BA</span> Mens Beauty Zone
      </h2>

      <h1 className=" text-gray-500 flex gap-6 items-center text-md pb-2 font-semibold">
        <p>
          <span className="text-primary ">BA የወንዶች የውበት ዞን እና የዲኮር አገልግሉት</span>{" "}
          ለሰርግ ፣ ለልደት ፣ ቤቢ ሻወር ። ሂዲንግ ሻወር ፣ ለመልስ ፣ ለስብሰባ ለተለያየ ፕሮግራም እኛን ያማክሩን
          በታማኝነት እናገለግሎታለን ፡፡
        </p>{" "}
      </h1>
      <h1 className=" text-gray-500 flex gap-6">
        <p className=" gap-4">
          <span className="text-primary font-semibold gap-4">
            BA የወንዶች የውበት ዞን በውበት ሳሎናችን የምንሰጣቸው አገልግሎቶች :-
          </span>{" "}
        </p>
      </h1>
      <h1>
        <p className=" text-gray-500 flex gap-8 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"></p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Hair Styling
        </p>

        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Hair Treatment
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Face Treatment
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Body Massage
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Face Steam
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Hair color
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          Hair Washing
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          ስለ ጸጉር ደህንነት ማማከር
        </p>
        <p className=" text-gray-500 flex gap-2 items-center text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
          <BsScissors className="text-primary h-5 w-5 " />
          በተጨማሪም ሙሽሮች እንሞሽራለን እንዲሁም ለሰርግ እና ለተለያይዩ ዝግጅቶች የዲኮር ስራ እንሰራለን
        </p>
      </h1>
    </div>
  );
}

export default About;
