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
    <footer className="bg-black py-4 sm:py-8 ">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-24 xl:px-36">
          {/* Left Side - Single Logo */}
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
            <div className="w-28 h-28 sm:w-35 sm:h-35 lg:w-40 lg:h-40 xl:w-50 xl:h-50 rounded-lg flex items-center justify-center">
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
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-12 xl:gap-16">
            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_1.png"
                alt="Right Logo 1"
                width={190}
                height={80}
                className="w-24 h-10 sm:w-28 sm:h-12 lg:w-32 lg:h-14 xl:w-40 xl:h-16 object-contain"
              />
            </div>

            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_2.png"
                alt="Right Logo 2"
                width={196}
                height={70}
                className="w-24 h-8 sm:w-28 sm:h-10 lg:w-32 lg:h-12 xl:w-40 xl:h-14 object-contain"
              />
            </div>

            <div className="rounded-lg flex items-center justify-center">
              <Image
                src="/images/MainLogo_3.png"
                alt="Right Logo 3"
                width={88}
                height={70}
                className="w-16 h-12 sm:w-18 sm:h-14 lg:w-20 lg:h-16 xl:w-24 xl:h-18 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Locations Grid with Real-time Clocks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  mb-8 px-4 sm:px-8 lg:px-16 py-10">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="text-center group hover:bg-gray-900 rounded-sm py-3 transition-all duration-300"
            >
              <div
                className={`text-lg sm:text-xl lg:text-4xl xl:text-[52px] text-white mb-1 font-normal tracking-wider ${sourceSans.className}`}
              >
                {currentTimes[index] || location.initialTime}
              </div>
              <div
                className={`text-lg sm:text-xl lg:text-xl xl:text-[22px] text-[#C6A867] uppercase font-semibold tracking-wider ${montserrat.className}`}
              >
                {location.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end mb-8 px-4 sm:px-8 lg:px-24 xl:px-32">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 lg:gap-3 xl:gap-4">
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
                className="w-16 h-12 sm:w-20 sm:h-16 lg:w-22 lg:h-16 xl:w-22 xl:h-18 object-contain"
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
                className="w-16 h-12 sm:w-20 sm:h-16 lg:w-22 lg:h-16 xl:w-22 xl:h-18 object-contain"
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
                className="w-16 h-12 sm:w-20 sm:h-16 lg:w-22 lg:h-16 xl:w-22 xl:h-18 object-contain"
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
                className="w-16 h-12 sm:w-20 sm:h-16 lg:w-22 lg:h-16 xl:w-22 xl:h-18 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-[#C6A867] my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-10  lg:px-28 relative">
          <div
            className={`text-sm sm:text-base lg:text-lg xl:text-2xl text-white text-center w-full sm:w-auto sm:text-left px-4 tracking-wide ${montserrat.className}`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span>
                2020-2025 Maitri Lab grown Diamonds. All Rights Reserved. |
                Privacy Policy | Terms
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="absolute right-4 sm:right-6 lg:right-8 xl:right-10 lg:pr-18 text-white transition-all duration-200 transform cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image
              src="/images/UpArrow.png"
              alt="Up Arrow"
              width={36}
              height={36}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 object-contain"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
