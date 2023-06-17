import React from "react";
import code from "../assets/code.jpeg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-black px-6">
      <h1 className="text-[10rem] leading-[20rem] pt-8 text-center font-normal text-white">
        PRESH
      </h1>

      <section className="text-white text-center">
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
