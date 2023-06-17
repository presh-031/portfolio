import React from "react";
import bubblish from "../assets/bubblish.webp";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="bg-[#444] pt-24 px-6 text-white">
      <Image
        className="mx-auto"
        src={bubblish}
        alt="bubblish"
        width={255}
        height={255}
      />
      <h3 className=" mb-20 mt-44 text-4xl text-white ">Contact</h3>
      <p className="text-[#d6d6d6] text-3xl leading-[3rem]">
        Impressed and can’t wait to get your hands on Presh’s skills? Don’t
        hesitate to drop him a line and dive into the world of incredible web
        experiences!
      </p>
      <div className="mt-16  text-4xl text-[#d6d6d6]">
        {/* The link will be on each icon */}
        <div className="flex items-center gap-4">
          <span className=" leading-[4rem] text-3xl">Socials: </span>{" "}
          <FaTwitter /> <FaInstagram />
        </div>
        {/* The link will be on each entire paragraph, better ux */}
        <div className="flex items-center gap-4">
          <span className=" leading-[4rem] text-3xl">Email:</span>{" "}
          <MdOutlineEmail />
        </div>
        <div className="flex items-center gap-4">
          <span className=" leading-[4rem] text-3xl">Github:</span> <BsGithub />
        </div>
        <div className="flex items-center gap-4">
          <span className=" leading-[4rem] text-3xl">Resume:</span>
          <HiOutlineDocument />
        </div>
      </div>
    </div>
  );
};

export default Contact;
