import RootLayout from "./layout";

import {
  About,
  Hero,
  Showcase,
  Testimonials,
  Contact,
  Footer,
  TechStack,
  ProgressBar,
} from "../index";

import { space_Grotesk } from "./fonts";

export default function Home() {
  return (
    <RootLayout>
      <div className={space_Grotesk.className}>
        <ProgressBar />
        <div className="bg-black">
          <div className="mx-auto max-w-[1050px] px-6 sm:px-12">
            <Hero />
            <About />
            <TechStack />
          </div>
        </div>
        <div className="bg-[#444]">
          <div className="mx-auto max-w-[1050px] px-6 sm:px-12">
            <Showcase />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
