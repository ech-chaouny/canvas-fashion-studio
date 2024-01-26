import React from "react";

const About = () => {
  return (
    <div className="bg-primary ">
      <div className="relative h-screen max-w-[90rem] pt-32 flex flex-col items-end">
        <h5 className="uppercase text-white text-1xl">Our Story</h5>
        <p className="text-gradient mt-16 text-[55px] leading-[4.8rem] font-bold max-w-5xl text-end">
          Canvas Studio Was Born Out Of A Passion For Staying Ahead Of The
          Fashion Curve. We Understand That The Clothes You Wear Reflect Your
          Personality And Aspirations.
        </p>
        <p className="max-w-[62rem] text-end text-[18px] leading-9 text-white-100 mt-16">
          At Canvas Studio, We Believe That Fashion Is More Than Just Clothing,
          It&apos;s A Form Of Self-Expression, A Canvas Where Your Unique Style
          Takes Center Stage. Step Into A World Where Innovation Meets
          Trendsetting, And Discover A Curated Collection That Redefines
          Contemporary Fashion.
        </p>
      </div>
      <div className="max-w-[90rem] flex flex-row justify-end pt-20 pb-40 gap-56 h-auto ">
        <div className="text-end flex flex-col gap-2">
          <span className="text-white font-medium uppercase">Year</span>
          <span className="text-white-100 text-[14px]">2002 - 2024</span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white font-medium uppercase">Address</span>
          <span className="text-white-100 text-[14px] leading-7">
            Indenosia - Jakarta <br />
            Unite State - New York
          </span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white font-medium uppercase">The Crew</span>
          <span className="text-white-100 text-[14px] leading-7">
            Design - Chaka <br />
            R&D Neri Kawnak
          </span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white font-medium uppercase">OverView</span>
          <span className="text-white-100 text-[14px] leading-7">
            Design, R&D &<br />
            Production
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
