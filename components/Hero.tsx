import React from "react";
import Image from "next/image";
import { league_gothic } from "@/app/fonts";
import self from "../assets/self.jpg";
import { BsArrowDown, BsArrowDownUp } from "react-icons/bs";
const Hero = () => {
  return (
    <div className=" pt-[8rem]">
      <Image
        className="mx-auto h-[20rem] w-[20rem] rounded-full object-cover md:mt-24 md:h-[40rem] md:w-[40rem]"
        src={self}
        alt="me"
        placeholder="blur"
      />
      <h1
        className={`text-center text-[10rem] font-bold text-white  max-[350px]:text-[8rem] max-[300px]:text-[6rem] md:text-[20rem] md:leading-[30rem]  lg:text-[29rem] `}
      >
        PRESH
      </h1>

      <section className="text-center  text-white md:hidden">
        <p className="text-[1.8rem] font-medium md:text-[3.8rem]">
          Software Engineer
        </p>
        <BsArrowDown className="mx-auto my-4  text-4xl md:text-6xl" />
        <p className="text-[1.2rem] font-medium md:text-[2.6rem]">
          Web and App Developer
        </p>{" "}
      </section>

      <div className="hidden  text-white   md:flex md:justify-between md:text-4xl">
        <p>Frontend Wizardry</p>
        <div className="flex justify-center gap-4">
          <p>Resume</p> <p>Email</p>
          <p>Github</p>
        </div>
        <p className="">App development</p>
      </div>
    </div>
  );
};

export default Hero;
