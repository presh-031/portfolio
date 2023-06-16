import React from "react";

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

      <div></div>
    </div>
  );
};

export default Hero;
