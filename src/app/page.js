"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Trends from "@/components/Trends";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Categories from "@/pages/Categories";
import Hero from "@/pages/Hero";

export default function Home() {
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

  return (
    <>
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
