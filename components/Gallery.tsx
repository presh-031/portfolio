"use client";
import Image from "next/image";

// Swiper imports
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryProps = {
  route: string;
};

const Gallery = ({ route }: GalleryProps) => {
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
        <SwiperSlide>
          <div className="grid h-full place-items-center">
            <Image
              src="/designo/designo-0.png"
              alt="image1"
              width={300}
              height={650}
              className="aspect-auto h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid h-full place-items-center">
            <Image
              src="/designo/designo-1.png"
              alt="image1"
              width={300}
              height={650}
              className="aspect-auto h-[60rem] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid h-full place-items-center">
            <Image
              src="/designo/designo-2.png"
              alt="image1"
              width={300}
              height={650}
              className="aspect-auto h-[60rem] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid h-full place-items-center">
            <Image
              src="/designo/designo-3.png"
              alt="image1"
              width={300}
              height={650}
              className="aspect-auto h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid h-full place-items-center">
            <Image
              src="/designo/designo-6.png"
              alt="image1"
              width={300}
              height={650}
              className="aspect-auto h-[75rem] w-full object-cover object-top"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
