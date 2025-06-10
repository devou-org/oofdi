import Image from "next/image";
import HeroSection from "./hero/page";
//place all pages here
export default function Home() {
  return (
    <>
         <HeroSection />
         <div className="w-screen h-screen"></div>
    </>
  );
}
