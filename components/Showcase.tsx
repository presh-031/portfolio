"use client";
import Link from "next/link";
import React, { useState } from "react";
import audiophile from "../assets/audiophile.svg";
import gaybible from "../assets/gaybible.webp";
import designo from "../assets/designo.png";
import tweeter from "../assets/tweeter.svg";
import Image from "next/image";
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
            } w-[10rem] rounded py-4 text-xl  transition duration-300`}
            onClick={() => handleClick("websites")}
          >
            Web
          </button>
          <button
            className={`${
              activeButton === "webapps"
                ? "bg-[#634eec] text-white"
                : "bg-gray-200 text-gray-700"
            } w-[10rem] rounded py-4 text-xl  transition duration-300`}
            onClick={() => handleClick("webapps")}
          >
            Mobile
          </button>
        </div>

        <div className="mt-4">
          {activeButton === "websites" && (
            <div className=" grid  grid-cols-2  gap-[1.8rem] text-3xl text-white">
              <Link
                href={`/project/gaybible`}
                className=" grid h-[16rem] place-items-center rounded-[2rem] bg-black "
              >
                <Image
                  className="w-[80%]"
                  src={gaybible}
                  alt="gaybible"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href={`/project/audiophile`}
                className="grid h-[16rem] place-items-center rounded-[2rem] bg-black "
              >
                <Image
                  className="w-[80%]"
                  src={audiophile}
                  alt="audiophile"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href={`/project/designo`}
                className="grid h-[16rem] place-items-center rounded-[2rem] bg-black"
              >
                <Image
                  className="w-[80%]"
                  src={designo}
                  alt="designo"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href={`/project/tweeter`}
                className="grid h-[16rem] place-items-center rounded-[2rem] bg-black"
              >
                <Image
                  className="w-[80%]"
                  src={tweeter}
                  alt="tweeter"
                  width={80}
                  height={80}
                />
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
