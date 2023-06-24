import React from "react";
import Image, { StaticImageData } from "next/image";

type TestimonialProps = {
  logo: StaticImageData;
  remark: string;
  client: string;
};

const Testimonial = ({ logo, remark, client }: TestimonialProps) => {
  return (
    <div className="mx-auto mb-4 rounded-[2rem] bg-[#515151] px-16 py-12 text-center sm:w-[51rem] sm:px-24  sm:pb-32 sm:pt-24">
      <Image
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="mx-auto mb-2 h-[10rem] w-[10rem]  object-contain"
      />
      <p className="mb-14 text-2xl font-medium">&quot;{remark}&quot;</p>
      <p className="text-2xl capitalize sm:text-4xl">{client}</p>
    </div>
  );
};

export default Testimonial;
