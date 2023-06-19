import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#444] pb-12 pt-24 text-white">
      <div className="mb-16 flex items-center justify-center gap-6 text-5xl">
        <a href="https://twitter.com/Presh_031" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/mide_031/" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <p className="text-center  text-2xl">
        © 2023 Precious | Built with ❤️ and Next-13.
      </p>
    </footer>
  );
};

export default Footer;
