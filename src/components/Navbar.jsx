import React from "react";
import Image from "next/image";
import { ArrowUp } from "@/assets";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center w-full z-1 bg-secondary pt-10 pb-6 px-24">
      <div>
        <span className="font-dmitry font-bold text-2xl tracking-[-0.07em] text-black">
          Canvas
        </span>
      </div>
      <nav className="ml-44 flex gap-14 text-[18px] text-primary font-medium tracking-tight">
        <a href="">Projects</a>
        <a href="">Collaboration</a>
        <a href="">About</a>
      </nav>
      <div className="flex items-center text-[15px] gap-12 text-primary font-medium">
        <a href="">Log In</a>
        <a
          href=""
          className="flex items-center gap-3 border-2 border-tertiary rounded-full px-2 py-2.5
        hover:cursor-pointer"
        >
          <span className="bg-primary rounded-full p-2.5">
            <Image width={18} hieght={18} src={ArrowUp} alt="arrowUP" />
          </span>
          <span className="mr-3">Get Started</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
