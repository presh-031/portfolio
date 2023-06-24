import About from "@/components/About";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import RootLayout from "./layout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <RootLayout>
      <div className="bg-black">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Hero />
          <About />
          <TechStack />
        </div>
      </div>
      <div className="bg-[#444]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Showcase />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </RootLayout>
  );
}
