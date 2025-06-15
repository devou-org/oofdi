"use client";

import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const leftWidth = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    isMobile ? ["100%", "100%"] : ["50%", "100%"]
  );
  const leftScale = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    isMobile ? [1, 1] : [1, 1.05]
  );
  const rightOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    isMobile ? [1, 1] : [1, 0]
  );
  const rightScale = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    isMobile ? [1, 1] : [1, 0.95]
  );
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const newopacity = useTransform(scrollYProgress, [0.65, .75], [0, 1.5]);
  const scale = useTransform(scrollYProgress, [0.6, .7], [0, 1]);


  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative w-screen h-[200vh] md:h-[300vh]  "
      aria-label="Oofdi Food Delivery Hero Section"
    >
      <div className="sticky top-0 w-screen h-screen flex flex-col md:flex-row">
        {/* Left Section */}
        <motion.div
          className="h-full flex flex-col items-center p-4 z-10 bg-white"
          style={{ width: leftWidth, scale: leftScale }}
        >
          <motion.div style={{ opacity }} className="w-11/12 md:w-3/4">
            <div id="logo" className="w-24 h-24 md:w-40 md:h-40 mb-4">
              <img
                className="w-full h-full object-contain"
                src="/images/oofdilogo.jpg"
                alt="Oofdi App Logo"
              />
            </div>
            <header id="heading">
              <h1 className="text-4xl md:text-6xl  font-bold leading-tight">
                Your Favourite <br />
                <span className="text-[#FF1F52]"> Food </span>at Your <br />
                Fingertips
              </h1>
            </header>
            <p className="pt-4 font-semibold text-xl md:text-2xl lg:text-4xl leading-snug">
              Order from your favorite restaurants in minutes.
            </p>
            <div id="cta">
              <a
                href="#download"
                className="mt-6 inline-block px-6 py-3 bg-[#FF1F52] text-white font-semibold rounded hover:scale-105 transition-transform"
              >
                Get the App
              </a>
            </div>
          </motion.div>
          <motion.div
            style={{ opacity: newopacity,scale }}
            className="w-screen h-1/2 flex flex-col justify-center md:justify-end items-center absolute top-0 left-0 -z-10"
          >
            <div className="h-1/2 flex flex-col items-center justify-start">
              <img className="w-20 md:w-40 h-20 md:h-40" src="./images/oofdilogo.jpg"></img>
              <h1 className=" text-3xl  md:text-6xl font-bold text-center mb-6 px-4">
                <span className="text-[#FF1F52]">O</span>nline{" "}
                <span className="text-[#FF1F52]">O</span>rdering{" "}
                <span className="text-[#FF1F52]">F</span>ood{" "}
                <span className="text-[#FF1F52]">D</span>elivery{" "}
                <span className="text-[#FF1F52]">I</span>nstantly
              </h1>

              <div className="flex gap-6 mt-4">
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
                >
                  <span className="font-semibold">App Store</span>
                </a>

                {/* Play Store Button */}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
                >
                  <span className="font-semibold">Play Store</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image (hidden on small screens) */}
        <motion.div
          className={`h-screen ${isMobile ? "block" : "hidden md:block"}`}
          style={{
            width: isMobile ? "100%" : "50%",
            opacity: isMobile ? 1 : rightOpacity,
            scale: isMobile ? 1 : rightScale,
            transformOrigin: "left",
          }}
          aria-hidden="true"
        >
          <img
            className="w-full h-3/4 md:h-full object-cover"
            src="/images/veg.jpg"
            alt="Vegetarian food platter from Oofdi"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
