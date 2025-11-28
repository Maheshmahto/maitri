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
    <div className="bg-black text-white">
      <div className="flex justify-center py-20 px-4">
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
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* IMAGE 1: base layer with zoom effect */}

          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              zIndex: 10,
              y: "0%",
              opacity: img1Opacity,
            }}
          >
            <motion.img
              src="\images\Website-assets.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img1Scale }}
            />
            <div
              className="absolute bg-opacity-70 rounded-lg"
              style={{
                top: "clamp(6rem, 12vw, 7rem)",
                left: "clamp(0.3rem, 1.4vw, 2.8rem)",
                maxWidth: "clamp(20rem, 80vw, 72rem)",
                padding: "clamp(0.5rem, 2vw, 2rem)",
              }}
            >
              <h1
                className={`${cormorant.className} font-medium text-black tracking-tight`}
                style={{
                  fontSize: "clamp(17px, 3.6vw, 60px)",
                  marginBottom: "clamp(24px, 2vw, 68px)",
                }}
              >
                PRECISION - MATCHED DIAMOND SETS
              </h1>

              <p
                className={`text-black ${montserrat.className} tracking-wide`}
                style={{
                  fontSize: "clamp(14px, 1.8vw, 24px)",
                  marginBottom: "clamp(16px, 6vw, 40px)",
                }}
              >
                Eliminate 1-3 hours of manual sourcing per piece
              </p>
              <p
                className={`text-black ${montserrat.className} tracking-wide`}
                style={{
                  fontSize: "clamp(14px, 1.4vw, 24px)",
                  maxWidth: "clamp(18.75rem, 70vw, 51.25rem)",
                }}
              >
                Our proprietary algorithm analyzes 60,000+ stones to create
                perfectly matched sets for studs, tennis bracelets, eternity
                bands, and more. Ready to order guaranteed consistent.
              </p>

              <div
                className="space-y-4"
                style={{
                  marginTop: "clamp(3rem, 8vw, 4rem)",
                }}
              >
                <div
                  className="h-0.5 relative"
                  style={{
                    maxWidth: "clamp(20rem, 70vw, 61rem)",
                  }}
                >
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

                <div className="flex justify-between items-center">
                  <div
                    className="flex items-center"
                    style={{
                      gap: "clamp(1rem, 2vw, 8rem)",
                      paddingTop: "clamp(1rem, 2vw, 6rem)",
                      paddingBottom: "clamp(1em, 2vw, 6rem)",
                    }}
                  >
                    <div
                      className="flex items-center"
                      style={{ gap: "clamp(0.5rem, 1vw, 0.6rem)" }}
                    >
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(18px, 2.3vw, 80px)" }}
                      >
                        11,365
                      </div>
                      <div
                        className={`text-black ${montserrat.className}`}
                        style={{
                          fontSize: "clamp(14px, 1.8vw, 20px)",
                          maxWidth: "clamp(4rem, 15vw, 8.4rem)",
                        }}
                      >
                        Pre-matched sets
                      </div>
                    </div>

                    <div
                      className="flex items-center"
                      style={{ gap: "clamp(0.5rem, 1vw, 0.6rem)" }}
                    >
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(18px, 2.3vw, 60px)" }}
                      >
                        1-3 hrs
                      </div>
                      <div
                        className={`text-black ${montserrat.className}`}
                        style={{
                          fontSize: "clamp(14px, 1.5vw, 20px)",
                          maxWidth: "clamp(8rem, 15vw, 7rem)",
                        }}
                      >
                        Time saved per order
                      </div>
                    </div>

                    <div
                      className="flex items-center"
                      style={{ gap: "clamp(0.5rem, 1vw, 0.7rem)" }}
                    >
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(18px, 2.3vw, 60px)" }}
                      >
                        100%
                      </div>
                      <div
                        className={`text-black ${montserrat.className}`}
                        style={{
                          fontSize: "clamp(14px, 1.5vw, 20px)",
                          maxWidth: "clamp(8rem, 15vw, 5rem)",
                        }}
                      >
                        Algorithm precision
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-0.5 relative"
                  style={{
                    maxWidth: "clamp(20rem, 70vw, 59rem)",
                  }}
                >
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
                className={`font-medium text-black transition-colors ${cormorant.className}`}
                style={{
                  marginTop: "clamp(1rem, 1vw, 6rem)",
                  paddingTop: "clamp(0.65rem, 1.5vw, 1rem)",
                  paddingBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                  fontSize: "clamp(20px, 2vw, 32px)",
                }}
              >
                EXPLORE MATCHED SETS {">>"}
              </button>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              y: img2Y,
              zIndex: 20,
              opacity: img2Opacity,
            }}
          >
            <motion.img
              src="\images\map.jpg"
              className="h-full w-full object-cover pt-25"
              draggable={false}
              style={{ scale: img2Scale }}
            />

            {/* <div className="absolute top-30 2xl:top-30 xl:top-28 lg:top-30 left-0 2xl:left-10 xl:left-8 lg:left-6 max-w-5xl bg-opacity-70 p-2 2xl:p-8 xl:p-6 lg:p-4 rounded-lg"> */}
            <div
              className="absolute bg-opacity-70 rounded-lg"
              style={{
                top: "clamp(6rem, 12vw, 7rem)",
                left: "clamp(0.3rem, 1.4vw, 2.8rem)",
                maxWidth: "clamp(20rem, 80vw, 72rem)",
                padding: "clamp(0.5rem, 2vw, 2rem)",
              }}
            >
              {/* <h1
                className={`text-[17px] 2xl:text-[62px] xl:text-[44px] lg:text-[42px] ${cormorant.className} font-medium 2xl:max-w-xl xl:max-w-md mb-10 2xl:mb-10 xl:mb-10 lg:mb-8 text-[#C5A769] tracking-tight xl:leading-10 2xl:leading-16`}
              > */}
              <h1
                className={`${cormorant.className} font-medium text-[#C5A769] tracking-tight`}
                style={{
                  fontSize: "clamp(15px, 3.2vw, 60px)",
                  marginBottom: "clamp(24px, 2vw, 68px)",
                  maxWidth: "clamp(4rem, 80vw, 12rem)",
                  lineHeight: "clamp(1.5rem, 3vw, 8rem)",
                }}
              >
                WORLDWIDE PRESENCE
              </h1>

              {/* <p
                className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[18px] lg:text-[18px] mb-8 2xl:mb-8 xl:mb-6 lg:mb-4 text-black ${montserrat.className} tracking-wide  sm:px-0 2xl:max-w-[440px] xl:max-w-[380px]`}
              > */}
              <p
                className={`text-black mb-8 ${montserrat.className} tracking-wide sm:px-0`}
                style={{
                  fontSize: "clamp(14px, 1.6vw, 23px)",
                  marginBottom: "clamp(16px, 1.5vw, 32px)",
                  maxWidth: "clamp(280px, 80vw, 440px)",
                }}
              >
                Six strategic locations across three continents.
              </p>
              {/* <p
                className={`text-[14px] sm:text-[16px] 2xl:text-[24px] xl:text-[16px] lg:text-[16px] text-black ${montserrat.className} tracking-wide w-full  sm:px-0 sm:max-w-[500px] md:max-w-[500px] xl:max-w-[430px] 2xl:max-w-[550px] ]`}
              > */}
              <p
                className={`text-black ${montserrat.className} tracking-wide w-full sm:px-0`}
                style={{
                  fontSize: "clamp(14px, 1.3vw, 23px)",
                  maxWidth: "clamp(300px, 80vw, 520px)",
                }}
              >
                Our global network ensures rapid fullfilment, multi-timezone
                support, and local expertise for jewelery partners worldwide.
                From Mumbai’s Production atelier to stratergic hubs across
                America, Europe and Asia-Pacific.
              </p>

              {/* <div className="mt-12 2xl:mt-16 xl:mt-10 lg:mt-8 space-y-4">
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
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-8 2xl:gap-18 xl:gap-6 lg:gap-4 py-4 2xl:py-6 xl:py-2 lg:py-3">
                    <div className="flex flex-col items-start ">
                      <div
                        className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl items-start ${montserrat.className}`}
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
                        className={`text-[#c4aa6b] text-5xl 2xl:text-6xl xl:text-4xl lg:text-5xl ${montserrat.className}`}
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
              </div> */}

              <div
                className="mt-12 space-y-4"
                style={{ marginTop: "clamp(48px, 4vw, 64px)" }}
              >
                {/* Golden line above */}
                <div
                  className="h-0.5 relative"
                  style={{ maxWidth: "clamp(650px, 70vw, 1950px)" }}
                >
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

                <div className="flex justify-between items-center">
                  <div
                    className="flex items-center py-4"
                    style={{
                      gap: "clamp(16px, 3vw, 72px)",
                      paddingTop: "clamp(16px, 1.5vw, 24px)",
                      paddingBottom: "clamp(16px, 1.2vw, 24px)",
                    }}
                  >
                    {/* First stat */}
                    <div className="flex flex-col items-start">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
                      >
                        06
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-center`}
                        style={{
                          fontSize: "clamp(16px, 1.2vw, 24px)",
                          maxWidth: "clamp(120px, 12vw, 200px)",
                        }}
                      >
                        Global Offices
                      </div>
                    </div>

                    {/* Second stat */}
                    <div className="flex flex-col items-start">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
                      >
                        72 hrs
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-center`}
                        style={{ fontSize: "clamp(16px, 1.2vw, 24px)" }}
                      >
                        Worldwide Delivery
                      </div>
                    </div>

                    {/* Third stat */}
                    <div className="flex flex-col items-start">
                      <div
                        className={`text-[#c4aa6b] ${montserrat.className}`}
                        style={{ fontSize: "clamp(36px, 5vw, 55px)" }}
                      >
                        24/7
                      </div>
                      <div
                        className={`text-black ${montserrat.className} text-center`}
                        style={{
                          fontSize: "clamp(16px, 1.2vw, 24px)",
                          maxWidth: "clamp(112px, 10vw, 128px)",
                        }}
                      >
                        Operations
                      </div>
                    </div>
                  </div>
                </div>

                {/* Golden line below */}
                <div
                  className="h-0.5 relative"
                  style={{ maxWidth: "clamp(650px, 70vw, 950px)" }}
                >
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
            className="absolute inset-0 h-full w-full"
            style={{
              y: img3Y,
              zIndex: 30,
              opacity: img3Opacity,
            }}
          >
            <motion.img
              src="\images\jewellery8.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img3Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Third Title</h1>
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
