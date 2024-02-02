import { ArrowUp, trendsImg } from "@/assets";
import React from "react";
import Image from "next/image";

const Trends = () => {
  return (
    <section className="pb-24">
      <div className="absolute">
        <Image className="w-full h-full" src={trendsImg} alt="Trends" />
      </div>
      <div className="relative flex flex-col justify-center items-center text-center pt-24">
        <h1 className="text-[52px] text-primary tracking-[-0.01em] font-extrabold">
          Discover Trendsetting Fashion
          <br /> At Canvas Studio
        </h1>
        <p className="text-center text-[15px] font-medium text-primary mt-7 tracking-[-0.01em] leading-loose">
          Shop Now To Redefine Your Style! Elevate Your Wardrobe With Exclusive
          Pieces <br />
          Seize The Trends, Own Your Style!
        </p>
        <a
          href=""
          className="flex items-center mt-7 gap-3 border-2 border-[#c0c0c0] rounded-full pr-3.5 pl-2 py-2
        hover:cursor-pointer"
        >
          <span className="bg-primary rounded-full p-3">
            <Image width={18} hieght={18} src={ArrowUp} alt="arrowUP" />
          </span>
          <span className="mr-3 font-medium text-primary text-[15px]">
            Shop Now
          </span>
        </a>
      </div>
    </section>
  );
};

export default Trends;
