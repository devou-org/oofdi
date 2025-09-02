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
    "OOFDI is your all-in-one delivery app in Kozhikode, offering fast and reliable food, grocery, and medicine delivery. From organic and healthy meals to homestyle tiffins, farm-fresh produce, and eco-friendly packaging, we bring your favorite local restaurants, chefs, and stores to your doorstep in minutes."
  keywords: [
    "organic food delivery Kozhikode",
    "healthy tiffin delivery Kozhikode",
    "vegan meal delivery Kozhikode",
    "gluten-free food delivery Kozhikode",
    "chef-cooked meals delivery Kozhikode",
    "homemade dinner delivery Kozhikode",
    "affordable home-cooked meals Kozhikode",
    "eco-friendly packaging food delivery Kozhikode",
    "organic dinner tiffin Kozhikode",
    "daily lunch tiffin Kozhikode",
    "local cuisine food delivery Kozhikode",
    "best thali delivery Kozhikode",
    "spicy Malabar meals delivery Kozhikode",
    "healthy Lebanese food delivery Kozhikode",
    "low-calorie meal delivery Kozhikode",
    "balanced diet tiffin delivery Kozhikode",
    "paleo meal delivery Kozhikode",
    "keto food delivery Kozhikode",
    "sugar-free dessert delivery Kozhikode",
    "organic salad delivery Kozhikode",
    "fresh juice delivery Kozhikode",
    "farm-to-table meals delivery Kozhikode",
    "nutritious toddler meals delivery Kozhikode",
    "senior-friendly meal delivery Kozhikode",
    "pet-friendly home meal kits Kozhikode",
    "home-cooked biryani delivery Kozhikode",
    "pure vegetarian tiffin delivery Kozhikode",
    "Malabar parotta meal delivery Kozhikode",
    "healthy breakfast delivery Kozhikode",
    "whole wheat dosa delivery Kozhikode",
    "organic idli sambar delivery Kozhikode",
    "traditional Kerala breakfast delivery Kozhikode",
    "health-conscious snack delivery Kozhikode",
    "gluten-free dosa delivery Kozhikode",
    "vegan Sadya delivery Kozhikode",
    "homestyle fish curry delivery Kozhikode",
    "sustainable food delivery Kozhikode",
    "zero-waste food packaging delivery Kozhikode",
    "organic coconut-based meals Kozhikode",
    "low-sodium meals delivery Kozhikode",
    "low-fat meals delivery Kozhikode",
    "organic biryani delivery Kozhikode",
    "jaggery-sweetened dessert delivery Kozhikode",
    "multi-grain dosa delivery Kozhikode",
    "fiber-rich meals delivery Kozhikode",
    "immune-boosting meals delivery Kozhikode",
    "organic breakfast combo delivery Kozhikode",
    "child-friendly lunch delivery Kozhikode",
    "toddler lunch tiffin Kozhikode",
    "office lunch tiffin delivery Kozhikode",
    "plant-based meal delivery Kozhikode",
    "vegan lunch box Kozhikode",
    "healthy snack box delivery Kozhikode",
    "Malabar special delivery Kozhikode",
    "healthy Sunday brunch delivery Kozhikode",
    "diabetic-friendly meal delivery Kozhikode",
    "heart-healthy meals delivery Kozhikode",
    "organic soup delivery Kozhikode",
    "homemade chutney delivery Kozhikode",
    "farm fresh vegetables meal kit Kozhikode",
    "low-carb meal delivery Kozhikode",
    "non-spicy meal delivery Kozhikode",
    "senior diet food delivery Kozhikode",
    "baby weaning food delivery Kozhikode",
    "pure-veg biryani delivery Kozhikode",
    "bio-degradable packaging food delivery Kozhikode",
    "organic breakfast meals Kozhikode",
    "Malabar veg thali delivery Kozhikode",
    "thick home-style curd delivery Kozhikode",
    "besan-based snacks delivery Kozhikode",
    "multi-course tiffin delivery Kozhikode",
    "weekly meal plan delivery Kozhikode",
    "monthly tiffin subscription Kozhikode",
    "organic lunch subscription Kozhikode",
    "healthy supper delivery Kozhikode",
    "whole grain dinner delivery Kozhikode",
    "plant protein meal delivery Kozhikode",
    "vegan biryani delivery Kozhikode",
    "gluten-free bread delivery Kozhikode",
    "home-baked snacks delivery Kozhikode",
    "energy-boosting breakfast delivery Kozhikode",
    "organic juice cleanse Kozhikode",
    "protein-rich meal delivery Kozhikode",
    "healthy dessert delivery Kozhikode",
    "low-sugar breakfast delivery Kozhikode",
    "Malabar seafood meal delivery Kozhikode",
    "organic snack pack Kozhikode",
    "homestyle pillayar delivery Kozhikode",
    "vegan Kerala lunch delivery Kozhikode",
    "homemade payasam delivery Kozhikode",
    "traditional athirasam delivery Kozhikode",
    "Malabar porotta with stew delivery Kozhikode",
    "vegetarian stew delivery Kozhikode",
    "healthy tiffin subscription Kozhikode",
    "organic dosa set delivery Kozhikode",
    "customized diet meal delivery Kozhikode",
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
        <meta name="google-site-verification" content="3AFKgVsoOY1ztrXlpfCK6QUuJhGVlPkXhVa3QfU6ClQ" />
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
