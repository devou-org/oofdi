// "use client";
// import { useRef } from "react";
// import { useTransform, motion, useScroll } from "framer-motion";


// const HeroSection = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const leftWidth = useTransform(scrollYProgress, [0.4, 0.7], ["50%", "100%"]);
//   const rightOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

//   return (
//     <>

//       {/* Hero Section */}
//       <section
//         id="hero-section"
//         ref={sectionRef}
//         className="relative w-screen h-[200vh] overflow-hidden"
//         aria-label="Oofdi Food Delivery Hero Section"
//       >
//         <div className="sticky top-0 w-screen h-screen flex">
//           {/* Left box expands */}
//           <motion.div
//             className="h-full flex flex-col items-center p-4 z-10 bg-white"
//             style={{ width: leftWidth }}
//           >
//             <div className="w-3/4">
//               <div id="logo" className="w-30 h-30">
//                 <img
//                   className="w-full h-full"
//                   src="/images/oofdilogo.jpg"
//                   alt="Oofdi App Logo"
//                 />
//               </div>
//               <header id="heading">
//                 <h1 className="text-8xl font-bold leading-25">
//                   Your Favourite <br />
//                   <span className="text-[#FF1F52]"> Food </span>at Your <br />
//                   Fingertips
//                 </h1>
//               </header>
//               <p id="sub-heading" className="pt-5 font-bold text-4xl leading-15">
//                 Order from your favorite restaurants in minutes.
//               </p>
//               <div id="cta">
//                 <a
//                   href="#download"
//                   className="mt-4 inline-block px-6 py-3 bg-[#FF1F52] text-white font-semibold rounded"
//                 >
//                   Get the App
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right image fades away */}
//           <motion.div
//             className="h-screen"
//             style={{ width: "50%", opacity: rightOpacity }}
//             aria-hidden="true"
//           >
//             <img
//               className="w-full h-full object-cover"
//               src="/images/veg.jpg"
//               alt="Vegetarian food platter from Oofdi"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;
