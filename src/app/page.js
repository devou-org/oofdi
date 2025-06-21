"use client";

import { useEffect, useState } from "react";
import HeroSection from "./hero/page";
import About from "./about/page";
import Journey from "./journey/page";
import WhyUs from "@/app/components/WhyUs.jsx";
import MoreThanFood from "@/app/components/MoreThanFood.jsx";
import AreYou from "@/app/components/AreYou.jsx";
import Testimonial from "@/app/components/Testimonial";
import FeedbackForm from "@/app/components/FeedbackForm";
import Footer from "@/app/components/Footer";
export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2.5s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white z-50">
        <img
          src="/images/loading.gif" //loader gif
          alt="Loading..."
          className="w-28 h-28"
        />
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <About />
      <Journey />
      <WhyUs />
      <MoreThanFood />
      <AreYou />
      <Testimonial />
      <FeedbackForm />
      <Footer />
    </>
  );
}
