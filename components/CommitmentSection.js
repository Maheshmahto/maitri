// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { cormorant, montserrat } from "../app/font";

// export default function CommitmentSection() {
//   const stickyRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: stickyRef,
//     offset: ["start start", "end end"],
//   });

//   // IMAGE 1: Zoom out from 1.3x to 1x scale
//   const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
//   const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]); // Fades out when image 2 appears

//   const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
//   const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
//   const img2Opacity = useTransform(
//     scrollYProgress,
//     [0.18, 0.2, 0.45, 0.5],
//     [0, 1, 1, 1]
//   );

//   // IMAGE 3: Similarly adjust
//   const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
//   const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
//   const img3Opacity = useTransform(
//     scrollYProgress,
//     [0.48, 0.5, 0.8, 0.85],
//     [0, 1, 1, 1]
//   );

//   return (
//     <div className="text-white bg-black">
//       <div className="flex justify-center px-4 py-20">
//         <div className="max-w-5xl text-center">
//           <h1
//             className={`text-3xl md:text-5xl lg:text-[75px] font-medium lg:tracking-[-4px] tracking-normal mb-4 ${cormorant.className}`}
//           >
//             A commitment to conscience
//           </h1>
//           <p
//             className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-5xl mx-auto ${montserrat.className}`}
//           >
//             Each Maitri represents an unwavering dedication to environmental{" "}
//             stewardship. <br /> Certified climate-neutral, fully traceable,
//             cultivated with reverence for our planet.{" "}
//           </p>
//         </div>
//       </div>
//       {/* sticky container sized tall so scrollYProgress can drive the transitions */}
//       <div ref={stickyRef} className="relative h-[320vh]">
//         <div className="sticky top-0 w-full h-screen overflow-hidden">
//           {/* IMAGE 1: base layer with zoom effect */}

//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               zIndex: 10,
//               y: "0%",
//               opacity: img1Opacity,
//             }}
//           >
//             <motion.img
//               src="\images\Website-assets.jpg"
//               className="object-cover w-full h-full"
//               draggable={false}
//               style={{ scale: img1Scale }}
//             />
//             <div
//               className="absolute rounded-lg bg-opacity-70"
//               style={{
//                 top: "clamp(6rem, 12vw, 7rem)",
//                 left: "clamp(0.3rem, 1.4vw, 2.8rem)",
//                 maxWidth: "clamp(20rem, 80vw, 72rem)",
//                 padding: "clamp(0.5rem, 2vw, 2rem)",
//               }}
//             >
//               <h1
//                 className={`${cormorant.className} font-medium text-black tracking-tight`}
//                 style={{
//                   fontSize: "clamp(17px, 3.6vw, 60px)",
//                   marginBottom: "clamp(24px, 2vw, 68px)",
//                 }}
//               >
//                 PRECISION - MATCHED DIAMOND SETS
//               </h1>

//               <p
//                 className={`text-black ${montserrat.className} tracking-wide`}
//                 style={{
//                   fontSize: "clamp(14px, 1.8vw, 24px)",
//                   marginBottom: "clamp(16px, 6vw, 40px)",
//                 }}
//               >
//                 Eliminate 1-3 hours of manual sourcing per piece
//               </p>
//               <p
//                 className={`text-black ${montserrat.className} tracking-wide`}
//                 style={{
//                   fontSize: "clamp(14px, 1.4vw, 24px)",
//                   maxWidth: "clamp(18.75rem, 70vw, 51.25rem)",
//                 }}
//               >
//                 Our proprietary algorithm analyzes 60,000+ stones to create
//                 perfectly matched sets for studs, tennis bracelets, eternity
//                 bands, and more. Ready to order guaranteed consistent.
//               </p>

//               <div
//                 className="space-y-4"
//                 style={{
//                   marginTop: "clamp(3rem, 8vw, 4rem)",
//                 }}
//               >
//                 <div
//                   className="h-0.5 relative"
//                   style={{
//                     maxWidth: "clamp(20rem, 70vw, 61rem)",
//                   }}
//                 >
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div
//                     className="flex items-center"
//                     style={{
//                       gap: "clamp(1rem, 2vw, 8rem)",
//                       paddingTop: "clamp(1rem, 2vw, 6rem)",
//                       paddingBottom: "clamp(1em, 2vw, 6rem)",
//                     }}
//                   >
//                     <div
//                       className="flex items-center"
//                       style={{ gap: "clamp(0.5rem, 1vw, 0.6rem)" }}
//                     >
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(18px, 2.3vw, 80px)" }}
//                       >
//                         11,365
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className}`}
//                         style={{
//                           fontSize: "clamp(14px, 1.8vw, 20px)",
//                           maxWidth: "clamp(4rem, 15vw, 8.4rem)",
//                         }}
//                       >
//                         Pre-matched sets
//                       </div>
//                     </div>

//                     <div
//                       className="flex items-center"
//                       style={{ gap: "clamp(0.5rem, 1vw, 0.6rem)" }}
//                     >
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(18px, 2.3vw, 60px)" }}
//                       >
//                         1-3 hrs
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className}`}
//                         style={{
//                           fontSize: "clamp(14px, 1.5vw, 20px)",
//                           maxWidth: "clamp(8rem, 15vw, 7rem)",
//                         }}
//                       >
//                         Time saved per order
//                       </div>
//                     </div>

//                     <div
//                       className="flex items-center"
//                       style={{ gap: "clamp(0.5rem, 1vw, 0.7rem)" }}
//                     >
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(18px, 2.3vw, 60px)" }}
//                       >
//                         100%
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className}`}
//                         style={{
//                           fontSize: "clamp(14px, 1.5vw, 20px)",
//                           maxWidth: "clamp(8rem, 15vw, 5rem)",
//                         }}
//                       >
//                         Algorithm precision
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="h-0.5 relative"
//                   style={{
//                     maxWidth: "clamp(20rem, 70vw, 59rem)",
//                   }}
//                 >
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Add the CTA button */}
//               <button
//                 className={`font-medium text-black transition-colors ${cormorant.className}`}
//                 style={{
//                   marginTop: "clamp(1rem, 1vw, 6rem)",
//                   paddingTop: "clamp(0.65rem, 1.5vw, 1rem)",
//                   paddingBottom: "clamp(0.75rem, 1.5vw, 1rem)",
//                   fontSize: "clamp(20px, 2vw, 32px)",
//                 }}
//               >
//                 EXPLORE MATCHED SETS {">>"}
//               </button>
//             </div>
//           </motion.div>
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img2Y,
//               zIndex: 20,
//               opacity: img2Opacity,
//             }}
//           >
//             <motion.img
//               src="\images\map.jpg"
//               className="object-cover w-full h-full pt-25"
//               draggable={false}
//               style={{ scale: img2Scale }}
//             />

//             {/* <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-8 xl:p-6 lg:p-4"> */}
//             <div
//               className="absolute rounded-lg bg-opacity-70"
//               style={{
//                 top: "clamp(6rem, 12vw, 7rem)",
//                 left: "clamp(0.3rem, 1.4vw, 2.8rem)",
//                 maxWidth: "clamp(20rem, 80vw, 72rem)",
//                 padding: "clamp(0.5rem, 2vw, 2rem)",
//               }}
//             >
//               {/* <h1
//                 className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-10 xl:mb-10 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16`}
//               > */}
//               <h1
//                 className={`${cormorant.className} font-medium text-[#C5A769] tracking-tight`}
//                 style={{
//                   fontSize: "clamp(15px, 3.2vw, 60px)",
//                   marginBottom: "clamp(24px, 2vw, 68px)",
//                   maxWidth: "clamp(4rem, 80vw, 12rem)",
//                   lineHeight: "clamp(1.5rem, 3vw, 8rem)",
//                 }}
//               >
//                 WORLDWIDE PRESENCE
//               </h1>

//               {/* <p
//                 className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[18px] lg:text-[18px] mb-8 2xl:mb-8 xl:mb-6 lg:mb-4 text-black ${montserrat.className} tracking-wide  sm:px-0 2xl:max-w-[440px] xl:max-w-[380px]`}
//               > */}
//               <p
//                 className={`text-black mb-8 ${montserrat.className} tracking-wide sm:px-0`}
//                 style={{
//                   fontSize: "clamp(14px, 1.6vw, 23px)",
//                   marginBottom: "clamp(16px, 1.5vw, 32px)",
//                   maxWidth: "clamp(280px, 80vw, 440px)",
//                 }}
//               >
//                 Six strategic locations across three continents.
//               </p>
//               {/* <p
//                 className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full  sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[430px] 2xl:max-w-[550px] ]`}
//               > */}
//               <p
//                 className={`text-black ${montserrat.className} tracking-wide w-full sm:px-0`}
//                 style={{
//                   fontSize: "clamp(14px, 1.3vw, 23px)",
//                   maxWidth: "clamp(300px, 80vw, 520px)",
//                 }}
//               >
//                 Our global network ensures rapid fullfilment, multi-timezone
//                 support, and local expertise for jewelery partners worldwide.
//                 From Mumbai’s Production atelier to stratergic hubs across
//                 America, Europe and Asia-Pacific.
//               </p>

//               {/* <div className="mt-12 space-y-4 2xl:mt-16 xl:mt-10 lg:mt-8">
//                 <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative">
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>{" "}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-8 py-4 2xl:gap-18 xl:gap-6 lg:gap-4 2xl:py-6 xl:py-2 lg:py-3">
//                     <div className="flex flex-col items-start ">
//                       <div
//                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl items-start ${montserrat.className}`}
//                       >
//                         06
//                       </div>
//                       <div
//                         className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center`}
//                       >
//                         Global Offices
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start ">
//                       <div
//                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl ${montserrat.className}`}
//                       >
//                         72 hrs
//                       </div>
//                       <div
//                         className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base ${montserrat.className} text-center`}
//                       >
//                         Worldwide Delivery
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-start ">
//                       <div
//                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl ${montserrat.className}`}
//                       >
//                         24/7
//                       </div>
//                       <div
//                         className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center`}
//                       >
//                         Operations
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative">
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>
//               </div> */}

//               <div
//                 className="mt-12 space-y-4"
//                 style={{ marginTop: "clamp(48px, 4vw, 64px)" }}
//               >
//                 {/* Golden line above */}
//                 <div
//                   className="h-0.5 relative"
//                   style={{ maxWidth: "clamp(650px, 70vw, 1950px)" }}
//                 >
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div
//                     className="flex items-center py-4"
//                     style={{
//                       gap: "clamp(16px, 3vw, 72px)",
//                       paddingTop: "clamp(16px, 1.5vw, 24px)",
//                       paddingBottom: "clamp(16px, 1.2vw, 24px)",
//                     }}
//                   >
//                     {/* First stat */}
//                     <div className="flex flex-col items-start">
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
//                       >
//                         06
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className} text-center`}
//                         style={{
//                           fontSize: "clamp(16px, 1.2vw, 24px)",
//                           maxWidth: "clamp(120px, 12vw, 200px)",
//                         }}
//                       >
//                         Global Offices
//                       </div>
//                     </div>

//                     {/* Second stat */}
//                     <div className="flex flex-col items-start">
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
//                       >
//                         72 hrs
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className} text-center`}
//                         style={{ fontSize: "clamp(16px, 1.2vw, 24px)" }}
//                       >
//                         Worldwide Delivery
//                       </div>
//                     </div>

//                     {/* Third stat */}
//                     <div className="flex flex-col items-start">
//                       <div
//                         className={`text-[#c4aa6b] ${montserrat.className}`}
//                         style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
//                       >
//                         24/7
//                       </div>
//                       <div
//                         className={`text-black ${montserrat.className} text-center`}
//                         style={{
//                           fontSize: "clamp(16px, 1.2vw, 24px)",
//                           maxWidth: "clamp(112px, 10vw, 128px)",
//                         }}
//                       >
//                         Operations
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Golden line below */}
//                 <div
//                   className="h-0.5 relative"
//                   style={{ maxWidth: "clamp(650px, 70vw, 950px)" }}
//                 >
//                   <div
//                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
//                     style={{
//                       maskImage:
//                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
//                       WebkitMaskImage:
//                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           {/* IMAGE 3: Third image */}
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img3Y,
//               zIndex: 30,
//               opacity: img3Opacity,
//             }}
//           >
//             <motion.img
//               src="\images\jewellery8.jpg"
//               className="object-cover w-full h-full"
//               draggable={false}
//               style={{ scale: img3Scale }}
//             />
//             <div className="absolute max-w-2xl p-6 rounded-lg top-60 left-10 bg-opacity-70">
//               <h1 className="mb-4 text-5xl font-bold">Third Title</h1>
//               <p className="text-2xl">
//                 Description for the third image. This text scrolls with the
//                 third image.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cormorant, montserrat } from "../app/font";
import "./custom-breakpoint.css";

export default function CommitmentSection() {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // IMAGE 1: Zoom out from 1.3x to 1x scale
  const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]); // Fades out when image 2 appears

  const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
  const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.2, 0.45, 0.5],
    [0, 1, 1, 1]
  );

  // IMAGE 3: Similarly adjust
  const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
  const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.5, 0.8, 0.85],
    [0, 1, 1, 1]
  );

  return (
    <div className="text-white bg-black">
      <div className="flex justify-center px-4 py-20">
        <div className="max-w-5xl text-center">
          <h1
            className={`text-3xl md:text-5xl lg:text-[75px] font-medium lg:tracking-[-4px] tracking-normal mb-4 ${cormorant.className}`}
          >
            A commitment to conscience
          </h1>
          <p
            className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-5xl mx-auto ${montserrat.className}`}
          >
            Each Maitri represents an unwavering dedication to environmental{" "}
            stewardship. <br /> Certified climate-neutral, fully traceable,
            cultivated with reverence for our planet.{" "}
          </p>
        </div>
      </div>
      {/* sticky container sized tall so scrollYProgress can drive the transitions */}
      <div ref={stickyRef} className="relative h-[320vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* IMAGE 1: base layer with zoom effect */}

          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 10,
              y: "0%",
              opacity: img1Opacity,
            }}
          >
            <motion.img
              src="\images\Website-assets.jpg"
              className="object-cover w-full h-full"
              draggable={false}
              style={{ scale: img1Scale }}
            />
            <div className="absolute max-w-xs p-2 rounded-lg bg-opacity-70 top-24 sm:top-24 md:top-28 lg:top-32 xl:top-24 2xl:top-28 left-1 sm:left-2 md:left-4 lg:left-6 xl:left-8 2xl:left-11 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:p-3 md:p-4 lg:p-6 xl:p-7 2xl:p-8 First_slider_heading">
              <h1
                className={`${cormorant.className} font-medium text-black tracking-tight text-[17px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[60px] mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-12 2xl:mb-[68px]`}
              >
                PRECISION - MATCHED DIAMOND SETS
              </h1>

              <p
                className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10`}
              >
                Eliminate 1-3 hours of manual sourcing per piece
              </p>
              <p
                className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl max-w-75 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-205`}
              >
                Our proprietary algorithm analyzes 60,000+ stones to create
                perfectly matched sets for studs, tennis bracelets, eternity
                bands, and more. Ready to order guaranteed consistent.
              </p>

              <div className="mt-12 space-y-4 sm:mt-16 md:mt-20 lg:mt-12 xl:mt-8 2xl:mt-16">
                <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-244">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 py-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-1 2xl:gap-32 sm:py-6 md:py-8 lg:py-10 xl:py-6 2xl:py-10">
                    <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-2 2xl:gap-2.5">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[80px]`}
                      >
                        11,365
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-28 xl:max-w-30 2xl:max-w-[8.4rem]`}
                      >
                        Pre-matched sets
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-2.5">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
                      >
                        1-3 hrs
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-28 xl:max-w-26 2xl:max-w-28`}
                      >
                        Time saved per order
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
                      >
                        100%
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-28 lg:max-w-24 xl:max-w-20 2xl:max-w-20`}
                      >
                        Algorithm precision
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-236">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                  ></div>
                </div>
              </div>

              {/* Add the CTA button */}
              <button
                className={`font-medium text-black transition-colors ${cormorant.className} mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-5 2xl:mt-10 pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-4 pb-3 sm:pb-3.5 md:pb-4 lg:pb-4 xl:pb-4 2xl:pb-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-[32px]`}
              >
                EXPLORE MATCHED SETS {">>"}
              </button>
            </div>
          </motion.div>
          {/* <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              y: img2Y,
              zIndex: 20,
              opacity: img2Opacity,
            }}
          >
            <motion.img
              src="\images\map.jpg"
              className="object-cover w-full h-full pt-25"
              draggable={false}
              style={{ scale: img2Scale }}
            />

            <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-3 xl:p-6 lg:p-4">
              <h1
                className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-8 xl:mb-10 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16 Second_slider_heading`}
              >
                WORLDWIDE PRESENCE
              </h1>

              <p
                className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[18px] lg:text-[18px] mb-8 2xl:mb-8 xl:mb-6 lg:mb-4 text-black ${montserrat.className} tracking-wide  sm:px-0 2xl:max-w-[440px] xl:max-w-[380px]`}
              >
                Six strategic locations across three continents.
              </p>
              <p
                className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full  sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[430px] 2xl:max-w-[550px] ]`}
              >
                Our global network ensures rapid fullfilment, multi-timezone
                support, and local expertise for jewelery partners worldwide.
                From Mumbai’s Production atelier to stratergic hubs across
                America, Europe and Asia-Pacific.
              </p>

              <div className="mt-12 space-y-4 2xl:mt-16 xl:mt-10 lg:mt-8">
                <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
                    }}
                  ></div>
                </div>{" "}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8 py-4 2xl:gap-18 xl:gap-6 lg:gap-4 2xl:py-6 xl:py-2 lg:py-3">
                    <div className="flex flex-col items-start ">
                      <div
                        className={`text-[#c4aa6b] text-4xl 2xl:text-5xl xl:text-4xl lg:text-5xl items-start ${montserrat.className} second_slider_text_1`}
                      >
                        06
                      </div>
                      <div
                        className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center`}
                      >
                        Global Offices
                      </div>
                    </div>

                    <div className="flex flex-col items-start ">
                      <div
                        className={`text-[#c4aa6b] text-5xl 2xl:text-5xl xl:text-4xl lg:text-5xl ${montserrat.className}`}
                      >
                        72 hrs
                      </div>
                      <div
                        className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base ${montserrat.className} text-center`}
                      >
                        Worldwide Delivery
                      </div>
                    </div>

                    <div className="flex flex-col items-start ">
                      <div
                        className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl ${montserrat.className}`}
                      >
                        24/7
                      </div>
                      <div
                        className={`text-black text-xl 2xl:text-xl xl:text-lg lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center`}
                      >
                        Operations
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div> */}
          <motion.div
  className="absolute inset-0 w-full h-full"
  style={{
    y: img2Y,
    zIndex: 20,
    opacity: img2Opacity,
  }}
>
  <motion.img
    src="\images\map.jpg"
    className="object-cover w-full h-full pt-25"
    draggable={false}
    style={{ scale: img2Scale }}
  />

  <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-3 xl:p-6 lg:p-4 second-slider-container">
    <h1
      className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-8 xl:mb-6 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16 Second_slider_heading second-slider-title`}
    >
      WORLDWIDE PRESENCE
    </h1>

    <p
      className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[18px]  mb-8 2xl:mb-8 xl:mb-5 lg:mb-4 text-black ${montserrat.className} tracking-wide sm:px-0 2xl:max-w-[440px] xl:max-w-[380px] second-slider-text-first`}
    >
      Six strategic locations across three continents.
    </p>
    <p
      className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[350px] 2xl:max-w-[550px] second-slider-text-second`}
    >
      Our global network ensures rapid fullfilment, multi-timezone
      support, and local expertise for jewelery partners worldwide.
      From Mumbai's Production atelier to stratergic hubs across
      America, Europe and Asia-Pacific.
    </p>

    <div className="mt-12 space-y-4 2xl:mt-0 xl:mt-8 lg:mt-8 second-slider-stats">
      <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-top">
        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 py-4 2xl:gap-20 xl:gap-6 lg:gap-4 2xl:py-3 xl:py-1 lg:py-3 second-slider-stats-wrapper">
          <div className="flex flex-col items-start second-slider-stat-item">
            <div
              className={`text-[#c4aa6b] text-4xl 2xl:text-5xl xl:text-[34px] lg:text-5xl items-start ${montserrat.className} second_slider_text_1 second-slider-stat-number`}
            >
              06
            </div>
            <div
              className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center second-slider-stat-label`}
            >
              Global Offices
            </div>
          </div>

          <div className="flex flex-col items-start second-slider-stat-item">
            <div
              className={`text-[#c4aa6b] text-5xl 2xl:text-3xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
            >
              72 hrs
            </div>
            <div
              className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base ${montserrat.className} text-center second-slider-stat-label`}
            >
              Worldwide Delivery
            </div>
          </div>

          <div className="flex flex-col items-start second-slider-stat-item">
            <div
              className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
            >
              24/7
            </div>
            <div
              className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center second-slider-stat-label`}
            >
              Operations
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-bottom">
        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        ></div>
      </div>
    </div>
  </div>
</motion.div>
          {/* IMAGE 3: Third image */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              y: img3Y,
              zIndex: 30,
              opacity: img3Opacity,
            }}
          >
            <motion.img
              src="\images\jewellery8.jpg"
              className="object-cover w-full h-full"
              draggable={false}
              style={{ scale: img3Scale }}
            />
            <div className="absolute max-w-2xl p-6 rounded-lg top-60 left-10 bg-opacity-70">
              <h1 className="mb-4 text-5xl font-bold">Third Title</h1>
              <p className="text-2xl">
                Description for the third image. This text scrolls with the
                third image.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
