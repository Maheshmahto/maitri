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
      // If menu is open and click is outside menu content
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        // Also check if the click is not on the menu button
        !event.target.closest('button[aria-label="menu"]')
      ) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <button
              className={`hidden lg:block text-[20px] font-medium rounded bg-[#C5A769] text-white px-8 py-2.5 ${montserrat.className}`}
            >
              SIGN IN
            </button>

            <button
              className={`hidden lg:block text-[20px] font-medium bg-black text-white rounded hover:bg-gray-800 px-8 py-2.5 ${montserrat.className}`}
            >
              GET ACCESS
            </button>

            {/* MENU ICON */}
            <button
              onClick={() => {
                console.log("Opening menu");
                setMenuOpen(true);
              }}
              className="h-10 p-2 transition-colors rounded cursor-pointer"
              aria-label="menu"
            >
              <img
                src="/images/Group 18.png"
                alt="menu"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-100">
          {/* Overlay Background */}
          <div className="absolute inset-0 " />
          
          {/* Menu Panel with ref */}
          <div 
            ref={menuRef}
            className="absolute top-20 right-10"
          >
            <MenuUI setOpen={setMenuOpen} />
          </div>
        </div>
      )}
    </>
  );
}