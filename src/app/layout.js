import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";


const monoSans = Mona_Sans({
   weight: ['400', '700'], 
  subsets: ['latin'],
})

export const metadata = {
  title: "OOFDI",
  description: "Oofdi – Food, Groceries & Medicine Delivery",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monoSans.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
