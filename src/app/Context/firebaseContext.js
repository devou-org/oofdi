"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FirestoreContext = createContext();

export const FirestoreProvider = ({ children }) => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const queryTestimonial = await getDocs(collection(db, "testimonials"));
      const testimonials = queryTestimonial.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonialData(testimonials);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching testimonials: ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const updateTestimonial = async (id, updatedData) => {
    try {
      const docRef = doc(db, "testimonials", id);
      await updateDoc(docRef, updatedData);
      console.log("Testimonial updated successfully");
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
    fetchData();
  };
  const deleteTestimonial = async (id) => {
    try {
      const docRef = doc(db, "testimonials", id);
      await deleteDoc(docRef);
      console.log("Testimonial deleted successfully");
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
    fetchData();
  };

  return (
    <FirestoreContext.Provider
      value={{ testimonialData, loading, updateTestimonial, deleteTestimonial, fetchData }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
export const useTestimonialsFirestore = () => useContext(FirestoreContext);
