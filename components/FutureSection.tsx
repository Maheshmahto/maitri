
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { cormorant, montserrat } from "../app/font";

// // Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// interface VideoWithThumbnailProps {
//   thumbSrc: string;
//   videoSrc: string;
//   alt: string;
//   isHovered: boolean;
//   onHover: (hovered: boolean) => void;
// }

// function VideoWithThumbnail({
//   thumbSrc,
//   videoSrc,
//   alt,
//   isHovered,
//   onHover,
// }: VideoWithThumbnailProps) {
//   const [showVideo, setShowVideo] = useState(false);
//   const [videoReady, setVideoReady] = useState(false);
//   const [buttonHovered, setButtonHovered] = useState(false);

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setShowVideo(true);
//             observer.disconnect();
//           }
//         });
//       },
//       {
//         threshold: 0.25,
//         rootMargin: "80px",
//       }
//     );

//     observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (showVideo && videoRef.current) {
//       videoRef.current.load();
//     }
//   }, [showVideo]);

//   const handleVideoCanPlay = () => {
//     setVideoReady(true);
//     if (videoRef.current) {
//       videoRef.current.play().catch(() => {
//         setVideoReady(false);
//       });
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-full overflow-hidden"
//       ref={containerRef}
//       onMouseEnter={() => onHover(true)}
//       onMouseLeave={() => onHover(false)}
//     >
//       {/* Thumbnail */}
//       <Image
//         src={thumbSrc}
//         alt={alt}
//         fill
//         className={`object-cover transition-opacity duration-700 ${
//           videoReady ? "opacity-0" : "opacity-100"
//         }`}
//         placeholder="blur"
//         blurDataURL={thumbSrc}
//       />

//       {/* Video */}
//       {showVideo && (
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           loop
//           muted
//           playsInline
//           preload="auto"
//           poster={thumbSrc}
//           onCanPlay={handleVideoCanPlay}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
//             videoReady ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       )}

//       {/* EXPLORE button */}
//         <div
//         className={`absolute inset-0 flex items-end justify-center pb-20 transition-opacity duration-500 lg:transition-opacity lg:duration-500 ${
//           isHovered 
//             ? "opacity-100" 
//             : "lg:opacity-0 lg:pointer-events-none opacity-100"
//         }`}
//       >
//         <button
//           className="relative text-white text-2xl font-medium tracking-wide group"
//           onMouseEnter={() => setButtonHovered(true)}
//           onMouseLeave={() => setButtonHovered(false)}
//         >
//           EXPLORE
//           <span
//             className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ${
//               buttonHovered ? "w-0" : "w-full"
//             }`}
//           ></span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function FutureSection() {
//   const [leftHovered, setLeftHovered] = useState(false);
//   const [rightHovered, setRightHovered] = useState(false);

//   return (
//     <section className="bg-white overflow-hidden">
//       {/* ====== TEXT ROW ====== */}
//       <div className="w-full flex flex-col lg:flex-row px-2 md:px-10 lg:px-16 py-10 lg:py-16">
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
//           <h2
//             className={`${cormorant.className} text-2xl md:text-3xl  xl:text-[50px] xl:px-4 md:px-4   2xl:text-[60px] font-medium tracking-[2px] text-center lg:text-left`}
//           >
//             FUTURE OF DIAMONDS
//           </h2>
//         </div>

//         <div className="w-full lg:w-1/2 2xl:max-w-xl 2xl:px-8 md:px-4 flex justify-center lg:justify-start items-center mt-3 lg:mt-0">
//           <p
//             className={`text-black text-sm md:text-[16px] lg:text-[18px] font-medium text-center lg:text-left ${montserrat.className}`}
//           >
//             The world&apos;s fully traceable, 100% Climate Neutral and 
//             Sustainability Rated Lab-Grown Diamonds.
//             Grown in our Indian laboratory using patented CVD technology.
//           </p>
//         </div>
//       </div>

//       {/* ====== VIDEOS ====== */}
//       <div className="relative w-full">

//         {/* ===== DESKTOP (Two Videos) ===== */}
//         <div className="hidden lg:flex flex-row w-full h-[calc(100vh-6rem)]">

//           {/* Center Logo */}
//           <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
//             <Image
//               src="/images/logo_icon.png"
//               alt="Logo"
//               width={180}
//               height={180}
//               className="opacity-90"
//             />
//           </div>

//           {/* Left Video */}
//           <div className="w-1/2 h-full">
//             <VideoWithThumbnail
//               thumbSrc="/images/jewelry-hand.jpg"
//               videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4"
//               alt="Jewelry hand"
//               isHovered={leftHovered}
//               onHover={setLeftHovered}
//             />
//           </div>

//           {/* Right Video */}
//           <div className="w-1/2 h-full">
//             <VideoWithThumbnail
//               thumbSrc="/images/model.jpg"
//               videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
//               alt="Model jewelry"
//               isHovered={rightHovered}
//               onHover={setRightHovered}
//             />
//           </div>
//         </div>

//         {/* ===== MOBILE/TABLET SLIDER ===== */}
//         <div className="lg:hidden w-full h-[422px] md:h-[70vh]">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             className="w-full h-full"
//           >
//             <SwiperSlide>
//               <VideoWithThumbnail
//                 thumbSrc="/images/jewelry-hand.jpg"
//                 videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4"
//                 alt="Jewelry hand"
//                 isHovered={leftHovered}
//                 onHover={setLeftHovered}
//               />
//             </SwiperSlide>

//             <SwiperSlide>
//               <VideoWithThumbnail
//                 thumbSrc="/images/model.jpg"
//                 videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
//                 alt="Model jewelry"
//                 isHovered={rightHovered}
//                 onHover={setRightHovered}
//               />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cormorant, montserrat } from "../app/font";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface VideoWithThumbnailProps {
  thumbSrc: string;
  videoSrc: string;
  alt: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

function VideoWithThumbnail({
  thumbSrc,
  videoSrc,
  alt,
  isHovered,
  onHover,
}: VideoWithThumbnailProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "80px",
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [showVideo]);

  useEffect(() => {
    if (!videoRef.current || !isVideoLoaded) return;

    if (isHovered) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      videoRef.current.pause();
      // Reset video to beginning when not hovered
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, isVideoLoaded]);

  const handleVideoCanPlay = () => {
    setVideoReady(true);
  };

  const handleMouseEnter = () => {
    onHover(true);
  };

  const handleMouseLeave = () => {
    onHover(false);
    setButtonHovered(false);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail - Always visible when video is paused/not hovered */}
      <Image
        src={thumbSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          videoReady && isHovered ? "opacity-0" : "opacity-100"
        }`}
        placeholder="blur"
        blurDataURL={thumbSrc}
      />

      {/* Video - Only visible when hovered and ready */}
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          preload="auto"
          poster={thumbSrc}
          onCanPlay={handleVideoCanPlay}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady && isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* EXPLORE button */}
      <div
        className={`absolute inset-0 flex items-end justify-center pb-20 transition-opacity duration-500 lg:transition-opacity lg:duration-500 ${
          isHovered
            ? "opacity-100"
            : "lg:opacity-0 lg:pointer-events-none opacity-100"
        }`}
      >
        <button
          className="relative text-white text-2xl font-medium tracking-wide group"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          EXPLORE
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ${
              buttonHovered ? "w-0" : "w-full"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}

// The rest of the FutureSection component remains the same...
export default function FutureSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <section className="bg-white overflow-hidden">
      {/* ====== TEXT ROW ====== */}
      <div className="w-full flex flex-col items-center px-2 md:px-10 lg:px-16 py-5">
        <div className="max-w-4xl text-center">
          {" "}
          {/* Centered container */}
          <p
            className={`text-black text-sm md:text-base lg:text-[18px] font-medium ${montserrat.className}`}
          >
            The world&apos;s fully traceable, 100% Climate Neutral and
            Sustainability Rated Lab-Grown Diamonds.
          </p>
          <p
            className={`text-black text-sm md:text-base lg:text-[18px] font-medium  ${montserrat.className}`}
          >
            Grown in our Indian laboratory using patented CVD technology.
          </p>
        </div>
      </div>

      {/* ====== VIDEOS ====== */}
      <div className="relative w-full">
        {/* ===== DESKTOP (Two Videos) ===== */}
        <div className="hidden lg:flex flex-row w-full h-[calc(100vh-6rem)]">
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <Image
              src="/images/logo_icon.png"
              alt="Logo"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>

          {/* Left Video */}
          <div className="w-1/2 h-full">
            <VideoWithThumbnail
              thumbSrc="/images/jewelry-hand-modified.jpg"
              videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4"
              alt="Jewelry hand"
              isHovered={leftHovered}
              onHover={setLeftHovered}
            />
          </div>

          {/* Right Video */}
          <div className="w-1/2 h-full">
            <VideoWithThumbnail
              thumbSrc="/images/model-modified.jpg"
              videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
              alt="Model jewelry"
              isHovered={rightHovered}
              onHover={setRightHovered}
            />
          </div>
        </div>

        {/* ===== MOBILE/TABLET SLIDER ===== */}
        <div className="lg:hidden w-full h-[422px] md:h-[70vh]">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <VideoWithThumbnail
                thumbSrc="/images/jewelry-hand.jpg"
                videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4"
                alt="Jewelry hand"
                isHovered={leftHovered}
                onHover={setLeftHovered}
              />
            </SwiperSlide>

            <SwiperSlide>
              <VideoWithThumbnail
                thumbSrc="/images/model.jpg"
                videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
                alt="Model jewelry"
                isHovered={rightHovered}
                onHover={setRightHovered}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
