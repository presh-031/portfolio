import About from "@/components/About";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import RootLayout from "./layout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <RootLayout>
      <>
        <Hero />
        <div></div>
        <About />
        <Showcase />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    </RootLayout>
  );
}
