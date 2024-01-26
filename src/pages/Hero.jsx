"useclient";

import { Women, BucketHat, Short, RobePull } from "@/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-center items-end">
        <Image
          className="w-[39rem] object-contain mt-14 h-auto"
          src={BucketHat}
          alt="BucketHat"
        />
        <h1 className="absolute top-44 text-[16rem] font-dmitry tracking-[-0.08em] mix-blend-difference text-tertiary">
          Canvas
        </h1>
        <p className="absolute top-[32rem] text-[18px] text-tertiary max-w-[380px] ml-3 leading-8 text-center">
          At Canvas Studio, We Believe That Fashion Is More Than Just Clothing
        </p>
      </div>
      <div className="px-24 absolute w-full flex justify-between z-10">
        <Image
          className="w-[26rem] h-[20rem] object-cover mt-[-200px]"
          src={Women}
          alt="Women_photo"
        />
        <Image
          className="w-96 object-contain mt-[-120px]"
          src={Short}
          alt="Short_photo"
        />
      </div>
      <Image
        className="w-full h-full object-cover object-top"
        src={RobePull}
        alt="RobePull"
      />
    </div>
  );
};

export default Hero;
