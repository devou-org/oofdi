// src/app/page.js
import HomePage from "./seo/page";

export async function generateMetadata() {
  return {
    title: "OOFDI | Food, Groceries & Medicine Delivery",
    description:
      "Order food, groceries, fresh meat, and medicines across India with Oofdi – fast, reliable delivery at your fingertips.",
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
      "contactless food delivery",
    ],
    openGraph: {
      title: "OOFDI – Fast Food, Grocery & Medicine Delivery",
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
    robots: "index, follow",
  };
}

export default HomePage;
