"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { useTestimonialsFirestore } from "@/app/Context/firebaseContext";

const AdminTestimonial = () => {
  const [form, setForm] = useState({
    name: "",
    avatar: "",
    text: "",
    stars: 0,
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const {fetchData, testimonialData, updateTestimonial, deleteTestimonial } =
    useTestimonialsFirestore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateTestimonial(editingId, {
          name: form.name,
          avatar: form.avatar,
          text: form.text,
          stars: Number(form.stars),
        });
        alert("Testimonial updated!");
      } else {
        await addDoc(collection(db, "testimonials"), {
          ...form,
          stars: Number(form.stars),
          createdAt: new Date(),
        });
        alert("Testimonial added!");
        fetchData(); // Refresh data after adding
      }

      // Reset form
      setForm({ name: "", avatar: "", text: "", stars: 0 });
      setIsEditMode(false);
      setEditingId(null);
    } catch (error) {
      console.error("Error submitting testimonial: ", error);
    }
  };

  const handleEdit = (testimonial) => {
    setForm({
      name: testimonial.name,
      avatar: testimonial.avatar,
      text: testimonial.text,
      stars: testimonial.stars,
    });
    setIsEditMode(true);
    setEditingId(testimonial.id);
  };

  const handleCancelEdit = () => {
    setForm({ name: "", avatar: "", text: "", stars: 0 });
    setIsEditMode(false);
    setEditingId(null);
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white border-b-4 border-[#FF1F52] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#FF1F52] text-center mb-2">
            OOFDI TESTIMONIAL SECTION
          </h1>
          <p className="text-gray-600 text-center text-lg">
            Manage customer testimonials and reviews
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div className="bg-white border-2 border-[#FF1F52] rounded-xl shadow-lg">
            <div className="bg-[#FF1F52] text-white py-4 px-6 rounded-t-xl">
              <h2 className="text-2xl font-bold">
                {isEditMode ? "Edit Testimonial" : "Add New Testimonial"}
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter customer name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF1F52] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Avatar URL
                </label>
                <input
                  type="url"
                  name="avatar"
                  value={form.avatar}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF1F52] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Testimonial Text
                </label>
                <textarea
                  name="text"
                  value={form.text}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter customer testimonial..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF1F52] transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rating (1-5 Stars)
                </label>
                <select
                  name="stars"
                  value={form.stars}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF1F52] transition-colors"
                >
                  <option value="">Select rating</option>
                  <option value="1">⭐ 1 Star</option>
                  <option value="2">⭐⭐ 2 Stars</option>
                  <option value="3">⭐⭐⭐ 3 Stars</option>
                  <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                  <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#FF1F52] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e01a47] transition-colors duration-200"
                >
                  {isEditMode ? "Update Testimonial" : "Add Testimonial"}
                </button>
                
                {isEditMode && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="flex-1 bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#FF1F52] rounded-xl shadow-lg">
              <div className="bg-[#FF1F52] text-white py-4 px-6 rounded-t-xl">
                <h3 className="text-xl font-bold">Dashboard Stats</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF1F52]">
                      {testimonialData.length}
                    </div>
                    <div className="text-sm text-gray-600">Total Testimonials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF1F52]">
                      {testimonialData.length > 0 
                        ? (testimonialData.reduce((sum, t) => sum + t.stars, 0) / testimonialData.length).toFixed(1)
                        : '0.0'
                      }
                    </div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
{/* 
            <div className="bg-white border-2 border-[#FF1F52] rounded-xl shadow-lg">
              <div className="bg-[#FF1F52] text-white py-4 px-6 rounded-t-xl">
                <h3 className="text-xl font-bold">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button 
                  onClick={fetchData}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Refresh Data
                </button>
             
              </div>
            </div> */}
          </div>
        </div>

        {/* Testimonials List Section */}
        <div className="mt-12">
          <div className="bg-white border-2 border-[#FF1F52] rounded-xl shadow-lg">
            <div className="bg-[#FF1F52] text-white py-4 px-6 rounded-t-xl">
              <h2 className="text-2xl font-bold">All Testimonials ({testimonialData.length})</h2>
            </div>
            
            <div className="p-6">
              {testimonialData.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No Testimonials Yet</h3>
                  <p className="text-gray-500">Add your first testimonial using the form above.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {testimonialData.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#FF1F52]"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=FF1F52&color=ffffff`;
                            }}
                          />
                          <div>
                            <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                            <div className="text-yellow-400 text-sm">
                              {renderStars(testimonial.stars)}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">"{testimonial.text}"</p>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(testimonial)}
                            className="flex-1 bg-green-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-green-600 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this testimonial?')) {
                                deleteTestimonial(testimonial.id);
                              }
                            }}
                            className="flex-1 bg-red-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-red-600 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonial;