import React from "react";
import Image from "next/image";
import { CasualChic, Workwear, statementPieces } from "@/assets";

const Categories = () => {
  return (
    <div className="bg-white px-24 pt-32 pb-48 h-full w-full">
      <div className="flex flex-row gap-56">
        <div>
          <Image className="w-[30rem]" src={CasualChic} alt="Casual Chic" />
          <h5 className="mt-7 font-extrabold text-primary text-[1.5rem]">
            Casual Chic
          </h5>
        </div>
        <p className="text-primary font-medium text-[20px] leading-8 max-w-[35rem]">
          Elevate Your Everyday Look With Our Casual Chic Collection. From
          Comfortable Loungewear To Stylish Streetwear, We&apos;ve Got Your
          Casual Style Needs Covered.
        </p>
      </div>
      <div className="flex flex-row gap-56">
        <div className="w-1/2 flex items-center">
          <p className="text-primary font-medium text-[20px] leading-8 max-w-[35rem]">
            Make Heads Turn With Our Statement Pieces That Are Designed To Leave
            A Lasting Impression. These Bold And Unique Items Are Perfect For
            Those Who Dare To Stand Out.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <div>
            <Image
              className="w-[30rem] mt-[-140px]"
              src={statementPieces}
              alt="Statement pieces"
            />
            <h5 className="mt-7 font-extrabold text-primary text-[1.5rem]">
              Statement Pieces
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-56">
        <div>
          <Image
            className="w-[32rem]"
            src={Workwear}
            alt="Workwear Redefined"
          />
          <h5 className="absolute mt-7 font-extrabold text-primary text-[1.5rem]">
            Workwear Redefined
          </h5>
        </div>
        <div className="w-1/2 flex items-end justify-end">
          <p className="text-primary font-medium text-[20px] leading-8 max-w-[34rem]">
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
