
// "use client";

// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { montserrat } from "../app/font";
// import MenuUI from "./MenuUI";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // If menu is open and click is outside menu content
//       if (
//         menuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         // Also check if the click is not on the menu button
//         !event.target.closest('button[aria-label="menu"]')
//       ) {
//         setMenuOpen(false);
//       }
//     };

//     // Add event listener
//     document.addEventListener("mousedown", handleClickOutside);

//     // Clean up
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (menuOpen) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuOpen]);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 right-0 z-50 sm:px-16 py-4 bg-white border-b border-gray-200">
//        <div className="flex items-center justify-between  relative">
//           {/* Logo */}
//           <div className="flex items-center justify-center flex-1">
//             {/* MENU ICON */}
//             <button
//               onClick={() => {
//                 console.log("Opening menu");
//                 setMenuOpen(true);
//               }}
//               className="absolute left-0 h-10 p-2 transition-colors rounded cursor-pointer pl-4"
//               aria-label="menu"
//             >
//               <img src="/images/Menu.png" alt="menu" width={30} height={30} />
//             </button>
//             <Image
//               src="/images/logo.svg"
//               alt="MAITRI LAB GROWN DIAMONDS"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="absolute right-0 flex items-center gap-4">
//             <button
//               className={`hidden lg:block text-[13px] font-medium tracking-wide rounded bg-[#C5A769] text-white px-4 py-2 ${montserrat.className}`}
//             >
//               SIGN IN
//             </button>

//             <button
//               className={`hidden lg:block text-[13px] font-medium tracking-wide bg-black text-white rounded hover:bg-gray-800 px-4 py-2 ${montserrat.className}`}
//             >
//               GET ACCESS
//             </button>

            
//           </div>
//         </div>
//       </header>

//       {/* MENU OVERLAY */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-100">
//           {/* Overlay Background */}
//           <div className="absolute inset-0 " />

//           {/* Menu Panel with ref */}
//           <div ref={menuRef} className="absolute top-24 left-10">
//             <MenuUI setOpen={setMenuOpen} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { montserrat } from "../app/font";
import MenuUI from "./MenuUI";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);


const [logoSize, setLogoSize] = useState({ width: 100, height: 40 });

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1700) {
      setLogoSize({ width: 100, height: 48 });
    } else if (width >= 1530) {
      setLogoSize({ width: 100, height: 38 });
    } else {
      setLogoSize({ width: 100, height: 38 });
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="menu"]')
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
          {/* Menu Button */}
          <button
            onClick={() => {
              console.log("Opening menu");
              setMenuOpen(true);
            }}
            className="h-10 p-2 transition-colors rounded cursor-pointer flex-shrink-0"
            aria-label="menu"
          >
            <img src="/images/Menu.png" alt="menu" width={30} height={30} />
          </button>

          {/* Logo - Centered */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/logo.svg"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={120}
              height={40}
              className="object-contain"
            />
          </div> */}

<div className="absolute left-1/2 transform -translate-x-1/2">
  <Image
    src="/images/MLGD_LOGO.png"
    alt="MAITRI LAB GROWN DIAMONDS"
    width={logoSize.width}
    height={logoSize.height}
    className="object-contain "
  />
</div>

          {/* Buttons - Right Side */}
          <div className="flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <button
              className={`hidden lg:block text-[13px] font-medium tracking-wide rounded bg-[#C5A769] text-white px-3 xl:px-4 py-2 whitespace-nowrap ${montserrat.className}`}
            >
              SIGN IN
            </button>

            <button
              className={`hidden lg:block text-[13px] font-medium tracking-wide bg-black text-white rounded hover:bg-gray-800 px-3 xl:px-4 py-2 whitespace-nowrap ${montserrat.className}`}
            >
              GET ACCESS
            </button>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Overlay Background */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Menu Panel */}
          <div ref={menuRef} className="absolute top-20 sm:top-24 left-4 sm:left-10">
            <MenuUI setOpen={setMenuOpen} />
          </div>
        </div>
      )}
    </>
  );
}