"use client";

import React, { useState, useEffect } from "react";
import AdminTestimonial from "./adminTestimonial/AdminTestimonial";
import AdminMedia from "./adminMedia/adminMedia";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("media");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email.toLowerCase() === "devou.in@gmail.com") {
        setLoading(false);
      } else {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

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

        <button
          onClick={handleSignOut}
          className="px-6 py-3 font-semibold rounded shadow transition-all duration-300 bg-gray-800 text-white ml-4 hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Render Component */}
      {activeTab === "media" && <AdminMedia />}
      {activeTab === "testimonial" && <AdminTestimonial />}
    </div>
  );
}
