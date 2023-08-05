import React from "react";
import { Testimonial } from "../../index";
import gaybible from "../../assets/gaybible.webp";

const Testimonials = () => {
  return (
    <div className=" py-6 text-white md:pt-24">
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
