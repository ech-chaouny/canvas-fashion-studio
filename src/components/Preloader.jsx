"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { linkVars, slideUp, fadeUp } from "../utils/motion";

const words = ["Hello", "I'm", "Ismael", "Ech-chaouny", "Welcome"];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="flex flex-col gap-5 fixed w-full h-screen z-20 top-0 left-0 justify-center items-center bg-primary"
    >
      <motion.div
        variants={fadeUp}
        initial="initial"
        exit="exit"
        className="font-dmitry text-center tracking-[-0.08em] text-tertiary text-[40px] font-medium"
      >
        <div className="overflow-hidden">
          <motion.div
            className="pr-1"
            variants={linkVars}
            initial="initial"
            animate="open"
          >
            CANVAS
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="pr-1 mt-[-15px]"
            variants={linkVars}
            initial="initial"
            animate="open"
          >
            STUDIO
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
