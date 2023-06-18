import React from "react";
import Testimonial from "./Testimonial";
import gaybible from "../../assets/gaybible.webp";

const Testimonials = () => {
  return (
    <div className="bg-[#444] px-6 py-6 text-white">
      <Testimonial
        logo={gaybible}
        remark="Presh created the most elegant and powerful web experience
        we've ever seen. We couldn't have asked for anything
        better."
        client="gaybible"
      />
    </div>
  );
};

export default Testimonials;
