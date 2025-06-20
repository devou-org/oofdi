"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function FeedbackForm() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    const templateParams = {
      from_name: name,
      message,
      rating_stars: "⭐".repeat(rating),
    };

    emailjs
      .send(
        "service_6n8nyqs",         // ✅ Your actual EmailJS service ID
        "template_ioo5nk5",         // ✅ Your actual EmailJS template ID
        templateParams,
        "1Wi5ZQVNE43CMxKym"          // ✅ Your actual EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Feedback sent successfully!");
          setName("");
          setMessage("");
          setRating(5);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="bg-white text-black py-32 px-6 sm:px-32">
      <div className="text-left space-y-8">
        <h2 className="text-5xl font-bold">
          Share Your <span style={{ color: "#FF1F52" }}>Flavorful</span> Experience
        </h2>
        <p className="text-2xl md:text-3xl font-medium max-w-full break-words">
          Every review adds flavor to what we do. Share your thoughts and help shape the future of food delivery with Oofdi.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-20 bg-pink-200 p-6 sm:p-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        {/* Left Side */}
        <div className="space-y-10">
          <div>
            <label className="block font-semibold text-2xl mb-4">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 rounded-lg bg-pink-50 outline-none text-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
        </div>

        {/* Right Side */}
        <div>
          <label className="block font-semibold text-2xl mb-4">Feedback</label>
          <textarea
            placeholder="Share your experience..."
            rows={10}
            className="w-full p-6 sm:pl-6 pl-10 bg-pink-50 outline-none rounded-lg text-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-start md:justify-end">
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold text-2xl px-10 py-4 rounded-lg hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div className="md:col-span-2 mt-6 text-center text-xl font-semibold text-pink-700">
            {status}
          </div>
        )}
      </form>
    </section>
  );
}
