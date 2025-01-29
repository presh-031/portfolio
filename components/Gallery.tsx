"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Swiper imports

// Import Swiper styles

type GalleryProps = {
  route: string;
  screenshots: {}[];
};

const Gallery = ({ route, screenshots }: GalleryProps) => {
  // console.log(screenshots[0]);
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, Pagination]}
        navigation
        pagination
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
        }}
      >
        {screenshots?.map((screenshot: any) => {
          return (
            <SwiperSlide key={screenshot.src}>
              <div className="grid h-full place-items-center">
                <Image
                  src={screenshot.src}
                  alt={screenshot.src}
                  width={300}
                  height={650}
                  className={screenshot.styles}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
