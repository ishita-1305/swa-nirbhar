"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

const images = [
  "/assets/swa1.jpeg",
  "/assets/swa2.jpeg",
  "/assets/swa3.jpeg",
  "/assets/swa1.jpeg",
  "/assets/swa2.jpeg",
  "/assets/swa3.jpeg",
  "/assets/swa1.jpeg",
];

export default function App() {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto my-10 bg-white">
      {/* Header */}
      <div className="flex items-center justify-center font-extrabold text-2xl gap-8 font-Monts py-6 cursor-pointer">
        <h3 className="hover:text-pink-500 transition">All</h3>
        <h3 className="text-[#60a5fa]">PHOTOS</h3>
        <h3 className="hover:text-pink-500 transition">VIDEOS</h3>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left arrow */}
        <div className="swiper-button-prev-custom absolute -left-16 z-10 top-1/2 -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/leftarrow.png')] bg-contain bg-no-repeat"></div>

        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-3xl overflow-hidden p-[4px] bg-gradient-to-r from-[#fdfbfb] via-[#f5e6f7] to-[#dbeafe] shadow-lg">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-2xl w-full h-[300px] md:h-[350px] lg:h-[380px] object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right arrow */}
        <div className="swiper-button-next-custom absolute -right-16 z-10 top-1/2 -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/rightarrow.png')] bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
