"use client";
import Image from "next/image";
import { cormorant, montserrat } from "../app/font";
import { useState, useEffect } from "react";
import Link from "next/link";

const timeZones = [
  { city: "NEW YORK", timezone: "America/New_York", location: "AMERICAS HUB" },
  { city: "MUMBAI", timezone: "Asia/Kolkata", location: "PRIMARY LABORATORY" },
  {
    city: "HONG KONG",
    timezone: "Asia/Hong_Kong",
    location: "ASIA-PACIFIC HUB",
  },
];

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "CSR", href: "/csr" },
  { name: "Contact us", href: "/contact" },
];

export default function MenuUI({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const getTimeForTimezone = (timezone: string) => {
      return new Date().toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const updateTimes = () => {
      const times: Record<string, string> = {};
      timeZones.forEach(({ city, timezone }) => {
        times[city] = getTimeForTimezone(timezone);
      });
      setCurrentTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = () => {
    setOpen(false); // Close menu when clicking a menu item
  };

  return (
    <section className="w-[] min-h-full sm:w-[400px] md:w-[500px] lg:w-[750px] xl:w-[1000px] 2xl:w-[1600px] mx-auto p-6 2xl:p-11 lg:p-8 bg-white lg:h-[440px] xl:h-[500px] 2xl:h-[580px] relative transition-all duration-300 overflow-y-auto">
      {/* CLOSE BUTTON */}
      <button
        onClick={handleClose}
        className="absolute top-3 left-4 text-2xl font-bold text-[#C7A967] hover:text-black transition block lg:hidden"
      >
        ✕
      </button>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 2xl:mt-6 md:grid-cols-2 gap-9 lg:gap-0">
        {/* LEFT MENU */}
        <div className="pl-4 space-y-5 text-right md:text-left">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleMenuItemClick}
              className={`block text-3xl md:text-3xl lg:text-[38px] 2xl:text-[43px] ${cormorant.className} ${
                item.name === "Home" 
                  ? "text-black hover:text-[#C7A967]" 
                  : "text-[#C7A967] hover:text-black"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT TIME ZONES */}
        <div className="flex flex-col items-center md:items-end md:pr-8 lg:pr-12">
          <div className="relative flex flex-col items-end space-y-6 2xl:space-y-8 lg:space-y-7 2xl:top-35 lg:top-25">
            {timeZones.map(({ city, location }) => (
              <div key={city} className="text-right">
                <div className="flex items-baseline justify-end gap-2">
                  <p
                    className={`text-xs 2xl:text-[18px] font-semibold tracking-widest ${montserrat.className}`}
                  >
                    {city}
                  </p>
                  <span className="text-sm 2xl:text-base font-mono">
                    {currentTimes[city] || "--:--"}
                  </span>
                </div>
                <p
                  className={`text-sm 2xl:text-sm font-normal text-gray-600 tracking-widest ${montserrat.className} mt-1`}
                >
                  {location}
                </p>
              </div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="absolute flex justify-center gap-5 2xl:bottom-14 lg:bottom-10 md:justify-end bottom-20">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/facebook_1.png"
                width={64}
                height={65}
                className="w-8 h-8 md:w-16 md:h-16 lg:w-15 lg:h-15 hover:opacity-80 transition-opacity"
                alt="Facebook"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Twitter_1.png"
                width={64}
                height={65}
                className="w-8 h-8 md:w-16 md:h-16 lg:w-15 lg:h-15 hover:opacity-80 transition-opacity"
                alt="Twitter"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Instragram_1.png"
                width={64}
                height={65}
                className="w-8 h-8 md:w-16 md:h-16 lg:w-15 lg:h-15 hover:opacity-80 transition-opacity"
                alt="Instagram"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/youtube_1.png"
                width={64}
                height={65}
                className="w-8 h-8 md:w-16 md:h-16 lg:w-15 lg:h-15 hover:opacity-80 transition-opacity"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}