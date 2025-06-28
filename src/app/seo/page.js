// src/app/seo/page.js
"use client";

import { useEffect, useState } from "react";
import HeroSection from "../hero/page";
import About from "../about/page";
import Journey from "../journey/page";
import WhyUs from "../components/WhyUs";
import MoreThanFood from "../components/MoreThanFood";
import AreYou from "../components/AreYou";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

// Lazy load heavier components
const Testimonial = dynamic(() => import("../components/Testimonial"), {
  loading: () => <p className="text-center text-xl text-gray-400 my-10">Loading testimonials...</p>,
  ssr: false,
});

const FeedbackForm = dynamic(() => import("../components/FeedbackForm"), {
  loading: () => <p className="text-center text-xl text-gray-400 my-10">Loading feedback form...</p>,
  ssr: false,
});

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
