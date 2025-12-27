// // // "use client";
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import { useRef } from "react";
// // // import { cormorant, montserrat } from "../app/font";
// // // import "./custom-breakpoint.css";

// // // export default function CommitmentSection() {
// // //   const stickyRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: stickyRef,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   // IMAGE 1: Zoom out from 1.3x to 1x scale
// // //   const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
// // //   const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);
// // //   const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
// // //   const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
// // //   const img2Opacity = useTransform(
// // //     scrollYProgress,
// // //     [0.18, 0.2, 0.45, 0.5],
// // //     [0, 1, 1, 1]
// // //   );

// // //   // IMAGE 3: Similarly adjust
// // //   const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
// // //   const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
// // //   const img3Opacity = useTransform(
// // //     scrollYProgress,
// // //     [0.48, 0.5, 0.8, 0.85],
// // //     [0, 1, 1, 1]
// // //   );

// // //   return (
// // //     <div className="text-white bg-black">
// // //       <div className="flex justify-center px-4 py-20">
// // //         <div className="max-w-5xl text-center">
// // //           <h1
// // //             className={`text-3xl md:text-5xl lg:text-[60px] font-normal  tracking-normal mb-4 ${cormorant.className}`}
// // //           >
// // //             A commitment to conscience
// // //           </h1>
// // //           <p
// // //             className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-[788px] mx-auto ${montserrat.className}`}
// // //           >
// // //             Each Maitri represents an unwavering dedication to environmental{" "}
// // //             stewardship. Certified climate-neutral, fully traceable, cultivated
// // //             with reverence for our planet.{" "}
// // //           </p>
// // //         </div>
// // //       </div>
// // //       {/* sticky container sized tall so scrollYProgress can drive the transitions */}
// // //       <div ref={stickyRef} className="relative h-[320vh]">
// // //         <div className="sticky top-0 w-full h-screen overflow-hidden">
// // //           {/* IMAGE 1: base layer with zoom effect */}

// // //           <motion.div
// // //             className="absolute inset-0 w-full h-full"
// // //             style={{
// // //               zIndex: 10,
// // //               y: "0%",
// // //               opacity: img1Opacity,
// // //             }}
// // //           >
// // //             <motion.img
// // //               src="\images\Website-assets.jpg"
// // //               className="object-cover w-full h-full"
// // //               draggable={false}
// // //               style={{ scale: img1Scale }}
// // //             />
// // //             <div className="absolute max-w-xs p-2 rounded-lg bg-opacity-70 top-24 sm:top-24 md:top-28 lg:top-32 xl:top-24 2xl:top-28 left-1 sm:left-2 md:left-4 lg:left-6 xl:left-8 2xl:left-11 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:p-3 md:p-4 lg:p-6 xl:p-7 2xl:p-8 First_slider_heading">
// // //               <h1
// // //                 className={`${cormorant.className} font-medium text-black tracking-tight text-[17px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[60px] mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-12 2xl:mb-[68px]`}
// // //               >
// // //                 PRECISION - MATCHED DIAMOND SETS
// // //               </h1>

// // //               <p
// // //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10`}
// // //               >
// // //                 Eliminate 1-3 hours of manual sourcing per piece
// // //               </p>
// // //               <p
// // //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl max-w-75 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-205`}
// // //               >
// // //                 Our proprietary algorithm analyzes 60,000+ stones to create
// // //                 perfectly matched sets for studs, tennis bracelets, eternity
// // //                 bands, and more. Ready to order guaranteed consistent.
// // //               </p>

// // //               <div className="mt-12 space-y-4 sm:mt-16 md:mt-20 lg:mt-12 xl:mt-8 2xl:mt-16">
// // //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-244">
// // //                   <div
// // //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// // //                     style={{
// // //                       maskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// // //                       WebkitMaskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// // //                     }}
// // //                   ></div>
// // //                 </div>

// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-4 py-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-1 2xl:gap-32 sm:py-6 md:py-8 lg:py-10 xl:py-6 2xl:py-10">
// // //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-2 2xl:gap-2.5">
// // //                       <div
// // //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[80px]`}
// // //                       >
// // //                         11,365
// // //                       </div>
// // //                       <div
// // //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-28 xl:max-w-30 2xl:max-w-[8.4rem]`}
// // //                       >
// // //                         Pre-matched sets
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-2.5">
// // //                       <div
// // //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// // //                       >
// // //                         1-3 hrs
// // //                       </div>
// // //                       <div
// // //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-28 xl:max-w-26 2xl:max-w-28`}
// // //                       >
// // //                         Time saved per order
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
// // //                       <div
// // //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// // //                       >
// // //                         100%
// // //                       </div>
// // //                       <div
// // //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-28 lg:max-w-24 xl:max-w-20 2xl:max-w-20`}
// // //                       >
// // //                         Algorithm precision
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-236">
// // //                   <div
// // //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// // //                     style={{
// // //                       maskImage:
// // //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// // //                       WebkitMaskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// // //                     }}
// // //                   ></div>
// // //                 </div>
// // //               </div>

// // //               {/* Add the CTA button */}
// // //               <button
// // //                 className={`font-medium text-black transition-colors ${cormorant.className} mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-5 2xl:mt-10 pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-4 pb-3 sm:pb-3.5 md:pb-4 lg:pb-4 xl:pb-4 2xl:pb-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-[32px]`}
// // //               >
// // //                 EXPLORE MATCHED SETS {">>"}
// // //               </button>
// // //             </div>
// // //           </motion.div>

// // //           <motion.div
// // //             className="absolute inset-0 w-full h-full"
// // //             style={{
// // //               y: img2Y,
// // //               zIndex: 20,
// // //               opacity: img2Opacity,
// // //             }}
// // //           >
// // //             <motion.img
// // //               src="\images\map.jpg"
// // //               className="object-cover w-full h-full "
// // //               draggable={false}
// // //               style={{ scale: img2Scale }}
// // //             />

// // //             <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-3 xl:p-6 lg:p-4 second-slider-container">
// // //               <h1
// // //                 className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-8 xl:mb-6 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16 Second_slider_heading second-slider-title`}
// // //               >
// // //                 WORLDWIDE PRESENCE
// // //               </h1>

// // //               <p
// // //                 className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[18px]  mb-8 2xl:mb-8 xl:mb-5 lg:mb-4 text-black ${montserrat.className} tracking-wide sm:px-0 2xl:max-w-[440px] xl:max-w-[380px] second-slider-text-first`}
// // //               >
// // //                 Six strategic locations across three continents.
// // //               </p>
// // //               <p
// // //                 className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[350px] 2xl:max-w-[550px] second-slider-text-second`}
// // //               >
// // //                 Our global network ensures rapid fullfilment, multi-timezone
// // //                 support, and local expertise for jewelery partners worldwide.
// // //                 From Mumbai's Production atelier to stratergic hubs across
// // //                 America, Europe and Asia-Pacific.
// // //               </p>

// // //               <div className="mt-12 space-y-4 2xl:mt-0 xl:mt-8 lg:mt-8 second-slider-stats">
// // //                 <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-top">
// // //                   <div
// // //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// // //                     style={{
// // //                       maskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// // //                       WebkitMaskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// // //                     }}
// // //                   ></div>
// // //                 </div>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-8 py-4 2xl:gap-20 xl:gap-6 lg:gap-4 2xl:py-3 xl:py-1 lg:py-3 second-slider-stats-wrapper">
// // //                     <div className="flex flex-col items-start second-slider-stat-item">
// // //                       <div
// // //                         className={`text-[#c4aa6b] text-4xl 2xl:text-5xl xl:text-[34px] lg:text-5xl items-start ${montserrat.className} second_slider_text_1 second-slider-stat-number`}
// // //                       >
// // //                         06
// // //                       </div>
// // //                       <div
// // //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center second-slider-stat-label`}
// // //                       >
// // //                         Global Offices
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex flex-col items-start second-slider-stat-item">
// // //                       <div
// // //                         className={`text-[#c4aa6b] text-5xl 2xl:text-3xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// // //                       >
// // //                         72 hrs
// // //                       </div>
// // //                       <div
// // //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base ${montserrat.className} text-center second-slider-stat-label`}
// // //                       >
// // //                         Worldwide Delivery
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex flex-col items-start second-slider-stat-item">
// // //                       <div
// // //                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// // //                       >
// // //                         24/7
// // //                       </div>
// // //                       <div
// // //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center second-slider-stat-label`}
// // //                       >
// // //                         Operations
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-bottom">
// // //                   <div
// // //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// // //                     style={{
// // //                       maskImage:
// // //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// // //                       WebkitMaskImage:
// // //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// // //                     }}
// // //                   ></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //           {/* IMAGE 3: Third image */}
// // //           <motion.div
// // //             className="absolute inset-0 w-full h-full"
// // //             style={{
// // //               y: img3Y,
// // //               zIndex: 30,
// // //               opacity: img3Opacity,
// // //             }}
// // //           >
// // //             <motion.img
// // //               src="\images\jewellery8.jpg"
// // //               className="object-cover w-full h-full"
// // //               draggable={false}
// // //               style={{ scale: img3Scale }}
// // //             />
// // //             <div className="absolute max-w-2xl p-6 rounded-lg top-60 left-10 bg-opacity-70">
// // //               <h1 className="mb-4 text-5xl font-bold">Third Title</h1>
// // //               <p className="text-2xl">
// // //                 Description for the third image. This text scrolls with the
// // //                 third image.
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";
// // import { cormorant, montserrat } from "../app/font";
// // import "./custom-breakpoint.css";

// // export default function CommitmentSection() {
// //   const stickyRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: stickyRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // IMAGE 1: Zoom out from 1.3x to 1x scale
// //   const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
// //   const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);
// //   const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
// //   const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
// //   const img2Opacity = useTransform(
// //     scrollYProgress,
// //     [0.18, 0.2, 0.45, 0.5],
// //     [0, 1, 1, 1]
// //   );

// //   // IMAGE 3: Similarly adjust
// //   const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
// //   const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
// //   const img3Opacity = useTransform(
// //     scrollYProgress,
// //     [0.48, 0.5, 0.8, 0.85],
// //     [0, 1, 1, 1]
// //   );

// //   // IMAGE 4: Fourth slider
// //   const img4Y = useTransform(scrollYProgress, [0.85, 1], ["120%", "0%"]);
// //   const img4Scale = useTransform(scrollYProgress, [0.85, 1], [1.5, 1]);
// //   const img4Opacity = useTransform(
// //     scrollYProgress,
// //     [0.83, 0.85, 1, 1],
// //     [0, 1, 1, 1]
// //   );

// //   return (
// //     <div className="text-white bg-black">
// //       <div className="flex justify-center px-4 py-20">
// //         <div className="max-w-5xl text-center">
// //           <h1
// //             className={`text-3xl md:text-5xl lg:text-[60px] font-normal  tracking-normal mb-4 ${cormorant.className}`}
// //           >
// //             A commitment to conscience
// //           </h1>
// //           <p
// //             className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-[788px] mx-auto ${montserrat.className}`}
// //           >
// //             Each Maitri represents an unwavering dedication to environmental{" "}
// //             stewardship. Certified climate-neutral, fully traceable, cultivated
// //             with reverence for our planet.{" "}
// //           </p>
// //         </div>
// //       </div>
// //       {/* sticky container sized tall so scrollYProgress can drive the transitions */}
// //       <div ref={stickyRef} className="relative h-[420vh]">
// //         <div className="sticky top-0 w-full h-screen overflow-hidden">
// //           {/* IMAGE 1: base layer with zoom effect */}

// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               zIndex: 10,
// //               y: "0%",
// //               opacity: img1Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\Website-assets.webp"
// //               className="object-cover w-full h-full"
// //               draggable={false}
// //               style={{ scale: img1Scale }}
// //                 loading="lazy"
// //               decoding="async"
// //             />
// //             <div className="absolute max-w-xs p-2 rounded-lg bg-opacity-70 top-24 sm:top-24 md:top-28 lg:top-32 xl:top-24 2xl:top-28 left-1 sm:left-2 md:left-4 lg:left-6 xl:left-8 2xl:left-11 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:p-3 md:p-4 lg:p-6 xl:p-7 2xl:p-8 First_slider_heading">
// //               <h1
// //                 className={`${cormorant.className} font-medium text-black tracking-tight text-[17px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[60px] mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-12 2xl:mb-[68px]`}
// //               >
// //                 PRECISION - MATCHED DIAMOND SETS
// //               </h1>

// //               <p
// //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10`}
// //               >
// //                 Eliminate 1-3 hours of manual sourcing per piece
// //               </p>
// //               <p
// //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl max-w-75 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-205`}
// //               >
// //                 Our proprietary algorithm analyzes 60,000+ stones to create
// //                 perfectly matched sets for studs, tennis bracelets, eternity
// //                 bands, and more. Ready to order guaranteed consistent.
// //               </p>

// //               <div className="mt-12 space-y-4 sm:mt-16 md:mt-20 lg:mt-12 xl:mt-8 2xl:mt-16">
// //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-244">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>

// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-4 py-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-1 2xl:gap-32 sm:py-6 md:py-8 lg:py-10 xl:py-6 2xl:py-10">
// //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-2 2xl:gap-2.5">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[80px]`}
// //                       >
// //                         11,365
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-28 xl:max-w-30 2xl:max-w-[8.4rem]`}
// //                       >
// //                         Pre-matched sets
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-2.5">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// //                       >
// //                         1-3 hrs
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-28 xl:max-w-26 2xl:max-w-28`}
// //                       >
// //                         Time saved per order
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// //                       >
// //                         100%
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-28 lg:max-w-24 xl:max-w-20 2xl:max-w-20`}
// //                       >
// //                         Algorithm precision
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-236">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //               </div>

// //               {/* Add the CTA button */}
// //               <button
// //                 className={`font-medium text-black transition-colors ${cormorant.className} mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-5 2xl:mt-10 pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-4 pb-3 sm:pb-3.5 md:pb-4 lg:pb-4 xl:pb-4 2xl:pb-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-[32px]`}
// //               >
// //                 EXPLORE MATCHED SETS {">>"}
// //               </button>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               y: img2Y,
// //               zIndex: 20,
// //               opacity: img2Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\map.webp"
// //               className="object-cover w-full h-full "
// //               draggable={false}
// //               style={{ scale: img2Scale }}
// //             />

// //             {/* <motion.img
// //               src="/images/map1.jpg"
// //               className="absolute inset-0 block object-contain w-full h-full lg:hidden"
// //               draggable={false}
// //             /> */}

// //             <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-3 xl:p-6 lg:p-4 second-slider-container">
// //               <h1
// //                 className={`text-[17px]  2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-8 xl:mb-6 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16 Second_slider_heading second-slider-title`}
// //               >
// //                 WORLDWIDE PRESENCE
// //               </h1>

// //               <p
// //                 className={`text-[14px] sm:text-[16px]   xl:text-[16px] lg:text-[18px]  mb-8 2xl:mb-8 xl:mb-5 lg:mb-4 text-black ${montserrat.className} tracking-wide sm:px-0 2xl:max-w-[440px] xl:max-w-[380px] second-slider-text-first`}
// //               >
// //                 Six strategic locations across three continents.
// //               </p>
// //               <p
// //                 className={`text-[14px] sm:text-[16px]   xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[350px] 2xl:max-w-[550px] second-slider-text-second`}
// //               >
// //                 Our global network ensures rapid fullfilment, multi-timezone
// //                 support, and local expertise for jewelery partners worldwide.
// //                 From Mumbai's Production atelier to stratergic hubs across
// //                 America, Europe and Asia-Pacific.
// //               </p>

// //               <div className="mt-12 space-y-4 2xl:mt-0 xl:mt-8 lg:mt-8 second-slider-stats ">
// //                 <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-top">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-8 py-4 2xl:gap-20 xl:gap-6 lg:gap-4 2xl:py-3 xl:py-1 lg:py-3 second-slider-stats-wrapper">
// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-4xl 2xl:text-5xl xl:text-[34px] lg:text-5xl items-start ${montserrat.className} second_slider_text_1 second-slider-stat-number`}
// //                       >
// //                         06
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Global Offices
// //                       </div>
// //                     </div>

// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-5xl 2xl:text-3xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// //                       >
// //                         72 hrs
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl  2xl:text-xl xl:text-[14px] lg:text-base ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Worldwide Delivery
// //                       </div>
// //                     </div>

// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl  xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// //                       >
// //                         24/7
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px]  lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Operations
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-bottom">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>
// //           {/* IMAGE 3: Third image */}
// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               y: img3Y,
// //               zIndex: 30,
// //               opacity: img3Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\jewellery8.jpg"
// //               className="object-cover w-full h-full"
// //               draggable={false}
// //               style={{ scale: img3Scale }}
// //             />
// //             <div className="absolute max-w-2xl p-6 rounded-lg top-60 left-10 bg-opacity-70">
// //               <h1 className="mb-4 text-5xl font-bold">Third Title</h1>
// //               <p className="text-2xl">
// //                 Description for the third image. This text scrolls with the
// //                 third image.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* IMAGE 4: Fourth image */}
// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               y: img4Y,
// //               zIndex: 40,
// //               opacity: img4Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\Website-assets.jpg"
// //               className="object-cover w-full h-full"
// //               draggable={false}
// //               style={{ scale: img4Scale }}
// //             />
// //             <div className="absolute max-w-2xl p-6 text-black rounded-lg top-60 left-10 bg-opacity-70">
// //               <h1 className="mb-4 text-5xl font-bold">Fourth Title</h1>
// //               <p className="text-2xl">
// //                 Description for the fourth image. This text scrolls with the
// //                 fourth image.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";
// // import { cormorant, montserrat } from "../app/font";
// // import "./custom-breakpoint.css";

// // export default function CommitmentSection() {
// //   const stickyRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: stickyRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // IMAGE 1: Zoom out from 1.3x to 1x scale
// //   const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
// //   const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);
// //   const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
// //   const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
// //   const img2Opacity = useTransform(
// //     scrollYProgress,
// //     [0.18, 0.2, 0.45, 0.5],
// //     [0, 1, 1, 1]
// //   );

// //   // IMAGE 3: Similarly adjust
// //   const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
// //   const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
// //   const img3Opacity = useTransform(
// //     scrollYProgress,
// //     [0.48, 0.5, 0.8, 0.85],
// //     [0, 1, 1, 1]
// //   );

// //   return (
// //     <div className="text-white bg-black">
// //       <div className="flex justify-center px-4 py-20">
// //         <div className="max-w-5xl text-center">
// //           <h1
// //             className={`text-3xl md:text-5xl lg:text-[60px] font-normal  tracking-normal mb-4 ${cormorant.className}`}
// //           >
// //             A commitment to conscience
// //           </h1>
// //           <p
// //             className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-[788px] mx-auto ${montserrat.className}`}
// //           >
// //             Each Maitri represents an unwavering dedication to environmental{" "}
// //             stewardship. Certified climate-neutral, fully traceable, cultivated
// //             with reverence for our planet.{" "}
// //           </p>
// //         </div>
// //       </div>
// //       {/* sticky container sized tall so scrollYProgress can drive the transitions */}
// //       <div ref={stickyRef} className="relative h-[320vh]">
// //         <div className="sticky top-0 w-full h-screen overflow-hidden">
// //           {/* IMAGE 1: base layer with zoom effect */}

// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               zIndex: 10,
// //               y: "0%",
// //               opacity: img1Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\Website-assets.jpg"
// //               className="object-cover w-full h-full"
// //               draggable={false}
// //               style={{ scale: img1Scale }}
// //             />
// //             <div className="absolute max-w-xs p-2 rounded-lg bg-opacity-70 top-24 sm:top-24 md:top-28 lg:top-32 xl:top-24 2xl:top-28 left-1 sm:left-2 md:left-4 lg:left-6 xl:left-8 2xl:left-11 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl sm:p-3 md:p-4 lg:p-6 xl:p-7 2xl:p-8 First_slider_heading">
// //               <h1
// //                 className={`${cormorant.className} font-medium text-black tracking-tight text-[17px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[60px] mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-12 2xl:mb-[68px]`}
// //               >
// //                 PRECISION - MATCHED DIAMOND SETS
// //               </h1>

// //               <p
// //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10`}
// //               >
// //                 Eliminate 1-3 hours of manual sourcing per piece
// //               </p>
// //               <p
// //                 className={`text-black ${montserrat.className} tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] 2xl:text-2xl max-w-75 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-205`}
// //               >
// //                 Our proprietary algorithm analyzes 60,000+ stones to create
// //                 perfectly matched sets for studs, tennis bracelets, eternity
// //                 bands, and more. Ready to order guaranteed consistent.
// //               </p>

// //               <div className="mt-12 space-y-4 sm:mt-16 md:mt-20 lg:mt-12 xl:mt-8 2xl:mt-16">
// //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-244">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>

// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-4 py-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-1 2xl:gap-32 sm:py-6 md:py-8 lg:py-10 xl:py-6 2xl:py-10">
// //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-2 2xl:gap-2.5">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[80px]`}
// //                       >
// //                         11,365
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-28 xl:max-w-30 2xl:max-w-[8.4rem]`}
// //                       >
// //                         Pre-matched sets
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-2.5">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// //                       >
// //                         1-3 hrs
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-28 xl:max-w-26 2xl:max-w-28`}
// //                       >
// //                         Time saved per order
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3">
// //                       <div
// //                         className={`text-[#c4aa6b] ${montserrat.className} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[60px]`}
// //                       >
// //                         100%
// //                       </div>
// //                       <div
// //                         className={`text-black ${montserrat.className} text-sm sm:text-base md:text-base lg:text-lg xl:text-[14px] 2xl:text-xl max-w-32 sm:max-w-36 md:max-w-28 lg:max-w-24 xl:max-w-20 2xl:max-w-20`}
// //                       >
// //                         Algorithm precision
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="h-0.5 relative max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-[660px] 2xl:max-w-236">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //               </div>

// //               {/* Add the CTA button */}
// //               <button
// //                 className={`font-medium text-black transition-colors ${cormorant.className} mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-5 2xl:mt-10 pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-4 xl:pt-4 pb-3 sm:pb-3.5 md:pb-4 lg:pb-4 xl:pb-4 2xl:pb-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-[32px]`}
// //               >
// //                 EXPLORE MATCHED SETS {">>"}
// //               </button>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               y: img2Y,
// //               zIndex: 20,
// //               opacity: img2Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\map.jpg"
// //               className="object-cover w-full h-full "
// //               draggable={false}
// //               style={{ scale: img2Scale }}
// //             />

// //             <div className="absolute left-0 max-w-5xl p-2 rounded-lg top-30 2xl:top-30 xl:top-28 lg:top-30 2xl:left-10 xl:left-8 lg:left-6 bg-opacity-70 2xl:p-3 xl:p-6 lg:p-4 second-slider-container">
// //               <h1
// //                 className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-8 xl:mb-6 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16 Second_slider_heading second-slider-title`}
// //               >
// //                 WORLDWIDE PRESENCE
// //               </h1>

// //               <p
// //                 className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[18px]  mb-8 2xl:mb-8 xl:mb-5 lg:mb-4 text-black ${montserrat.className} tracking-wide sm:px-0 2xl:max-w-[440px] xl:max-w-[380px] second-slider-text-first`}
// //               >
// //                 Six strategic locations across three continents.
// //               </p>
// //               <p
// //                 className={`text-[14px] sm:text-[16px]  xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[350px] 2xl:max-w-[550px] second-slider-text-second`}
// //               >
// //                 Our global network ensures rapid fullfilment, multi-timezone
// //                 support, and local expertise for jewelery partners worldwide.
// //                 From Mumbai's Production atelier to stratergic hubs across
// //                 America, Europe and Asia-Pacific.
// //               </p>

// //               <div className="mt-12 space-y-4 2xl:mt-0 xl:mt-8 lg:mt-8 second-slider-stats">
// //                 <div className="max-w-[800px] 2xl:max-w-[1950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-top">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 60%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 0%, black 50%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-8 py-4 2xl:gap-20 xl:gap-6 lg:gap-4 2xl:py-3 xl:py-1 lg:py-3 second-slider-stats-wrapper">
// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-4xl 2xl:text-5xl xl:text-[34px] lg:text-5xl items-start ${montserrat.className} second_slider_text_1 second-slider-stat-number`}
// //                       >
// //                         06
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-38 2xl:max-w-50 xl:max-w-32 ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Global Offices
// //                       </div>
// //                     </div>

// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-5xl 2xl:text-3xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// //                       >
// //                         72 hrs
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Worldwide Delivery
// //                       </div>
// //                     </div>

// //                     <div className="flex flex-col items-start second-slider-stat-item">
// //                       <div
// //                         className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-[34px] lg:text-5xl ${montserrat.className} second-slider-stat-number`}
// //                       >
// //                         24/7
// //                       </div>
// //                       <div
// //                         className={`text-black text-xl 2xl:text-xl xl:text-[14px] lg:text-base max-w-32 2xl:max-w-32 xl:max-w-28 ${montserrat.className} text-center second-slider-stat-label`}
// //                       >
// //                         Operations
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="max-w-[800px] 2xl:max-w-[950px] xl:max-w-[700px] lg:max-w-[650px] h-0.5 relative second-slider-line-bottom">
// //                   <div
// //                     className="absolute inset-0 bg-linear-to-r from-transparent via-[#c4aa6b] to-transparent"
// //                     style={{
// //                       maskImage:
// //                         "linear-gradient(to right, transparent 10%, black 20%, black 80%, transparent 100%)",
// //                       WebkitMaskImage:
// //                         "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
// //                     }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>
// //           {/* IMAGE 3: Third image */}
// //           <motion.div
// //             className="absolute inset-0 w-full h-full"
// //             style={{
// //               y: img3Y,
// //               zIndex: 30,
// //               opacity: img3Opacity,
// //             }}
// //           >
// //             <motion.img
// //               src="\images\jewellery8.jpg"
// //               className="object-cover w-full h-full"
// //               draggable={false}
// //               style={{ scale: img3Scale }}
// //             />
// //             <div className="absolute max-w-2xl p-6 rounded-lg top-60 left-10 bg-opacity-70">
// //               <h1 className="mb-4 text-5xl font-bold">Third Title</h1>
// //               <p className="text-2xl">
// //                 Description for the third image. This text scrolls with the
// //                 third image.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cormorant, montserrat } from "../app/font";



export default function CommitmentSection() {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // IMAGE 1: Zoom out from 1.3x to 1x scale
  const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);

  // IMAGE 2 (Website-assets) NOW IN SECOND POSITION
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

  // IMAGE 4 (map.webp) NOW IN FOURTH POSITION
  const img4Y = useTransform(scrollYProgress, [0.85, 1], ["120%", "0%"]);
  const img4Scale = useTransform(scrollYProgress, [0.85, 1], [1.5, 1]);
  const img4Opacity = useTransform(
    scrollYProgress,
    [0.83, 0.85, 1, 1],
    [0, 1, 1, 1]
  );

  return (
    <div className="text-white bg-black">
      <div className="flex justify-center px-4 py-20">
        <div className="max-w-5xl text-center">
          <h1
            className={`text-3xl md:text-5xl lg:text-[60px] font-normal  tracking-normal mb-4 ${cormorant.className}`}
          >
            A commitment to conscience
          </h1>
          <p
            className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-[788px] mx-auto ${montserrat.className}`}
          >
            Each Maitri represents an unwavering dedication to environmental{" "}
            stewardship. Certified climate-neutral, fully traceable, cultivated
            with reverence for our planet.{" "}
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen">
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 600px)"
            srcSet="/images/mobileSustain.png"
          />
          {/* Tablet */}
          <source
            media="(min-width: 601px) and (max-width: 768px)"
            srcSet="/images/SustainableTABLET.png"
          />
          {/* Large screens */}
          <img
            src="/images/Section.png"
            className="object-fill w-full h-full"
            alt="Full screen section"
            draggable={false}
            loading="lazy"
          />
        </picture>
      </div>
      {/* sticky container sized tall so scrollYProgress can drive the transitions */}
      <div ref={stickyRef} className="relative h-[420vh]">
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
            {/* Mobile Image */}
            <motion.img
              src="/images/USP1MOBILE.png"
              className="block sm:hidden object-cover w-full h-full"
              draggable={false}
              style={{ scale: img1Scale }}
              loading="lazy"
            />

            {/* Desktop Image */}
            <motion.img
              src="/images/USP1LAPTOP.png"
              className="hidden lg:block object-cover w-full h-full"
              draggable={false}
              style={{ scale: img1Scale }}
              loading="lazy"
            />

            {/* Text Content */}
            <div
              className={`absolute p-6 text-white rounded-lg lg:top-60 top-15 lg:left-20 bg-opacity-70 `}
            >
              <h3 className={`mb-4 md:mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal ${cormorant.className}`}>
                We Grow Every Diamond,
                <br />
                You Get Every Advantage
              </h3>

              <p
                className={`text-sm md:text-lg lg:text-xl mt-4 text-[#C6A867] max-w-xl ${montserrat.className}`}
              >
                From our Mumbai laboratory to your atelier, complete control
                over every atom means absolute consistency in every stone.
              </p>
            </div>
          </motion.div>

          {/* IMAGE 2: Website-assets (SECOND POSITION) */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              y: img2Y,
              zIndex: 20,
              opacity: img2Opacity,
            }}
          >
            {/* Scale applied only to image container */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ scale: img2Scale }}
            >
              <picture>
                {/* Mobile */}
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/USP-3 1.png"
                />
                {/* public\images\ */}
                {/* Desktop */}
                <img
                  src="/images/roseUSD.jpg"
                  className="object-cover w-full h-full"
                  draggable={false}
                  loading="lazy"
                  alt="Diamond jewelry collection"
                />
              </picture>
            </motion.div>

            {/* Text stays fixed (no scale) */}
            <div
              className={`absolute p-4 md:p-6 text-black rounded-lg 
                top-10 left-4 sm:top-20 sm:left-10 md:top-40 md:left-20 lg:top-45 lg:left-20 
                  ${cormorant.className}`}
            >
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-[59px]  mt-4 md:mt-9  max-w-[290px] sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl  ${cormorant.className}`}
              >
                Empowering a sustainable future:
              </p>
              <h1 className="mb-4 md:mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[75px] mx-w-[150px] ">
                Maitri Lab-Grown Diamonds and <br></br>
                ESG Commitments
              </h1>
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl  xl:text-[23px] mt-4 md:mt-9 text-[#C6A867] max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl  ${montserrat.className}`}
              >
                Embracing ESG principles, our lab-grown diamonds redefine luxury
                with sustainability at its core.
              </p>
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
            {/* Image container with scale */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ scale: img3Scale }}
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/USP-4MOBILE.png"
                />
                <img
                  src="/images/Website-assets.jpg"
                  className="object-cover w-full h-full"
                  draggable={false}
                  loading="lazy"
                  alt="Diamond showcase"
                />
              </picture>
            </motion.div>

            {/* Text without scale - positioned separately */}
            <div
              className={`absolute p-4 md:p-6 text-black rounded-lg 
                top-10 left-4 sm:top-20 sm:left-10 md:top-40 md:left-20 lg:top-60 lg:left-25 
             ${cormorant.className}`}
            >
              <h1 className="mb-4 md:mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mx-w-[150px] ">
                We Grow Every Diamond,
                <br />
                You Get Every Advantage
              </h1>
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl  mt-4 md:mt-9 text-[#C6A867] max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-xl ${montserrat.className}`}
              >
                From our Mumbai laboratory to your atelier, complete control
                over every atom means absolute consistency in every stone.
              </p>
            </div>
          </motion.div>

          {/* IMAGE 4: map.webp (FOURTH POSITION) */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              y: img4Y,
              zIndex: 40,
              opacity: img4Opacity,
            }}
          >
            <motion.img
              src="/images/worldMap.png"
              className="object-fill w-full h-full "
              draggable={false}
              style={{ scale: img4Scale }}
            />

            <div
              className={`
    absolute
    p-6
    text-black
    rounded-lg
    bg-opacity-70
    ${cormorant.className}

    /* Mobile / Tablet */
    top-100 left-4 text-left

    /* Laptop & Desktop */
    lg:bottom-10
    lg:top-auto
    lg:left-1/2
    lg:-translate-x-1/2
    lg:text-center
    lg:max-w-5xl
  `}
            >
              <h1 className="text-2xl lg:text-6xl lg:mb-8">
                Always Where You Are !
              </h1>

              <p
                className={`text-base lg:text-2xl text-[#C6A867] ${montserrat.className}`}
              >
                Infrastructure behind excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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

//   // IMAGE 1: Zoom out from 1.2x to 1x scale
//   const img1Scale = useTransform(scrollYProgress, [0, 0.16], [1.2, 1]);
//   const img1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.32], [1, 1, 0]);

//   // NEW IMAGE 1.5: Between first and second
//   const img1_5Y = useTransform(scrollYProgress, [0.16, 0.4], ["120%", "0%"]);
//   const img1_5Scale = useTransform(scrollYProgress, [0.16, 0.4], [1.5, 1]);
//   const img1_5Opacity = useTransform(
//     scrollYProgress,
//     [0.14, 0.16, 0.4, 0.56],
//     [0, 1, 1, 0]
//   );

//   // IMAGE 2: Adjusted timing
//   const img2Y = useTransform(scrollYProgress, [0.4, 0.64], ["120%", "0%"]);
//   const img2Scale = useTransform(scrollYProgress, [0.4, 0.64], [1.5, 1]);
//   const img2Opacity = useTransform(
//     scrollYProgress,
//     [0.38, 0.4, 0.64, 0.8],
//     [0, 1, 1, 0]
//   );

//   // IMAGE 3: Adjusted timing
//   const img3Y = useTransform(scrollYProgress, [0.64, 0.88], ["120%", "0%"]);
//   const img3Scale = useTransform(scrollYProgress, [0.64, 0.88], [1.5, 1]);
//   const img3Opacity = useTransform(
//     scrollYProgress,
//     [0.62, 0.64, 0.88, 1],
//     [0, 1, 1, 0]
//   );

//   // IMAGE 4: Adjusted timing
//   const img4Y = useTransform(scrollYProgress, [0.88, 1], ["120%", "0%"]);
//   const img4Scale = useTransform(scrollYProgress, [0.88, 1], [1.5, 1]);
//   const img4Opacity = useTransform(
//     scrollYProgress,
//     [0.86, 0.88, 1, 1],
//     [0, 1, 1, 1]
//   );

//   return (
//     <div className="text-white bg-black">
//        <div className="flex justify-center px-4 py-20">
//      <div className="max-w-5xl text-center">
//       <h1
//         className={`text-3xl md:text-5xl lg:text-[60px] font-normal  tracking-normal mb-4 ${cormorant.className}`}
//       >
//         A commitment to conscience
//       </h1>
//       <p
//         className={`text-md md:text-[18px] lg:text-[20px] font-normal text-[#FFFFFF] max-w-[788px] mx-auto ${montserrat.className}`}
//       >
//         Each Maitri represents an unwavering dedication to environmental{" "}
//         stewardship. Certified climate-neutral, fully traceable, cultivated
//         with reverence for our planet.{" "}
//       </p>
//     </div>
//   </div>

//          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen">
//          <picture>
//            {/* Mobile */}
//           <source
//             media="(max-width: 600px)"
//             srcSet="/images/mobileSustain.png"
//           />
//           {/* Tablet */}
//           <source
//             media="(min-width: 601px) and (max-width: 768px)"
//             srcSet="/images/SustainableTABLET.png"
//           />
//           {/* Large screens */}
//           <img
//             src="/images/Section.png"
//             className="object-cover w-full h-full"
//             alt="Full screen section"
//             draggable={false}
//             loading="lazy"
//           />
//         </picture>
//       </div>

//       {/* Increased height to accommodate 5 images */}
//       <div ref={stickyRef} className="relative h-[520vh]">
//         <div className="sticky top-0 w-full h-screen overflow-hidden">
//           {/* IMAGE 1 */}
//                <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               zIndex: 10,
//               y: "0%",
//               opacity: img1Opacity,
//             }}
//           >
//             {/* Mobile Image */}
//             <motion.img
//               src="/images/USP1MOBILE.png"
//               className="block sm:hidden object-cover w-full h-full"
//               draggable={false}
//               style={{ scale: img1Scale }}
//               loading="lazy"
//             />

//             <motion.img
//               src="/images/USP1LAPTOP.png"
//               className="hidden lg:block object-cover w-full h-full"
//               draggable={false}
//               style={{ scale: img1Scale }}
//               loading="lazy"
//             />

//             {/* Text Content */}
//             <div
//               className={`absolute p-6 text-white rounded-lg lg:top-60 top-15 lg:left-10 bg-opacity-70 ${cormorant.className}`}
//             >
//               <h1 className="mb-4 md:mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
//                 We Grow Every Diamond,
//                 <br />
//                 You Get Every Advantage
//               </h1>

//               <p
//                 className={`text-sm md:text-lg lg:text-xl mt-4 text-[#C6A867] max-w-2xl ${montserrat.className}`}
//               >
//                 From our Mumbai laboratory to your atelier, complete control
//                 over every atom means absolute consistency in every stone.
//               </p>
//             </div>
//           </motion.div>

//           {/* NEW IMAGE 1.5 - Between first and second */}
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img1_5Y,
//               zIndex: 15,
//               opacity: img1_5Opacity,
//             }}
//           >
//             <motion.div
//               className="absolute inset-0 w-full h-full"
//               style={{ scale: img1_5Scale }}
//             >
//               <img
//                 src="/images/roseUSD.jpg"
//                 className="object-cover w-full h-full"
//                 draggable={false}
//                 loading="lazy"
//                 alt="New showcase"
//               />
//             </motion.div>

//             <div className="absolute p-4 md:p-6 text-white rounded-lg top-10 left-4 sm:top-20 sm:left-10 md:top-40 md:left-20 lg:top-60 lg:left-10">
//               <h1 className="mb-4 md:mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl max-w-[150px]">
//                 NEW SLIDE TITLE
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-9 text-yellow-600 max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-2xl">
//                 Your new content goes here. Customize this text and image for
//                 your needs.
//               </p>
//             </div>
//           </motion.div>

//           {/* IMAGE 2 (World Map) */}

//                    <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img2Y,
//               zIndex: 20,
//               opacity: img2Opacity,
//             }}
//           >
//             <motion.img
//               src="/images/worldMap.png"
//               className="object-fill w-full h-full "
//               draggable={false}
//               style={{ scale: img2Scale }}
//             />

//             <div
//               className={`
//     absolute
//     p-6
//     text-black
//     rounded-lg
//     bg-opacity-70
//     ${cormorant.className}

//     /* Mobile / Tablet */
//     top-90 left-4 text-left

//     /* Laptop & Desktop */
//     lg:bottom-16
//     lg:top-auto
//     lg:left-1/2
//     lg:-translate-x-1/2
//     lg:text-center
//     lg:max-w-5xl
//   `}
//             >
//               <h1 className="text-2xl lg:text-7xl lg:mb-8">
//                 Always Where You Are !
//               </h1>

//               <p
//                 className={`text-base lg:text-2xl text-[#C6A867] ${montserrat.className}`}
//               >
//                 Infrastructure behind excellence
//               </p>
//             </div>
//           </motion.div>

//           {/* IMAGE 3 */}
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img3Y,
//               zIndex: 30,
//               opacity: img3Opacity,
//             }}
//           >
//             <motion.div
//               className="absolute inset-0 w-full h-full"
//               style={{ scale: img3Scale }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200"
//                 className="object-fill w-full h-full"
//                 draggable={false}
//                 loading="lazy"
//                 alt="Diamond showcase 3"
//               />
//             </motion.div>

//             <div className="absolute p-4 md:p-6 text-black rounded-lg top-10 left-4 sm:top-20 sm:left-10 md:top-40 md:left-20 lg:top-60 lg:left-10">
//               <h1 className="mb-4 md:mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl max-w-[150px]">
//                 Precision & Quality
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-9 text-yellow-600 max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-2xl">
//                 Every diamond crafted with meticulous attention to detail.
//               </p>
//             </div>
//           </motion.div>

//           {/* IMAGE 4 */}
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             style={{
//               y: img4Y,
//               zIndex: 40,
//               opacity: img4Opacity,
//             }}
//           >
//             <motion.div
//               className="absolute inset-0 w-full h-full"
//               style={{ scale: img4Scale }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200"
//                 className="object-cover w-full h-full"
//                 draggable={false}
//                 loading="lazy"
//                 alt="Final showcase"
//               />
//             </motion.div>

//             <div className="absolute p-4 md:p-6 text-white rounded-lg top-10 left-4 sm:top-20 sm:left-10 md:top-40 md:left-20 lg:top-60 lg:left-10">
//               <h1 className="mb-4 md:mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl max-w-[150px]">
//                 Sustainable Luxury
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-9 text-yellow-600 max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-2xl">
//                 Beautiful diamonds that respect our planet.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
