import React from "react";

const Showcase = () => {
  return (
    <div className="px-6 py-24 bg-[#444]">
      <p className=" mb-12 text-4xl text-white ">Creative Showcase</p>
      <div className=" text-2xl text-white  grid grid-cols-2 gap-[1.8rem]">
        <div className="h-[16rem]  bg-black  rounded-[2rem] grid place-items-center">
          <p>GayBible</p>
        </div>
        <div className="h-[16rem]  bg-black  rounded-[2rem] grid place-items-center">
          <p>Audiophile</p>
        </div>
        <div className="h-[16rem]  bg-black  rounded-[2rem] grid place-items-center">
          <p>Designo</p>
        </div>
        <div className="h-[16rem]  bg-black  rounded-[2rem] grid place-items-center">
          <p>Tweeter</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
