"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import audiophile from "../assets/audiophile.svg";
import designo from "../assets/designo.png";
import gaysbie from "../assets/gaysbie.png";
import { league_Gothic } from "@/app/fonts";
import tweeter from "../assets/tweeter.svg";

const Showcase = () => {
  const [activeButton, setActiveButton] = useState("websites");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div className=" py-24">
      <p
        className={`${league_Gothic.className} mb-12 text-4xl text-white sm:text-[2.8rem]`}
      >
        Projects
      </p>

      <div className="flex flex-col  ">
        <div className="mb-4 space-x-4 text-xl sm:space-x-12 sm:text-4xl">
          <button
            className={`${
              activeButton === "websites"
                ? "bg-[#634eec] text-white"
                : "bg-gray-200 text-gray-700"
            } w-[10rem] rounded py-4  transition duration-300  sm:w-[20rem] sm:py-8`}
            onClick={() => handleClick("websites")}
            role="button"
          >
            Web
          </button>
          <button
            className={`${
              activeButton === "webapps"
                ? "bg-[#634eec] text-white"
                : "bg-gray-200 text-gray-700"
            } w-[10rem] rounded py-4  transition duration-300  sm:w-[20rem] sm:py-8`}
            onClick={() => handleClick("webapps")}
            role="button"
          >
            Mobile
          </button>
        </div>

        <div className="mt-4 sm:mt-8 ">
          {activeButton === "websites" && (
            <div className=" grid grid-cols-2  gap-[1.8rem]  text-3xl text-white sm:gap-[2.2rem] md:gap-[3rem]">
              <Link
                href={`/projects/gaysbie`}
                className=" grid h-[16rem] place-items-center rounded-[2rem] bg-black min-[480px]:h-[20rem] min-[520px]:h-[24rem]  sm:h-[31rem] min-[776px]:h-[38rem] min-[880px]:h-[40rem] lg:h-[51.5rem] "
              >
                <Image
                  className="aspect-square h-[100%] w-[80%]  object-contain sm:w-[60%]"
                  src={gaysbie}
                  alt="gaysbie"
                  width={80}
                  height={80}
                  quality={100}
                  loading="eager"
                />
              </Link>
              <Link
                href={`/projects/audiophile`}
                className=" grid h-[16rem] place-items-center rounded-[2rem] bg-black min-[480px]:h-[20rem] min-[520px]:h-[24rem]  sm:h-[31rem] min-[776px]:h-[38rem] min-[880px]:h-[40rem] lg:h-[51.5rem] "
              >
                <Image
                  className="aspect-square h-[100%] w-[80%]  object-contain sm:w-[60%]"
                  src={audiophile}
                  alt="audiophile"
                  width={80}
                  height={80}
                  loading="eager"
                />
              </Link>
              <Link
                href={`/projects/designo`}
                className=" grid h-[16rem] place-items-center rounded-[2rem] bg-black min-[480px]:h-[20rem] min-[520px]:h-[24rem]  sm:h-[31rem] min-[776px]:h-[38rem] min-[880px]:h-[40rem] lg:h-[51.5rem] "
              >
                <Image
                  className="aspect-square h-[100%] w-[80%]  object-contain sm:w-[60%]"
                  src={designo}
                  alt="designo"
                  width={80}
                  height={80}
                  quality={100}
                  loading="eager"
                />
              </Link>
              <Link
                href={`/projects/tweeter`}
                className=" grid h-[16rem] place-items-center rounded-[2rem] bg-black min-[480px]:h-[20rem] min-[520px]:h-[24rem]  sm:h-[31rem] min-[776px]:h-[38rem] min-[880px]:h-[40rem] lg:h-[51.5rem] "
              >
                <Image
                  className="aspect-square h-[100%] w-[80%]  object-contain sm:w-[60%]"
                  src={tweeter}
                  alt="tweeter"
                  width={80}
                  height={80}
                  loading="eager"
                />
              </Link>
            </div>
          )}
          {activeButton === "webapps" && (
            <p className="text-2xl text-white sm:text-5xl">Coming soon!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
