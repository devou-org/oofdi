"use client";
import React, { useState, useEffect, useRef } from "react";
import { Check, Truck, PackageSearch, Smartphone } from "lucide-react";

const Journey = () => {
  const [step, setStep] = useState("order");
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState(0);
  const imageRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setWidth(rect.width);
      console.log("Image width:", rect.width);
    }

    // Optional: update on window resize
    const handleResize = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setWidth(rect.width);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startJourney = () => {
    const steps = ["confirmed", "tracking", "delivered"];
    let currentIndex = 0;

    setStep(steps[currentIndex]);

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < steps.length) {
        setStep(steps[currentIndex]);

        if (steps[currentIndex] === "tracking") {
          setPosition(width - 150);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  const getButtonColor = () => {
    switch (step) {
      case "order":
        return "bg-red-500 animate-pulse";
      case "confirmed":
        return "bg-yellow-500 pointer-events-none";
      case "tracking":
        return "bg-blue-500 pointer-events-none";
      case "delivered":
        return "bg-green-600 pointer-events-none";
      default:
        return "bg-gray-400";
    }
  };

  const getStepLabel = () => {
    switch (step) {
      case "order":
        return "Order Now";
      case "confirmed":
        return "Order Confirmed";
      case "tracking":
        return "Out for Delivery";
      case "delivered":
        return "Delivered";
    }
  };

  const getStepIcon = () => {
    switch (step) {
      case "order":
        return <Smartphone className="w-10 h-10" />;
      case "confirmed":
        return <PackageSearch className="w-10 h-10" />;
      case "tracking":
        return <Truck className="w-10 h-10" />;
      case "delivered":
        return <Check className="w-10 h-10" />;
    }
  };

  return (
    <>
      <section className="w-screen h-[100vh] md:h-[140vh] flex flex-col justify-center  px-4 md:px-0">
        <header className="w-full h-1/4 flex justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl  font-bold leading-tight">
            Flow to <span className="text-[#FF1F52]">Food</span>, Simplified
          </h1>
        </header>

        <main className="w-full h-1/2 flex flex-col gap-6 overflow-hidden">
          <div
            className="w-full h-1/4 flex justify-center relative"
            id="shop-person-section"
          >
            <div className=" w-fit md:w-1/2  md:h-full relative">
              <img
                ref={imageRef}
                src="./images/shopbg.png"
                alt="Shop Background"
                className="h-full w-full "
              />
              <div
                className="absolute z-10 h-fit bottom-0 transition-all duration-2500 ease-in-out"
                style={{ transform: `translateX(${position}px)` }}
              >
                <img
                  src="./images/oofdiman1.png"
                  alt="Oofdi Man"
                  className="w-full scale-35 translate-y-10"
                />
              </div>
            </div>
          </div>

          <div className="h-1/4 overflow-y-hidden"></div>

          <div
            className="w-full h-1/4 flex justify-between"
            id="smart-phone-section"
          >
            <div className="w-1/4 hidden sm:block">
              <img src="./images/foodleft.png" alt="" />
            </div>

            <div className="w-full sm:w-1/2 h-full scale-90 md:scale-50 flex justify-center items-center relative">
              <img
                className="relative translate-y-10 md:translate-y-40"
                src="./images/smartphone.png"
                alt=""
              />
              <button
                onClick={startJourney}
                className={`absolute top-2 flex flex-col items-center justify-center gap-2 ${getButtonColor()} text-white w-34 md:w-60 h-34 md:h-60 rounded-full shadow-xl border-4 border-white hover:scale-105 transition-all duration-300`}
              >
                {getStepIcon()}
                <span className="text-lg md:text-2xl font-semibold text-center px-2">
                  {getStepLabel()}
                </span>
              </button>
            </div>

            <div className="w-1/4 hidden sm:block">
              <img src="./images/foodright.png" alt="" />
            </div>
          </div>
        </main>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src="/images/marqueeitems.png"
                alt="marquee-item"
                className="marquee-item h-10 md:h-20 object-contain mx-2"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
