import React from "react";

const Vision = () => {
  return (
    <div className="mt-20 ">
      <div className=" relative overflow-hidden">
        <div className="bg-gradient-to-b  from-[#fdfbfb] via-[#f5e6f7] to-[#dbeafe] absolute inset-0 -rotate-6 mt-10 xl:mt-24 w-[200%] -ml-10"></div>
        <div className="relative flex items-center justify-center flex-col mt-10">
          <img
            src="/assets/prod.svg"
            alt=""
            className="w-[85vw] md:w-[68vw] lg:w-[56vw] xl:w-[45vw] mx-auto py-10"
          />
          <p className="font-kumbh font-bold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2 md:w-[80%] pt-5">
            37% Increase In members productivity after 6 months with Swanirbhar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
