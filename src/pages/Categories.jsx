import React from "react";
import Image from "next/image";
import { CasualChic, Workwear, statementPieces } from "@/assets";

const Categories = () => {
  return (
    <div className="bg-white px-24 pt-32 pb-48 h-full w-full">
      <div className="flex flex-row gap-56">
        <div>
          <Image className="w-[34rem]" src={CasualChic} alt="Casual Chic" />
          <h5 className="mt-8 font-extrabold text-primary text-[1.6rem]">
            Casual Chic
          </h5>
        </div>
        <p className="text-primary font-medium text-[22px] leading-9 max-w-[38rem]">
          Elevate Your Everyday Look With Our Casual Chic Collection. From
          Comfortable Loungewear To Stylish Streetwear, We&apos;ve Got Your
          Casual Style Needs Covered.
        </p>
      </div>
      <div className="flex flex-row gap-56">
        <div className="w-1/2 flex items-center">
          <p className="text-primary font-medium text-[22px] leading-9 max-w-[38rem]">
            Make Heads Turn With Our Statement Pieces That Are Designed To Leave
            A Lasting Impression. These Bold And Unique Items Are Perfect For
            Those Who Dare To Stand Out.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <div>
            <Image
              className="w-[34rem] mt-[-150px]"
              src={statementPieces}
              alt="Statement pieces"
            />
            <h5 className="mt-8 font-extrabold text-primary text-[1.6rem]">
              Statement Pieces
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-56">
        <div>
          <Image
            className="w-[34rem]"
            src={Workwear}
            alt="Workwear Redefined"
          />
          <h5 className="absolute mt-8 font-extrabold text-primary text-[1.6rem]">
            Workwear Redefined
          </h5>
        </div>
        <div className="w-1/2 flex items-end justify-end">
          <p className="text-primary font-medium text-[22px]  leading-9 max-w-[38rem]">
            Transform Your Work Wardrobe With Our Collection Of Sophisticated
            And Contemporary Workwear. From Sleek Blazers To Tailored Trousers,
            Our Pieces Seamlessly Blend Professionalism With Style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
