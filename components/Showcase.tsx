"use client";
import React, { useState } from "react";

const Showcase = () => {
  const [activeButton, setActiveButton] = useState("websites");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="px-6 py-24 bg-[#444]">
      <p className=" mb-12 text-4xl text-white ">Creative Showcase</p>

      <div className="flex flex-col  ">
        <div className="space-x-4 mb-4">
          <button
            className={`${
              activeButton === "websites"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } py-4 text-xl px-8 rounded  transition duration-300`}
            onClick={() => handleClick("websites")}
          >
            Websites
          </button>
          <button
            className={`${
              activeButton === "webapps"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } py-4 text-xl px-8 rounded  transition duration-300`}
            onClick={() => handleClick("webapps")}
          >
            Web Apps
          </button>
        </div>

        <div className="mt-4">
          {activeButton === "websites" && (
            <div className="  transition duration-300 text-white  grid grid-cols-2 gap-[1.8rem]">
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
          )}
          {activeButton === "webapps" && <p className="">Coming soon!</p>}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
