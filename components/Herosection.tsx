// "use client";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative h-96 lg:h-screen w-full overflow-hidden mt-[109px] lg:mt-0">
//       {/* Background Image */}
//       {/* <div className="absolute inset-0 -z-10">
//         <Image
//           src="/images/heromobile.png"
//           alt="Hero Background"
//           fill
//           priority
//           placeholder="blur"
//           blurDataURL="/images/HERO-BANNER.jpg"
//           // className="object-fill object-center"
//         />
//         public/images/Group 25.png
//       </div> */}
// <div className="absolute inset-0 -z-10">
//   {/* Mobile Image */}
//   <Image
//     src="/images/Mobile-version-HERO.jpg"
//     alt="Hero Background"
//     fill
//     priority
//     placeholder="blur"
//     blurDataURL="/images/Mobile-version-HERO.jpg" // Use same image for blur
//     className="object-cover object-center md:hidden"
//     // Remove w-24 and max-w-full as they conflict with 'fill'
//   />

//   {/* Desktop Image */}
//   <Image
//     src="/images/HERO-BANNER.jpg"
//     alt="Hero Background"
//     fill
//     priority
//     placeholder="blur"
//     blurDataURL="/images/HERO-BANNER.jpg"
//     className="object-cover object-center hidden md:block"
//   />
// </div>
//       {/* Center Content */}
//       <div className="flex items-center justify-center h-full px-4">
//         <img
//           src="/images/white_logo.png"
//           alt="Maitri Diamonds"
//           fetchPriority="high"
//           className="object-contain drop-shadow-xl lg:w-[212px] lg:h-[163px] w-24 "
//         />
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-96 lg:h-screen w-full overflow-hidden mt-[109px] lg:mt-0">

      {/* =========================================================
          1) MOBILE / TABLET — DIAGONAL HERO (visible below lg)
      ========================================================== */}
   <div className="absolute inset-0 -z-10 lg:hidden">

  {/* Left diagonal image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/pexels-veeterzy-38136 1.png')",
      clipPath: "polygon(0 0, 100% 0, 0 100%)",
    }}
  ></div>

  {/* Right diagonal image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/30eb82b1d6f513c948c58eda11802961f9e6544b.jpg')",
      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
    }}
  ></div>

  {/* Gold Diagonal Border */}
  {/* <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "linear-gradient(135deg, transparent calc(50% - 2px), #C7A967 50%, transparent calc(50% + 2px))",
    }}
  ></div> */}

  {/* Center shape image */}
  <img
    src="/images/white_logo.png"
    alt="Center Shape"
    className="absolute top-1/2 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 z-10"
  />
</div>


      {/* =========================================================
          2) LARGE SCREEN (lg and up) — YOUR OLD HERO SECTION 
      ========================================================== */}
      <div className="hidden lg:block absolute inset-0 -z-10 2xl:block">
        {/* Desktop Image */}
        <Image
          src="/images/HERO SECTIONDESKTOP.png"
          alt="Hero Background Desktop"
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/HERO-BANNER.jpg"
          className="object-cover object-center"
        />
      </div>
      <div className="hidden lg:block absolute inset-0 -z-10 2xl:hidden">
        {/* laptop Image */}
        <Image
          src="/images/HEROLAPTOP.png"
          alt="Hero Background Desktop"
          fill
          priority
          placeholder="blur"
          blurDataURL="images/HEROLAPTOP.png"
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          3) CENTER LOGO (visible on all sizes)
      ========================================================== */}
      <div className="lg:flex items-center justify-center h-full px-4 relative z-20 hidden ">
        <img
          src="/images/white_logo.png"
          alt="Maitri Diamonds"
          fetchPriority="high"
          className="object-contain drop-shadow-xl lg:w-[212px] lg:h-[163px] w-24"
        />
      </div>
    </section>
  );
}

