import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./myswipercomponent.css";
import slider from "../../../images/slider.png";

const MySwiperComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (currentSlide === 1) {
        swiperRef.current.swiper.slidePrev();
        setCurrentSlide(0);
      }
    }
  };

  const handleSlideChange = () => {
    setCurrentSlide(swiperRef.current.swiper.realIndex);
  };

  return (
    <div className="absolute w-[90%] mx-auto left-0 right-0 mt-5">
      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        className="swiper w-full"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img className="mt-[-25px] w-[50%]" src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mt-[-25px] w-[50%]" src={slider} alt="" />
        </SwiperSlide>
      </Swiper>
      <div
        className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white rounded-full cursor-pointer z-10 left-4"
        onClick={handlePrevButtonClick}
      ></div>
      <div
        className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white rounded-full cursor-pointer z-10 right-[52.5%]"
        onClick={handleNextButtonClick}
      ></div>
      <div className=" absolute bottom-5 left-1/2 transform -translate-x-1/2"></div>
      <div className=" absolute bottom-[90%] right-[52%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle
            cx="30.1698"
            cy="30.17"
            r="30"
            transform="rotate(30 30.1698 30.17)"
            fill="url(#paint0_linear_1_189)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_1_189"
              x1="30.1698"
              y1="0.169971"
              x2="30.1698"
              y2="60.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4361EE"></stop>
              <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></div>
    </div>
  );
};

export default MySwiperComponent;
