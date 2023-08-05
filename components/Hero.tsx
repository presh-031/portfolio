import React from "react";
import Image from "next/image";
import self from "../assets/self.jpg";
import { BsArrowDown, BsArrowDownUp, BsGithub } from "react-icons/bs";
import { ScrollDownMouse } from "../index";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
// import { BiLogoGithub } from "react-icons/bi";

import "../app/animations.css";

const Hero = () => {
  return (
    <div className=" pt-[8rem]">
      <Image
        className="mx-auto h-[20rem] w-[20rem] rounded-full object-cover md:mt-24 md:h-[40rem] md:w-[40rem]"
        src={self}
        alt="me"
        placeholder="blur"
      />
      <div className="mx-auto mt-6 flex w-fit items-center gap-4 rounded-md border-[1px] px-4 py-2 text-white ">
        <div className="animate-pulse-light  h-[.8rem] w-[.8rem] rounded-full bg-green-500"></div>
        <p>HIRE ME</p>
      </div>
      <h1
        className={`text-center text-[4rem] font-bold text-white  max-[350px]:text-[8rem] max-[300px]:text-[6rem] md:text-[20rem] md:leading-[30rem]  lg:text-[29rem] `}
      >
        PRESH
      </h1>

      <section className="text-center  text-white md:hidden">
        <p className="mb-4 text-xl ">Frontend Web Developer</p>
        <div className=" flex items-center justify-center gap-4 text-4xl text-[#515151]">
          <a href="https://github.com/presh-031" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/presh-031" target="_blank">
            <AiOutlineTwitter />
          </a>
          <AiFillLinkedin />
        </div>
      </section>

      <div className="absolute bottom-12 right-8">
        <ScrollDownMouse />
      </div>

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
