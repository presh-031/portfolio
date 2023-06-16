import About from "@/components/About";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div>
        <Hero />
        <div></div>
        <About />
        <Showcase />
        <Testimonials />
      </div>
    </RootLayout>
  );
}
