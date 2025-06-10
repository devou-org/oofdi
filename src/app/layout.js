import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";


const monoSans = Mona_Sans({
   weight: ['400', '700'], 
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
