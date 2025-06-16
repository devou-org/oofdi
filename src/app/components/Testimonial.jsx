"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex",
    avatar: "/images/Alex.png",
    text: "Oofdi has completely changed how I order food. It’s fast, reliable, and the meals always arrive hot and fresh. Even late-night cravings are covered!",
    stars: 5,
  },
  {
    name: "Priya",
    avatar: "/images/Priya.png",
    text: "The grocery and medicine delivery is a lifesaver. Oofdi is my go-to app for everything!",
    stars: 5,
  },
  {
    name: "Sam",
    avatar: "/images/Sam.png",
    text: "Super easy to use and always on time. Highly recommend Oofdi to everyone!",
    stars: 4,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 flex flex-col items-center min-h-screen justify-center px-4">
      <div className="mb-8 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Your <span style={{ color: "#FF1F52" }}>Voices</span>, Our Fuel
        </h2>
        <p className="text-3xl md:text-4xl font-bold max-w-full mx-auto">
          Our users share their experiences with Oofdi’s fast, fresh, and reliable<br />delivery.
        </p>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
        {/* Left Arrow */}
        <button
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-pink-300 text-4xl font-bold select-none"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          &#60;
        </button>

        {/* Testimonial Card */}
        <div className="relative w-full">
          {/* Avatar + Star Bar */}
          <div className="absolute -top-24 left-1/2 md:left-4 flex flex-col md:flex-row items-center md:items-start z-10 mt-4 -translate-x-1/2 md:translate-x-0 w-full md:w-auto justify-center md:justify-start mt-10">
            {/* Avatar */}
            <div
              className="border-8 border-pink-200 bg-gray-200 overflow-hidden flex items-center justify-center md-5"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop:"-20px"
              }}
            >
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Star Bar */}
            <div className="border-8 border-pink-200 bg-white px-6 py-2 mt-3 md:mt-0 md:ml-[-4px] flex items-center justify-center min-w-[180px] md:min-w-[260px] h-12 md:h-16">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <span key={i} className="text-pink-500 text-2xl md:text-4xl mx-1 md:mx-2">
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="border-9 border-pink-200 bg-pink-50 w-full pt-28 sm:pt-24 pb-12 px-6 sm:px-8">
            <div className="flex flex-col justify-center items-center min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <p className="text-2xl sm:text-3xl text-black leading-snug font-medium text-center">
                    {testimonials[current].text}
                  </p>
                  <div className="text-right mt-8 text-xl sm:text-2xl font-bold w-full">
                    – {testimonials[current].name}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-pink-300 text-4xl font-bold select-none"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          &#62;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-4 h-4 bg-pink-200 rounded-full inline-block transition-opacity duration-200 ${
                idx === current ? "" : "opacity-50"
              }`}
              onClick={() => setCurrent(idx)}
              style={{ cursor: "pointer" }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}