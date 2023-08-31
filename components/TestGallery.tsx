import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import designo0 from "../public/designo/designo-0.png";
import designo1 from "../public/designo/designo-1.png";
import designo2 from "../public/designo/designo-2.png";
import designo3 from "../public/designo/designo-3.png";
import designo4 from "../public/designo/designo-4.png";
import designo5 from "../public/designo/designo-5.png";
import designo6 from "../public/designo/designo-6.png";
import designo7 from "../public/designo/designo-7.png";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const images = [
  designo0,
  designo1,
  designo2,
  designo3,
  designo4,
  designo5,
  designo6,
  designo7,
];

const TestGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [mouseStartX, setMouseStartX] = useState(null);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedSlide !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(selectedSlide);
        setIsTransitioning(false);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSlide]);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (touchStartX !== null) {
      const touchX = e.touches[0].clientX;
      const touchDiff = touchX - touchStartX;
      if (touchDiff > 50) {
        goToPreviousSlide();
        setTouchStartX(null);
      } else if (touchDiff < -50) {
        goToNextSlide();
        setTouchStartX(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handleMouseDown = (e: any) => {
    setMouseStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (mouseStartX !== null) {
      const mouseDiff = e.clientX - mouseStartX;
      if (mouseDiff > 50) {
        goToPreviousSlide();
        setMouseStartX(null);
      } else if (mouseDiff < -50) {
        goToNextSlide();
        setMouseStartX(null);
      }
    }
  };

  const handleMouseUp = () => {
    setMouseStartX(null);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="">
      <div
        ref={slideContainerRef}
        className="slideshow-container relative mt-8 "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="slide-container relative flex h-[56rem] overflow-hidden  bg-black">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide mx-auto w-full border border-red-800  ${
                index === currentSlide
                  ? isTransitioning
                    ? "pointer-events-none opacity-0"
                    : "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              } ${
                index === currentSlide ? "" : "hidden"
              } transition-opacity duration-500 ease-in-out`}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform  border border-red-800 text-white"
          >
            <GrFormPrevious className="h-[5rem] w-[5rem] " />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform   border border-red-800 text-white"
          >
            <GrFormNext className="h-[5rem] w-[5rem]" />
          </button>
        </div>
        <div className="thumbnails-container order mt-8 flex justify-center border-red-800">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail m-1 h-fit w-fit cursor-pointer  ${
                index === currentSlide ? "border-gay-pink border-2" : ""
              }`}
              onClick={() => setSelectedSlide(index)}
            >
              <Image
                src={image}
                alt="upcoming"
                width={80}
                height={80}
                className="h-[8rem] w-[8rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestGallery;
