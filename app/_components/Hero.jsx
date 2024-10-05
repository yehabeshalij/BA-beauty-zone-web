import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/doctors.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl">
              Find & Book
              <span className="text-primary"> Appointment </span>
              with your Fav
              <span className="text-primary "> Hair Stylist</span>
            </h2>
            <p className="mt-4 text-gray-500">
              <span className="text-primary ">
                BA የወንዶች የውበት ዞን እና የዲኮር አገልግሉት
              </span>{" "}
              ለሰርግ:- ለልደት ፣ ቤቢ ሻወር ። ሂዲንግ ሻወር ፣ ለመልስ ፣ ለስብሰባ ለተለያየ ፕሮግራም እኛን
              ያማክሩን በታማኝነት እናገለግሎታለን ፡፡{" "}
              <span className="text-primary ">
                BA የወንዶች የውበት ዞን እና የዲኮር አገልግሉት
              </span>
            </p>
            <p className="mt-4 text-gray-500">
              I Hope You Feel Beautiful Today. Hairdtylists Bring Out The Beauty
              In You.
            </p>
            <Link href="/events">
              <Button className="mt-10">Events Now</Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
