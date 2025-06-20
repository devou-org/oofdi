import { Pizza, Fish, BriefcaseMedical, CreditCard, Clock, Star } from "lucide-react";

const features = [
  {
    icon: <Pizza className="w-8 h-8 text-pink-500" />,
    text: "Wide Food & Grocery options",
  },
  {
    icon: <Fish className="w-8 h-8 text-pink-500" />,
    text: "Fresh Meat, Fish & Chicken Delivery",
  },
  {
    icon: <BriefcaseMedical className="w-8 h-8 text-pink-500" />,
    text: "Quick & Reliable Medicine Delivery",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-pink-500" />,
    text: "Secure Payment",
  },
  {
    icon: <Clock className="w-8 h-8 text-pink-500" />,
    text: "Real-Time Order Tracking",
  },
  {
    icon: <Star className="w-8 h-8 text-pink-500" />,
    text: "Reviews & Ratings",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: stacked images */}
        <div className="flex flex-col h-auto">
          <div className="flex-1">
            <img src="/images/veg.jpg" alt="Groceries" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src="/images/Meat.jpg" alt="Meat" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src="/images/Pharmacy.jpg" alt="Pharmacy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: heading, features, and app store buttons */}
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 mt-2">
            Why <span style={{ color: "#FF1F52" }}>US</span> ?
          </h2>

          <div className="space-y-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-xl flex items-center gap-3">
                <span>{feature.icon}</span>
                <p className="font-bold text-xl md:text-2xl">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-2 flex-nowrap justify-center items-center">
            <div className="inline-block transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/GooglePlay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="w-auto h-12 mt-4"
                />
              </a>
            </div>

            <div className="inline-block transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="w-auto h-20 mb-5 mt-9 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
