"use client";

import React from "react";

const services = [
  {
    title: "The Idea",
    desc: "Consult our experts on your vision, from inception through development to final distribution. We refine concepts from start to finish, ensuring exceptional branding to perfect your project.",
  },
  {
    title: "Validation",
    desc: "Timely delivery and testing with your target audience. We validate findings using data-driven techniques that significantly impact the market.",
  },
  {
    title: "Production",
    desc: "We produce polished assets consistent with your concept’s claim and brand. Our professionals tailor concepts precisely to your market.",
  },
  {
    title: "Iteration",
    desc: "Continuous optimization in a regular iteration process. Solutions are analyzed and optimized until every detail is perfected.",
  },
];

const History = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Section */}
      <div
        className="absolute inset-0 h-[120vh] lg:h-[85vh]
        bg-gradient-to-r from-[#fdfbfb] via-[#f5e6f7] to-[#dbeafe]"
      ></div>

      {/* Top Badge */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-5
        h-6 w-28 bg-[#dbeafe] text-[#4b5563] text-xs font-bold
        flex items-center justify-center rounded-2xl shadow-md"
      >
        Swanirbhar
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col w-full gap-6 px-4 py-12">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#374151] mb-10">
          Things You Can Do On{" "}
          <span className="text-[#60a5fa]">Swanirbhar</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e5e7eb] rounded-xl
                shadow-md p-5 flex flex-col items-center text-center
                transition transform hover:scale-105 hover:shadow-lg duration-300
                min-h-[220px]"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-3">
                {service.title}
              </h3>
              <p className="text-[#4b5563] text-sm md:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
