import React from "react";
import bubblish from "../assets/bubblish.webp";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="bg-[#444] px-6 pt-24 text-white">
      <div className="mx-auto max-w-[1000px]">
        {" "}
        <Image
          className="mx-auto"
          src={bubblish}
          alt="bubblish"
          width={255}
          height={255}
        />
        <h3 className=" mb-20 mt-44 text-4xl text-white ">Contact</h3>
        <p className="text-3xl leading-[3rem] text-[#d6d6d6]">
          Impressed and can’t wait to get your hands on Presh’s skills? Don’t
          hesitate to drop him a line and dive into the world of incredible web
          experiences!
        </p>
        <div className="mt-16  text-4xl text-[#d6d6d6]">
          {/* The link will be on each icon */}
          <div className="flex items-center gap-4">
            <span className=" text-3xl leading-[4rem] ">Socials: </span>{" "}
            <a href="https://twitter.com/Presh_031" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/mide_031/" target="_blank">
              <FaInstagram />
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
  );
};

export default Contact;
