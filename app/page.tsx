import About from "@/components/About";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div></div>
      <About />
      <Showcase />
      <Testimonials />
    </div>
  );
}
