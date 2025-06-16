//src/app/page.js

import WhyUs from "@/app/components/WhyUs.jsx";
import MoreThanFood from "@/app/components/MoreThanFood.jsx";
import AreYou from "@/app/components/AreYou.jsx";
import Testimonial from "@/app/components/Testimonial";
import FeedbackForm from "@/app/components/FeedbackForm";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import HeroSection from "./hero/page";
import About from "./about/page";
import Journey from "./journey/page";
export default function Page() {
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
