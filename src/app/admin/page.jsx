"use client";

import React, { useState } from "react";
import AdminTestimonial from "./adminTestimonial/AdminTestimonial";
import AdminMedia from "./adminMedia/adminMedia";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("media");

  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-12">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("media")}
          className={`px-6 py-3 font-semibold rounded shadow transition-all duration-300 ${
            activeTab === "media"
              ? "bg-[#FF1F52] text-white"
              : "bg-white text-[#FF1F52] border border-[#FF1F52] hover:bg-[#FF1F52] hover:text-white"
          }`}
        >
          Media Upload
        </button>
        <button
          onClick={() => setActiveTab("testimonial")}
          className={`px-6 py-3 font-semibold rounded shadow transition-all duration-300 ${
            activeTab === "testimonial"
              ? "bg-[#FF1F52] text-white"
              : "bg-white text-[#FF1F52] border border-[#FF1F52] hover:bg-[#FF1F52] hover:text-white"
          }`}
        >
          Testimonials
        </button>
      </div>

      {/* Render Component */}
      {activeTab === "media" && <AdminMedia />}
      {activeTab === "testimonial" && <AdminTestimonial />}
    </div>
  );
}
