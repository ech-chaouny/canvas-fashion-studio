"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trends from "@/components/Trends";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Categories from "@/pages/Categories";
import Hero from "@/pages/Hero";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <main className="h-full w-full bg-secondary">
        <Hero />
        <About />
        <Categories />
        <Blog />
        <Trends />
      </main>
      <Footer />
    </>
  );
}
