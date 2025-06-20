"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTestimonialsFirestore } from "../Context/firebaseContext";

// const testimonials = [
//   {
//     name: "Alex",
//     avatar: "/images/Alex.png",
//     text: "Oofdi has completely changed how I order food. It’s fast, reliable, and the meals always arrive hot and fresh. Even late-night cravings are covered!",
//     stars: 5,
//   },
//   {
//     name: "Priya",
//     avatar: "/images/Priya.png",
//     text: "The grocery and medicine delivery is a lifesaver. Oofdi is my go-to app for everything!",
//     stars: 5,
//   },
//   {
//     name: "Sam",
//     avatar: "/images/Sam.png",
//     text: "Super easy to use and always on time. Highly recommend Oofdi to everyone!",
//     stars: 4,
//   },
// ];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const { testimonialData, loading } = useTestimonialsFirestore();

  if (loading) return <p>Loading...</p>;

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    resetTimer();
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-white py-16 flex flex-col items-center min-h-screen justify-center px-4">
      <div className="mb-8 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Your <span style={{ color: "#FF1F52" }}>Voices</span>, Our Fuel
        </h2>
        <p className="text-2xl md:text-3xl font-semibold max-w-full mx-auto">
          Our users share their experiences with Oofdi’s fast, fresh, and reliable
          <br />
          delivery.
        </p>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
        {/* Desktop Left Arrow */}
        <button
          className="hidden md:block absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-pink-300 hover:text-pink-500 transition"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Testimonial Card */}
        <div className="relative w-full">
          {/* Avatar + Stars */}
          <div className="absolute -top-24 left-1/2 md:left-4 flex flex-col md:flex-row items-center md:items-start z-10 mt-4 -translate-x-1/2 md:translate-x-0 w-full md:w-auto justify-center md:justify-start mt-10">
            <div
              className="border-8 border-pink-200 bg-gray-200 overflow-hidden flex items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop: "-20px",
              }}
            >
              <img
                src={testimonialData[current].avatar}
                alt={testimonialData[current].name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border-8 border-pink-200 bg-white px-6 py-2 mt-3 md:mt-0 md:ml-[-4px] flex items-center justify-center min-w-[180px] md:min-w-[260px] h-12 md:h-16">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`${
                    i < testimonialData[current].stars ? "text-pink-500" : "text-pink-200"
                  } text-3xl md:text-4xl mx-1 md:mx-2 leading-none`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Box */}
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
                  <p className="text-2xl md:text-2xl text-black leading-snug font-medium text-center">
                    {testimonialData[current].text}
                  </p>
                  <div className="text-right mt-8 text-xl sm:text-2xl font-bold w-full">
                    – {testimonialData[current].name}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Desktop Right Arrow */}
        <button
          className="hidden md:block absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-pink-300 hover:text-pink-500 transition"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight size={40} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialData.map((_, idx) => (
            <span
              key={idx}
              className={`w-4 h-4 bg-pink-200 rounded-full inline-block transition-opacity duration-200 ${
                idx === current ? "" : "opacity-50"
              }`}
              onClick={() => {
                setCurrent(idx);
                resetTimer();
              }}
              style={{ cursor: "pointer" }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
