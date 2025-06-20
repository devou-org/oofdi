"use client";
import React, { useState } from "react";
import { useMedia } from "@/app/Context/blobContext";
import { saveMediaUrls, deleteMediaUrl } from "../../utils/firebaseMedia";

export default function AdminMedia() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState("");
  const { imageUrl, setImageUrl, videoUrl, setVideoUrl } = useMedia();

  const handleUpload = async (file, type) => {
    if (!file) return;
    setStatus(`Uploading ${type}...`);
    const res = await fetch(`/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    if (res.ok) {
      const { url } = await res.json();
      if (type === "image") setImageUrl(url);
      setStatus(`${type} uploaded and saved!`);
    } else {
      setStatus(`Failed to upload ${type}.`);
    }
  };

  const handleReset = async (type) => {
    const url = type === "image" ? imageUrl : videoUrl;
    if (!url) return;

    setStatus(`Deleting ${type}...`);
    const res = await fetch(`/api/delete?url=${encodeURIComponent(url)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      if (type === "image") {
        setImage(null);
        setImageUrl("");
      } else {
        setVideo(null);
        setVideoUrl("");
      }
      await saveMediaUrls({
        imageUrl: type === "image" ? "" : imageUrl,
        videoUrl: type === "video" ? "" : videoUrl,
      });
      setStatus(`${type} deleted successfully.`);
    } else {
      setStatus(`Failed to delete ${type}.`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FF1F52] mb-2">OOFDI Media Upload</h1>
        <p className="text-lg mb-8 text-gray-700">
          ✅ One image and one video only. To replace, delete the current file and upload again.
        </p>

        {/* Image Section */}
        <div className="mb-10">
          <label className="block font-semibold text-xl mb-3 text-[#FF1F52]">Image Upload</label>
          {!imageUrl ? (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mb-3 border-2 border-[#FF1F52] p-2 rounded"
              />
              <button
                onClick={() => handleUpload(image, "image")}
                className="bg-[#FF1F52] text-white px-5 py-2 rounded hover:bg-[#e11e4a]"
              >
                Upload Image
              </button>
            </>
          ) : (
            <div className="mt-4 space-y-2">
              <a href={imageUrl} className="text-blue-600 underline">
                {imageUrl}
              </a>
              <img src={imageUrl} alt="Uploaded" className="max-w-full rounded shadow" />
              <button
                onClick={() => handleReset("image")}
                className="text-sm text-red-500 underline hover:text-red-700"
              >
                Delete & Upload New Image
              </button>
            </div>
          )}
        </div>

        {/* Video Section */}
        <div className="mb-10">
          <label className="block font-semibold text-xl mb-3 text-[#FF1F52]">Video Upload</label>
          {!videoUrl ? (
            <>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                className="mb-3 border-2 border-[#FF1F52] p-2 rounded"
              />
              <button
                onClick={() => handleUpload(video, "video")}
                className="bg-[#FF1F52] text-white px-5 py-2 rounded hover:bg-[#e11e4a]"
              >
                Upload Video
              </button>
            </>
          ) : (
            <div className="mt-4 space-y-2">
              <a href={videoUrl} className="text-blue-600 underline">
                {videoUrl}
              </a>
              <video controls src={videoUrl} className="max-w-full rounded shadow" />
              <button
                onClick={() => handleReset("video")}
                className="text-sm text-red-500 underline hover:text-red-700"
              >
                Delete & Upload New Video
              </button>
            </div>
          )}
        </div>

        {status && <p className="text-base mt-6 text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
