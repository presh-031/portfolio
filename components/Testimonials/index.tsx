import React from "react";
import { Testimonial } from "../../index";
import gaysbie from "../../assets/gaysbie.png";

const Testimonials = () => {
  return (
    <div className=" py-6 text-white md:pt-24">
      <Testimonial
        logo={gaysbie}
        remark="Precious created the most elegant and powerful web experience
        we've ever seen. We couldn't have asked for anything
        better."
        client="Henry Shread, CEO, Gaysbie."
      />
    </div>
  );
};

export default Testimonials;
