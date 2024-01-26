import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Categories from "@/pages/Categories";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full bg-secondary">
        <Hero />
        <About />
        <Categories />
        <Blog />
      </main>
    </>
  );
}
