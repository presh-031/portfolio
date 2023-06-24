import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-12 pt-24 text-white sm:pb-[10rem]">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-16 flex items-center justify-center gap-6 text-5xl">
          <a href="https://github.com/presh-031">
            <BsGithub />
          </a>
          <a href="https://twitter.com/Presh_031" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <p className="text-center  text-2xl">
          © 2023 Precious | Built with ❤️ and Next-13.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
