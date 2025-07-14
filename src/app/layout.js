// src/app/layout.js
import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import { FirestoreProvider } from "./Context/firebaseContext";
import { MediaProvider } from "./Context/blobContext";
import { Analytics } from "@vercel/analytics/next";

const monoSans = Mona_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap", // Prevent render-blocking
});

// static SEO
export const metadata = {
  title: "OOFDI",
  description:
    "Your favourite food at your fingertips. Order from your favorite restaurants in minutes.",
  keywords: [
    "food delivery India",
    "online grocery delivery",
    "fresh meat delivery",
    "medicine delivery app",
    "Oofdi app",
    "food and grocery app",
    "fast delivery service",
    "online food order India",
    "doorstep food delivery",
    "local restaurant delivery",
    "order groceries online",
    "instant medicine delivery",
    "express delivery India",
    "healthy food delivery",
    "contactless food delivery",
  ],
  authors: [{ name: "Oofdi Team" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Oofdi – Fast Food, Grocery & Medicine Delivery",
    description:
      "Your favourite food at your fingertips. Order from your favorite restaurants in minutes.",
    url: "https://oofdi.vercel.app",
    siteName: "OOFDI",
    images: [
      {
        url: "/images/oofdilogo.jpg",
        width: 1200,
        height: 630,
        alt: "Oofdi Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts to reduce render delay */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="/images/mandhi.avif"
          type="image/avif"
          fetchPriority="high"
        />

        {/*  Canonical tag */}
        <link rel="canonical" href="https://oofdi.vercel.app/" />
      </head>
      <body className={`${monoSans.variable} overflow-x-hidden`}>
        <FirestoreProvider>
          <MediaProvider>
            {children}
            <Analytics />
          </MediaProvider>
        </FirestoreProvider>
      </body>
    </html>
  );
}
