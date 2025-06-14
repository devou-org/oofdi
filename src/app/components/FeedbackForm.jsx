"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(4);

  return (
    <section className="bg-white text-black py-32 px-8 md:px-32">
      <div className="text-left space-y-8">
        <h2 className="text-5xl md:text-5xl font-bold ">
          Share Your <span className="text-pink-600">Flavorful</span> Experience
        </h2>
        <p className="text-2xl md:text-3xl font-medium font-bold w-7xl">
          Every review adds flavor to what we do. Share your thoughts and help shape the future of food delivery with Oofdi.
        </p>
      </div>

      {/* Form */}
      <div className="mt-20 bg-pink-200 p-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
        {/* Name and Stars */}
        <div className="space-y-10">
          <div>
            <label className="block font-semibold text-2xl mb-4">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 rounded-lg bg-pink-50 outline-none text-xl"
            />
          </div>

          <div>
            <label className="block font-semibold text-2xl mb-4">Rate</label>
            <div className="flex gap-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-10 h-10 cursor-pointer transition ${
                    index < rating ? "fill-pink-600 text-pink-600" : "text-white"
                  }`}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
          </div>

          <button className="bg-pink-600 text-white font-semibold text-2xl px-10 py-4 rounded-lg mt-6 hover:bg-pink-700 transition">
            Submit
          </button>
        </div>

        {/* Feedback Textarea */}
        <div>
          <label className="block font-semibold text-2xl mb-4">Feedback</label>
          <textarea
            placeholder="Share your experience..."
            rows={10}
            className="w-full p-6 bg-pink-50 outline-none rounded-lg text-xl"
          ></textarea>
        </div>
      </div>
    </section>
  );
}