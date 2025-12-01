
"use client";

import { useState, useEffect } from "react";
import { montserrat, sourceSans } from "../app/font";
import Image from "next/image";

interface LocationTime {
  name: string;
  timezone: string;
  initialTime: string;
}

export default function FooterWithRealTime() {
  const locations: LocationTime[] = [
    { name: "SURAT", timezone: "Asia/Kolkata", initialTime: "07:15" },
    { name: "NEW YORK", timezone: "America/New_York", initialTime: "10:04" },
    { name: "MUMBAI", timezone: "Asia/Kolkata", initialTime: "22:45" },
    { name: "CHICAGO", timezone: "America/Chicago", initialTime: "13:19" },
    { name: "HONG KONG", timezone: "Asia/Hong_Kong", initialTime: "09:04" },
    {
      name: "LOS ANGELES",
      timezone: "America/Los_Angeles",
      initialTime: "17:50",
    },
  ];

  const [currentTimes, setCurrentTimes] = useState<string[]>([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const calculateTimes = () => {
      const now = new Date();
      const times = locations.map((location) => {
        try {
          const time = new Date(
            now.toLocaleString("en-US", { timeZone: location.timezone })
          );
          return time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
        } catch {
          return calculateTimeFromInitial(location.initialTime);
        }
      });
      setCurrentTimes(times);
    };

    const calculateTimeFromInitial = (initialTime: string): string => {
      const [hours, minutes] = initialTime.split(":").map(Number);
      const now = new Date();
      const initialDate = new Date();
      initialDate.setHours(hours, minutes, 0, 0);

      const diff = now.getTime() - initialDate.getTime();
      const current = new Date(now.getTime() + diff);

      return current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };

    calculateTimes();
    const interval = setInterval(calculateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black py-6 md:py-8 lg:py-8">
      <div className="mx-auto max-w-[1920px]">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 gap-6 md:gap-8">
          {/* Left Side - Main Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo.png"
                alt="Company Logo"
                width={190}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Three Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_1.png"
                alt="Right Logo 1"
                width={190}
                height={80}
                className="w-28 h-12 sm:w-32 sm:h-14 md:w-28 md:h-12 lg:w-36 lg:h-16 xl:w-40 xl:h-16 object-contain"
              />
            </div>

            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_2.png"
                alt="Right Logo 2"
                width={196}
                height={70}
                className="w-28 h-10 sm:w-32 sm:h-12 md:w-28 md:h-10 lg:w-36 lg:h-14 xl:w-40 xl:h-14 object-contain"
              />
            </div>

            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_3.png"
                alt="Right Logo 3"
                width={88}
                height={70}
                className="w-20 h-14 sm:w-22 sm:h-16 md:w-20 md:h-14 lg:w-24 lg:h-18 xl:w-24 xl:h-18 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Locations Grid with Real-time Clocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-4 md:gap-y-6 mt-8 md:mt-10 mb-6 md:mb-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="text-center group hover:bg-gray-900 rounded-sm py-3 md:py-4 transition-all duration-300"
            >
              <div
                className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[52px] text-white mb-1 font-normal tracking-wider ${sourceSans.className}`}
              >
                {currentTimes[index] || location.initialTime}
              </div>
              <div
                className={`text-sm sm:text-base md:text-base lg:text-lg xl:text-[22px] text-[#C6A867] uppercase font-semibold tracking-wider ${montserrat.className}`}
              >
                {location.name}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end mb-6 md:mb-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Image
                src="/images/Instagram.png"
                alt="Instagram"
                width={85}
                height={66}
                className="w-14 h-11 sm:w-16 sm:h-12 md:w-16 md:h-12 lg:w-20 lg:h-16 xl:w-22 xl:h-18 object-contain"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Image
                src="/images/FaceBook.png"
                alt="Facebook"
                width={85}
                height={66}
                className="w-14 h-11 sm:w-16 sm:h-12 md:w-16 md:h-12 lg:w-20 lg:h-16 xl:w-22 xl:h-18 object-contain"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width={85}
                height={66}
                className="w-14 h-11 sm:w-16 sm:h-12 md:w-16 md:h-12 lg:w-20 lg:h-16 xl:w-22 xl:h-18 object-contain"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Image
                src="/images/Youtube.png"
                alt="YouTube"
                width={85}
                height={66}
                className="w-14 h-11 sm:w-16 sm:h-12 md:w-16 md:h-12 lg:w-20 lg:h-16 xl:w-22 xl:h-18 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-[#C6A867] mx-4 sm:mx-6 md:mx-12 lg:mx-20"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-6 md:py-8 lg:py-10 relative">
          <div
            className={`text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-white text-center sm:text-left tracking-wide ${montserrat.className} pr-0 sm:pr-12`}
          >
            <span className="block sm:inline">
              2020-2025 Maitri Lab grown Diamonds. All Rights Reserved.
            </span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline mt-1 sm:mt-0">
              Privacy Policy | Terms
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 sm:absolute sm:right-4 md:right-8 lg:right-12 xl:right-16 text-white transition-all duration-200 transform hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image
              src="/images/UpArrow.png"
              alt="Up Arrow"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 object-contain"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}