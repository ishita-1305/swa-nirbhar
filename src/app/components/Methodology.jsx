"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Start Small",
    desc: "Begin with the simplest version of your idea.",
    img: "/assets/scooter.svg",
  },
  {
    title: "Grow Smarter",
    desc: "Iterate and make improvements step by step.",
    img: "/assets/cycle.svg",
  },
  {
    title: "Accelerate",
    desc: "Build stronger foundations and polish your product.",
    img: "/assets/motor.svg",
  },
];

const Methodology = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-[#fdfbfb]  to-[#dbeafe]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[black] mb-4"
        >
          Our{" "}
          <span className="bg-[#60a5fa] bg-clip-text text-transparent">
            Methodology
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#374151] max-w-2xl mx-auto text-base md:text-lg mb-12"
        >
          Use lean methodology to launch faster. No wastage of money or time in
          launching your idea.
        </motion.p>

        {/* Steps with SVGs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center"
            >
              <img
                src={step.img}
                alt={step.title}
                className="h-28 w-28 mb-4 drop-shadow-md"
              />
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#4b5563]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
