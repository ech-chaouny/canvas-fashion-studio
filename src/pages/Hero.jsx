"useclient";

import { Women, BucketHat, Short, RobePull } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Hero = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={container} className="h-full w-full">
      <div className="w-full flex justify-center items-end">
        <motion.div style={{ y: lg }}>
          <Image
            className="w-[34rem] mt-10 object-contain h-auto"
            src={BucketHat}
            alt="BucketHat"
          />
        </motion.div>

        <motion.h1
          style={{ y: sm }}
          className="absolute top-40 text-[14rem] font-dmitry tracking-[-0.08em] mix-blend-difference text-tertiary"
        >
          Canvas
        </motion.h1>
        <motion.p
          style={{ y: md }}
          className="absolute top-[28.5rem] text-[16px] text-tertiary max-w-[340px] ml-3 leading-7 text-center"
        >
          At Canvas Studio, We Believe That Fashion Is More Than Just Clothing
        </motion.p>
      </div>
      <div className="px-24 absolute w-full flex justify-between z-10">
        <motion.div style={{ y: xl }}>
          <Image
            className="w-[24rem] h-[18rem] object-cover mt-[-145px]"
            src={Women}
            alt="Women_photo"
          />
        </motion.div>
        <motion.div style={{ y: xl }}>
          <Image
            className="w-80 object-contain mt-[-80px]"
            src={Short}
            alt="Short_photo"
          />{" "}
        </motion.div>
      </div>
      <Image
        className="relative w-full h-full object-cover object-top"
        src={RobePull}
        alt="RobePull"
      />
    </div>
  );
};

export default Hero;
