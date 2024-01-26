import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full bg-secondary">
        <Hero />
        <About />
      </main>
    </>
  );
}
