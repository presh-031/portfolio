import React from "react";

const ScrollDownMouse = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="relative flex h-24 w-12 items-center justify-center rounded-full border-2">
        <span className=" h-4 w-4 animate-bounce rounded-full bg-white"></span>
      </span>
    </div>
  );
};

export default ScrollDownMouse;
