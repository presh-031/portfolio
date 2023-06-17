import Image from "next/image";
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import sass from "../assets/sass.png";
import git from "../assets/git-orange.png";
import github from "../assets/github.png";

const About = () => {
  return (
    <section className="bg-black px-6 pb-[6rem] pt-[8rem]">
      <h2 className=" mb-[4rem] text-[2.8rem] text-[#ebebeb]">
        Master Craftsman
      </h2>
      <p className="text-3xl leading-[3rem] text-[#d6d6d6]">
        Precious, aka Presh, has a knack for transforming mind-blowing designs
        into functional and visually stunning websites. With my strong command
        over industry-standard frontend technologies, I craft web experiences
        that will sweep you off your feet.
      </p>
      <p className="mt-8 text-3xl leading-[3rem] text-[#d6d6d6]">
        I don&apos;t need to brag - my breathtaking work does all the talking.
        Simple yet powerful, my approach to web development is an irresistible
        blend of elegance and efficiency.
      </p>

      {/* Tech stack with icons and names only go below. */}
      <h2 className=" mb-[2rem] mt-[4rem] text-[2rem] text-[#ebebeb]">
        Tech Stack
      </h2>
      <div className="grid grid-cols-3 gap-8 text-xl text-[#d6d6d6]">
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={javascript} alt="javascript" width={100} height={100} />
          <span>JAVASCRIPT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={nextjs} alt="nextjs" width={100} height={100} />
          <span>NEXT.JS</span>
        </div>{" "}
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={react} alt="react" width={100} height={100} />
          <span>REACT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={html} alt="html" width={100} height={100} />
          <span>HTML 5</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={reactNative} alt="reactNative" width={100} height={100} />
          <span>REACT-NATIVE</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={css} alt="css" width={100} height={100} />
          <span>CSS 3</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={typescript} alt="typescript" width={100} height={100} />
          <span>TYPESCRIPT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={sass} alt="sass" width={100} height={100} />
          <span>SASS</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={tailwindcss} alt="tailwindcss" width={100} height={100} />
          <span>TAILWIND CSS</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={github} alt="github" width={100} height={100} />
          <span>GITHUB</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={git} alt="git" width={100} height={100} />
          <span>GIT</span>
        </div>
      </div>
    </section>
  );
};

export default About;
