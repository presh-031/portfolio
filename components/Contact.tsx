import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

import { BsGithub } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import Image from "next/image";
import React from "react";
import bubblish from "../assets/bubblish.webp";
import { league_Gothic } from "@/app/fonts";

const Contact = () => {
  return (
    <div className="pt-24 text-white  sm:pt-44">
      <div className="mx-auto max-w-[1000px]">
        {" "}
        <Image
          className="mx-auto h-[25.5rem] w-[25.5rem] md:h-[50rem] md:w-[50rem]"
          src={bubblish}
          alt="bubblish"
          width={255}
          height={255}
        />
        <div className="sm:w-[50rem]">
          <h3
            className={`${league_Gothic.className}  mb-20 mt-44 text-4xl text-white sm:text-5xl`}
          >
            Contact
          </h3>
          <p className="text-3xl leading-[3rem] text-[#d6d6d6]">
            Got a project, idea, or just want to say hi? Drop me a message—I’d
            love to hear from you!
          </p>
          <div className="mt-16  text-4xl text-[#d6d6d6]">
            {/* The link will be on each icon */}
            <div className="flex items-center gap-4">
              <span className=" text-3xl leading-[4rem] ">Socials: </span>{" "}
              <a href="https://twitter.com/Presh_031" target="_blank">
                <FaTwitter />
              </a>
            </div>
            {/* The link will be on each entire paragraph, better ux */}
            <div>
              <span className="inline-flex items-center gap-4 ">
                <span className=" text-3xl leading-[4rem]">Email:</span>{" "}
                <MdOutlineEmail />
              </span>
            </div>
            <div>
              <a
                href="https://github.com/presh-031"
                className="inline-flex items-center gap-4 "
              >
                <span className=" text-3xl leading-[4rem]">Github:</span>{" "}
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="" className="inline-flex items-center gap-4 ">
                <span className=" text-3xl leading-[4rem]">Resume:</span>
                <HiOutlineDocument />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
