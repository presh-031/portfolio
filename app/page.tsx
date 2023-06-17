import About from "@/components/About";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import RootLayout from "./layout";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <RootLayout>
      <div>
        <Hero />
        <div></div>
        <About />
        <Showcase />
        <Testimonials />
        <Contact />
      </div>
    </RootLayout>
  );
}
