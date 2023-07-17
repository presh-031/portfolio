"use client";
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (fullHeight - windowHeight)) * 100;

    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-[.5rem] bg-gradient-to-r from-red-500  via-yellow-500 to-green-500 transition-all duration-200"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export default ProgressBar;
