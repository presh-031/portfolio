import React from "react";
import Testimonial from "./Testimonial";
import gaybible from "../../assets/gaybible.webp";

const Testimonials = () => {
  return (
    <div className=" py-6 text-white">
      <div className="mx-auto max-w-[1000px]">
        <Testimonial
          logo={gaybible}
          remark="Presh created the most elegant and powerful web experience
        we've ever seen. We couldn't have asked for anything
        better."
          client="gaybible"
        />
      </div>
    </div>
  );
};

export default Testimonials;
