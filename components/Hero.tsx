import React from "react";
import Image from "next/image";
import { league_gothic } from "@/app/fonts";
const Hero = () => {
  return (
    <div className="bg-black px-6">
      <h1
        className={`${league_gothic.className} pt-8 text-center text-[10rem] font-normal leading-[20rem] text-white`}
      >
        PRESH
      </h1>

      <section className="text-center text-white">
        <p className="text-[1.8rem] font-medium">Frontend wizardry.</p>
        <div className="hidden">
          <p>Github</p>
          <p>Resume</p>
          <p>Email</p>
        </div>
        <p className="hidden">App development</p>
      </section>

      <div>{/* <Image src={code} alt="code" /> */}</div>
    </div>
  );
};

export default Hero;
