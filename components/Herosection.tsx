"use client";
import Image from "next/image";
import { cormorant, montserrat } from "../app/font";

export default function HeroSection() {
  return (
    <>
      {/* =======================
          1) PRELOAD HERO IMAGES
      ======================== */}
      <link rel="preload" href="/images/mobile-left.webp" as="image" />
      <link rel="preload" href="/images/mobile-right.webp" as="image" />

      <link rel="preload" href="/images/HERO SECTIONDESKTOP.webp" as="image" />

      <section className="relative h-96 lg:h-screen w-full overflow-hidden mt-[109px] lg:mt-0">
        {/* =========================================================
            MOBILE HERO SECTION (Visible only below lg)
        ========================================================== */}
        <div className="absolute inset-0 -z-10 lg:hidden">
          {/* Left diagonal image */}
          <div className="absolute inset-0 overflow-hidden lg:hidden">
            <div
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/mobile-left.webp"
                alt="Left diagonal background"
                fill
                loading='eager'
                className="object-cover"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Right diagonal image */}
          <div className="absolute inset-0 overflow-hidden lg:hidden">
            <div
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/mobile-right.webp"
                alt="Right diagonal background"
                fill
                loading="eager"
                className="object-cover"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Divider Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#C7A967"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Small Center Logo */}
          <Image
            src="/images/white_logo.png"
            alt="Center Logo"
            width={120}
            height={120}
            priority
            className="absolute z-10 w-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>

        {/* =========================================================
            DESKTOP HERO SECTION (lg and up)
        ========================================================== */}
        <div className="absolute inset-0 hidden lg:block -z-10">
          <Image
            src="/images/HERO SECTIONDESKTOP.webp"
            alt="Hero Background Desktop"
            fill
            priority
            loading="eager"
            // placeholder="blur"
            // blurDataURL="/images/HERO-DESKTOP-blur.webp"
            className="object-cover object-center"
          />
        </div>

        {/* LAPTOP SIZE (between lg and 2xl) */}
        <div className="absolute inset-0 hidden lg:block 2xl:hidden -z-10">
          <Image
            src="/images/HEROLAPTOP.webp"
            alt="Laptop Hero"
            fill
            // placeholder="blur"
            // blurDataURL="/images/HEROLAPTOP-blur.webp"
            className="object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* =========================================================
            CENTER LOGO FOR DESKTOP
        ========================================================== */}
        <div className="relative z-20 items-center justify-center hidden h-full px-4 lg:flex">
          {/* <Image
            src="/images/white_logo.png"
            alt="Maitri Diamonds"
            width={212}
            height={163}
            priority
            className="object-contain drop-shadow-xl"
          /> */}

           <h2
            className={`${cormorant.className} text-white text-2xl md:text-3xl  xl:text-[50px] xl:px-4 md:px-4   2xl:text-[80px] font-semibold tracking-[2px] text-center lg:text-left`}
          >
            FUTURE OF DIAMONDS
          </h2>
        </div>
      </section>
    </>
  );
}