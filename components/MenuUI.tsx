"use client";
import Image from "next/image";
import { cormorant, montserrat } from "../app/font";
import { useState, useEffect } from "react";

const timeZones = [
  { city: "SURAT", timezone: "Asia/Kolkata" },
  { city: "NEW YORK", timezone: "America/New_York" },
  { city: "MUMBAI", timezone: "Asia/Kolkata" },
  { city: "CHICAGO", timezone: "America/Chicago" },
  { city: "HONG KONG", timezone: "Asia/Hong_Kong" },
  { city: "LOS ANGELES", timezone: "America/Los_Angeles" },
];

export default function MenuUI() {
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(true); // ⬅ Menu open/close state

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

  if (!open) return null; // hide menu when closed

  return (
    <section className="w-full max-w-[700px] mx-auto p-6 md:p-12 bg-white h-auto md:h-[360px] relative transition-all duration-300">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-2xl font-bold text-[#C7A967] hover:text-black transition"
      >
        ✕
      </button>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

        {/* LEFT MENU */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className={`text-3xl md:text-4xl ${cormorant.className}`}>Home</h1>

          {["About us", "Events", "CSR", "Contact us"].map((item) => (
            <p
              key={item}
              className={`text-2xl md:text-3xl text-[#C7A967] ${cormorant.className}`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* RIGHT TIME ZONES */}
        <div className="flex flex-col items-center md:items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {timeZones.map(({ city }) => (
              <div key={city} className="text-center md:text-left">
                <p className="text-lg md:text-xl font-semibold">
                  {currentTimes[city] || "Loading..."}
                </p>
                <p className="text-xs text-[#C7A967]">{city}</p>
              </div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-5">
            <Image src="/images/instagram.png" width={40} height={30} alt="Instagram" />
            <Image src="/images/faceBook.png" width={40} height={30} alt="Facebook" />
            <Image src="/images/Twitter.png" width={40} height={30} alt="Twitter" />
            <Image src="/images/Youtube.png" width={40} height={30} alt="YouTube" />
          </div>
        </div>
      </div>
    </section>
  );
}
