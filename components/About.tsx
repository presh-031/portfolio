import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" pb-[6rem] pt-[8rem]">
      <h2 className=" mb-[4rem] text-[2.8rem] text-[#ebebeb] sm:text-[4rem]">
        About
      </h2>
      <div className="text-3xl leading-[3rem] text-[#d6d6d6] md:flex md:justify-between md:gap-16 md:text-[2rem]">
        <p className="  md:flex-1">
          Precious, aka Presh, has a knack for transforming mind-blowing designs
          into functional and visually stunning websites. With my strong command
          over industry-standard frontend technologies, I craft web experiences
          that will sweep you off your feet.
        </p>
        <p className="mt-8 md:mt-0 md:flex-1">
          I don&apos;t need to brag - my breathtaking work does all the talking.
          Simple yet powerful, my approach to web development is an irresistible
          blend of elegance and efficiency.
        </p>
      </div>
    </section>
  );
};

export default About;
