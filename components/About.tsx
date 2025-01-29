import React from "react";
import { league_Gothic } from "@/app/fonts";

const About = () => {
  return (
    <section className=" pb-[6rem] pt-[8rem]">
      <h2
        className={`${league_Gothic.className} mb-[4rem] text-[2.8rem] text-[#ebebeb] sm:text-[4rem]`}
      >
        About Me
      </h2>
      <div className="text-3xl leading-[3rem] text-[#d6d6d6] md:flex md:justify-between md:gap-16 md:text-[2rem]">
        <p className="  md:flex-1">
          I don&apos;t just write code—I craft experiences. I have a deep-rooted
          passion for frontend development and with that I build sleek,
          high-performance interfaces that don&apos;t just look good but feel
          intuitive. I turn concepts into polished, functional realities, and my
          work blends precision and versatility, whether it&apos;s designing
          seamless interactions that keep users engaged or optimizing
          performance down to the last millisecond.
        </p>
        <p className="mt-8 md:mt-0 md:flex-1">
          Beyond the pixels and lines of code, I thrive on problem-solving,
          continuous learning, and pushing the boundaries of what&apos;s
          possible. So if you&apos;re looking for someone who can bring vision,
          strategy, and execution together, that&apos;s what I do. Let&apos;s
          connect.
        </p>
      </div>
    </section>
  );
};

export default About;
