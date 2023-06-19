import React from "react";
import Image from "next/image";
import { league_gothic } from "@/app/fonts";
import self from "../assets/self.jpg";
const Hero = () => {
  return (
    <div className="bg-black px-6 pt-[8rem]">
      <Image
        className="mx-auto h-[20rem] w-[20rem] rounded-full object-cover"
        src={self}
        alt="me"
        width={200}
        height={200}
      />
      <h1
        className={`${league_gothic.className}  text-center text-[10rem] font-normal  text-white`}
      >
        PRESH
      </h1>

      <section className="text-center text-white">
        <p className="text-[1.8rem] font-medium">Software Engineer.</p>
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
