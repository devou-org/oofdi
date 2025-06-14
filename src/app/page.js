import Image from "next/image";
import HeroSection from "./hero/page";
import About from "./about/page";
import Journey from "./journey/page";
//place all pages here
export default function Home() {
  return (
    <> 
         <HeroSection />
         <About />
         <Journey />
    </>
  );
}
