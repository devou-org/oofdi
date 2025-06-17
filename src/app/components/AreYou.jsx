import React from "react";
import Image from "next/image";
import {
  ClipboardList,
  Truck,
  LineChart,
  Archive,
  MapPin,
  Bell,
  Wallet,
} from "lucide-react";

export default function AreYou() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {/* Are You A Vendor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Text and Features */}
          <div>
            <h3 className="text-5xl font-bold mb-6 text-left">
              Are You A <span className="text-[#FF1F52]">Vendor</span>?
            </h3>

            <p className="text-2xl md:text-3xl font-medium font-bold mb-10 text-left w-full md:max-w-5xl" style={{ lineHeight: "1.2" }}>
              Manage your menu, receive orders instantly, and grow your business with Oofdi.
            </p>

            {/* Mobile Image */}
            <div className="block md:hidden mb-6">
              <Image
                src="/images/Vendor.jpg"
                alt="Vendor"
                width={420}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                <ClipboardList className="w-8 h-8 text-pink-600 mr-4" />
                Easy Menu Management
              </div>
              <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                <Truck className="w-8 h-8 text-pink-600 mr-4" />
                Order Tracking
              </div>
              <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                <LineChart className="w-8 h-8 text-pink-600 mr-4" />
                Sales Analytics
              </div>
              <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                <Archive className="w-8 h-8 text-pink-600 mr-4" />
                Inventory Control
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <div className="inline-block transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/Appstore.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="w-auto h-20 mb-20"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image (desktop only) */}
          <div className="hidden md:flex justify-center items-start mt-45">
            <Image
              src="/images/Vendor.jpg"
              alt="Vendor"
              width={420}
              height={500}
              className="object-cover w-[420px] h-[500px]"
            />
          </div>
        </div>

        {/* Are You A Rider Section */}
        <div>
          {/* Heading and Description Centered */}
          <div className="text-left mb-12">
            <h3 className="text-5xl font-bold mb-4">
              Are You A <span style={{ color: "#FF1F52" }}>Rider</span>?
            </h3>
            <p className="text-2xl md:text-3xl font-medium font-bold w-full md:max-w-5xl">
              Deliver orders efficiently with real-time tracking and optimized routes.
            </p>
          </div>

          {/* Grid with Image and Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="flex justify-center items-start mb-5">
              <Image
                src="/images/Rider.jpg"
                alt="Rider"
                width={480}
                height={500}
                className="object-cover w-[480px] h-[500px]"
              />
            </div>

            {/* Right: Features and Buttons */}
            <div>
              <div className="space-y-4 mb-10">
                <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                  <MapPin className="w-8 h-8 text-pink-600 mr-4" />
                  Route Optimization
                </div>
                <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                  <ClipboardList className="w-8 h-8 text-pink-600 mr-4" />
                  Delivery Status Updates
                </div>
                <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                  <Wallet className="w-8 h-8 text-pink-600 mr-4" />
                  Earnings Dashboard
                </div>
                <div className="flex items-center bg-pink-50 rounded-2xl px-6 py-5 font-bold text-xl">
                  <Bell className="w-8 h-8 text-pink-600 mr-4" />
                  Instant Notifications
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <div className="inline-block transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/Appstore.png"
                      alt="Download on the App Store"
                      width={200}
                      height={60}
                      className="w-auto h-20 mb-20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
