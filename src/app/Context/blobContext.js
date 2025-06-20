"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const ref = doc(db, "media", "adminUploads");
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.imageUrl) setImageUrl(data.imageUrl);
          if (data.videoUrl) setVideoUrl(data.videoUrl);
        } else {
          console.log("No media document found.");
        }
      } catch (error) {
        console.error("Error fetching media URLs:", error);
      }
    };

    fetchMedia();
  }, []);
  return (
    <MediaContext.Provider value={{ imageUrl, setImageUrl, videoUrl, setVideoUrl }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => useContext(MediaContext);
