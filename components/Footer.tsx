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
    { name: "MUMBAI", timezone: "Asia/Kolkata", initialTime: "22:45" },
    { name: "NEW YORK", timezone: "America/New_York", initialTime: "10:04" },
    { name: "HONG KONG", timezone: "Asia/Hong_Kong", initialTime: "09:04" },
  ];

  const [currentTimes, setCurrentTimes] = useState<string[]>([]);

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

  const footerLinks = {
    contact: ["Contact Us", "Book an Appointment", "FAQ", "Customer Support"],
    brands: [
      "Maitri Diamonds",
      "Maitri Jewels",
      "Q² Diamonds",
      "About Us",
      "Careers",
    ],
    resources: [
      "Diamond Education",
      "Sustainability Report",
      "Certifications",
      "Technology",
      "Press & Media",
    ],
  };

  return (
    <footer className="pt-8 text-black bg-white sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
      <div className="mx-auto max-w-[1920px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 px-4 pb-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 md:gap-10 lg:gap-12 sm:px-6 md:px-8 lg:px-12 xl:px-32 sm:pb-8 md:pb-10 lg:pb-10">
          {/* Contact Column */}
          <div className="text-center lg:text-left">
            <h3
              className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-black uppercase tracking-wider ${montserrat.className}`}
            >
              CONTACT
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-normal hover:text-[#C6A867] transition-colors duration-200 ${montserrat.className} font-light`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands Column */}
          <div className="text-center lg:text-left">
            <h3
              className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-black uppercase tracking-wider ${montserrat.className}`}
            >
              OUR BRANDS
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {footerLinks.brands.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-normal hover:text-[#C6A867] transition-colors duration-200 ${montserrat.className} font-light`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="text-center lg:text-left">
            <h3
              className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-black uppercase tracking-wider ${montserrat.className}`}
            >
              RESOURCES
            </h3>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-normal hover:text-[#C6A867] transition-colors duration-200 ${montserrat.className} font-light`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us & Locations Column */}
          <div className="text-center lg:text-left">
            <h3
              className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-black uppercase tracking-wider ${montserrat.className}`}
            >
              FOLLOW US:
            </h3>

            {/* Social Media Icons - Centered on mobile only */}
        <div className="flex justify-center gap-2 mb-4 lg:justify-start sm:gap-3 md:gap-4 sm:mb-5 md:mb-6 lg:mb-8">
  {["facebook_1", "Twitter_1", "Instragram_1", "youtube_1"].map(
    (platform) => {
      const iconName = platform.replace(" ", "");
      return (
        <a
          key={platform}
          href="#"
          className="hover:text-[#C6A867] transition-all duration-200  block relative"
          aria-label={platform}
        >
          {/* Use appropriate sizes based on your CSS */}
          <Image
            src={`/images/${iconName}.png`}
            alt={`${platform} icon`}
            width={64}  // Set to largest size (lg:w-16 = 64px)
            height={64}
            quality={85}
            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 64px"
          />
        </a>
      );
    }
  )}
</div>
          </div>
        </div>

        {/* Locations with Real-time - Centered on mobile only */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 lg:flex-row lg:items-start sm:gap-6 md:gap-8 lg:gap-10 xl:gap-40 sm:py-8 md:py-10 lg:py-12 xl:py-14 sm:px-6 md:px-8">
          {locations.map((location) => (
            <div key={location.name} className="text-center">
              <div
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed tracking-widest text-black uppercase ${montserrat.className}`}
              >
                {location.name}
              </div>

              <div
                className={`text-xs sm:text-sm md:text-base leading-relaxed tracking-widest text-black-300 ${montserrat.className}`}
              >
                {location.name === "MUMBAI" && "PRIMARY LABORATORY"}
                {location.name === "NEW YORK" && "AMERICAS HUB"}
                {location.name === "HONG KONG" && "ASIA-PACIFIC HUB"}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="border-t border-[#C6A867] mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 "></div> */}

        <div className="border-t border-[#C6A867] w-full"></div>

        {/* Logo Section - Centered on mobile only */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 lg:flex-row lg:justify-between sm:px-6 md:px-8 lg:px-12 xl:px-20 sm:gap-6 md:gap-8 sm:py-8 md:py-10">
          {/* Left Side - Main Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center justify-center rounded-lg">
              <Image
                src="/images/MainLogo_11.png"
                alt="Company Logo"
                width={144}
                height={90}
                className="object-contain w-24 h-15 sm:w-28 sm:h-18 md:w-32 md:h-20 lg:w-36 lg:h-22 xl:w-44 xl:h-28"
              />
            </div>
          </div>

          {/* Right Side - Three Logos */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <div className="flex items-center justify-center rounded-lg">
              <Image
                src="/images/MainLogo_14.png"
                alt="Right Logo 1"
                width={190}
                height={75}
                className="object-contain w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 xl:w-48 xl:h-20"
              />
            </div>

            <div className="flex items-center justify-center rounded-lg">
              <Image
                src="/images/MainLogo_13.png"
                alt="Right Logo 2"
                width={190}
                height={75}
                className="object-contain w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 xl:w-48 xl:h-20"
              />
            </div>

            <div className="flex items-center justify-center rounded-lg">
              <Image
                src="/images/MainLogo_12.png"
                alt="Right Logo 3"
                width={90}
                height={66}
                className="object-contain w-16 h-12 sm:w-18 sm:h-14 md:w-20 md:h-16 lg:w-24 lg:h-18 xl:w-28 xl:h-20"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-[#C6A867] mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20"></div> */}

        <div className="border-t border-[#C6A867] w-full"></div>

        {/* Bottom Section - Always centered */}
        <div className="relative flex flex-col items-center justify-center gap-2 py-4 md:flex-row sm:gap-3 md:gap-4 sm:py-5 md:py-6">
          <div
            className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal text-black text-center py-4 sm:py-6 md:py-8 lg:py-10 ${montserrat.className}`}
          >
            <span>
              2020-2025 Maitri Lab grown Diamonds. All Rights Reserved.
            </span>
            <span className="hidden md:inline"> | </span>
            <span className="block mt-1 md:inline sm:mt-2 md:mt-0">
              <a
                href="#"
                className="hover:text-[#C6A867] transition-colors duration-200"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="hover:text-[#C6A867] transition-colors duration-200 ml-1"
              >
                Terms
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
