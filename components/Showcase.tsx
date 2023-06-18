"use client";
import Link from "next/link";
import React, { useState } from "react";

const Showcase = () => {
  const [activeButton, setActiveButton] = useState("websites");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className="bg-[#444] px-6 py-24">
      <p className=" mb-12 text-4xl text-white ">Creative Showcase</p>

      <div className="flex flex-col  ">
        <div className="mb-4 space-x-4">
          <button
            className={`${
              activeButton === "websites"
                ? "bg-[#634eec] text-white"
                : "bg-gray-200 text-gray-700"
            } rounded px-8 py-4 text-xl  transition duration-300`}
            onClick={() => handleClick("websites")}
          >
            Websites
          </button>
          <button
            className={`${
              activeButton === "webapps"
                ? "bg-[#634eec] text-white"
                : "bg-gray-200 text-gray-700"
            } rounded px-8 py-4 text-xl  transition duration-300`}
            onClick={() => handleClick("webapps")}
          >
            Web Apps
          </button>
        </div>

        <div className="mt-4">
          {activeButton === "websites" && (
            <div className=" grid  grid-cols-2  gap-[1.8rem] text-3xl text-white">
              <Link
                href={`/project/gaybible`}
                className="grid  h-[16rem]  place-items-center rounded-[2rem] bg-black"
              >
                <p>GayBible Inc</p>
              </Link>
              <Link
                href={`/project/audiophile`}
                className="grid  h-[16rem]  place-items-center rounded-[2rem] bg-black"
              >
                <p>Audiophile</p>
              </Link>
              <Link
                href={`/project/designo`}
                className="grid  h-[16rem]  place-items-center rounded-[2rem] bg-black"
              >
                <p>Designo</p>
              </Link>
              <Link
                href={`/project/tweeter`}
                className="grid  h-[16rem]  place-items-center rounded-[2rem] bg-black"
              >
                <p>Tweeter</p>
              </Link>
            </div>
          )}
          {activeButton === "webapps" && (
            <p className="text-2xl text-white">Coming soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
