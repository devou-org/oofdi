//src/app/page.js

import WhyUs from "@/app/components/WhyUs.jsx";
import MoreThanFood from "@/app/components/MoreThanFood.jsx";
import AreYou from "@/app/components/AreYou.jsx";
import Testimonial from "@/app/components/Testimonial";
import FeedbackForm from "@/app/components/FeedbackForm";
import Footer from "@/app/components/Footer";
export default function Page() {
  return (
    <>
      <WhyUs />
      <MoreThanFood />
      <AreYou />
      <Testimonial />
      <FeedbackForm />
      <Footer />
    </>
  );
}
