"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { montserrat } from "../app/font";
import MenuUI from "./MenuUI";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
        style={{ padding: "0.75rem 2rem" }}
      >
        <div className="flex justify-between items-center lg:justify-between">
          
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={148}
              height={84}
              className="object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center" style={{ gap: "1rem" }}>
            <button
              className={`text-[20px] font-medium  rounded bg-[#C5A769] text-white transition-colors duration-200   hidden lg:block  ${montserrat.className}`}
              style={{ padding: "0.625rem 2rem" }}
            >
              SIGN IN
            </button>

            <button
              className={`text-[20px] font-medium bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 hidden lg:block   ${montserrat.className}`}
              style={{ padding: "0.625rem 2rem" }}
            >
              GET ACCESS
            </button>

            {/* MENU ICON (opens menu UI) */}
            <span
              className="cursor-pointer block"
              onClick={() => setMenuOpen(true)}
            >
              <img src="/images/Group 18.png" alt="menu" />
            </span>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 flex justify-end ">
          <div 
            ref={menuRef}
            className="h-full p-10 mt-10"
          >
            <MenuUI />
          </div>
        </div>
      )}
    </>
  );
}