import React from "react";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="relative max-w-[82rem] pt-[124px] flex flex-col items-end">
        <h5 className="uppercase text-white text-[14px]">Our Story</h5>
        <p className="text-gradient mt-16 text-[49px] leading-[4.2rem] font-bold max-w-4xl text-end">
          Canvas Studio Was Born Out Of A Passion For Staying Ahead Of The
          Fashion Curve. We Understand That The Clothes You Wear Reflect Your
          Personality And Aspirations.
        </p>
        <p className="max-w-[55rem] text-end text-[16px] leading-8 text-white-100 mt-14">
          At Canvas Studio, We Believe That Fashion Is More Than Just Clothing,
          It&apos;s A Form Of Self-Expression, A Canvas Where Your Unique Style
          Takes Center Stage. Step Into A World Where Innovation Meets
          Trendsetting, And Discover A Curated Collection That Redefines
          Contemporary Fashion.
        </p>
      </div>
      <div className="max-w-[82rem] flex flex-row justify-end pt-32 pb-36 gap-48 h-auto ">
        <div className="text-end flex flex-col gap-2">
          <span className="text-white text-[14px] font-medium uppercase">
            Year
          </span>
          <span className="text-white-100 text-[13px]">2002 - 2024</span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white text-[14px] font-medium uppercase">
            Address
          </span>
          <span className="text-white-100 text-[13px] leading-7">
            Indenosia - Jakarta <br />
            Unite State - New York
          </span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white text-[14px] font-medium uppercase">
            The Crew
          </span>
          <span className="text-white-100 text-[13px] leading-7">
            Design - Chaka <br />
            R&D Neri Kawnak
          </span>
        </div>
        <div className="text-end flex flex-col gap-2">
          <span className="text-white text-[14px] font-medium uppercase">
            OverView
          </span>
          <span className="text-white-100 text-[13px] leading-7">
            Design, R&D &<br />
            Production
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
