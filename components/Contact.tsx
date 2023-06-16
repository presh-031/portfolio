import React from "react";
import bubblish from "../assets/bubblish.webp";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <Image src={bubblish} alt="bubblish" />
      <h3>Contact</h3>
      <p>
        Impressed and can’t wait to get your hands on Presh’s skills? Don’t
        hesitate to drop him a line and dive into the world of incredible web
        experiences!
      </p>
      <div>
        {/* The link will be on each icon */}
        <p>Socials:</p>

        {/* The link will be on each entire paragraph, better ux */}
        <p>Email:</p>
        <p>Github:</p>
        <p>Resume:</p>
      </div>
    </div>
  );
};

export default Contact;
