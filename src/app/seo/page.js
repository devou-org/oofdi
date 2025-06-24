// src/app/seo/page.js
//Client-side rendering for dynamic content
"use client";

import { useEffect, useState } from "react";
import HeroSection from "../hero/page";
import About from "../about/page";
import Journey from "../journey/page";
import WhyUs from "../components/WhyUs";
import MoreThanFood from "../components/MoreThanFood";
import AreYou from "../components/AreYou";
import Testimonial from "../components/Testimonial";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white z-50">
        <img src="/images/loading.gif" alt="Loading..." className="w-28 h-28" />
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
