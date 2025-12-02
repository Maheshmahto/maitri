// "use client";

// import { useState } from "react";
// import { montserrat } from "../app/font";

// export default function MenuUI({ setOpen }) {
//   const [activeTab, setActiveTab] = useState("BY PRODUCTS");

//   const menuItems = {
//     "BY PRODUCTS": ["RINGS", "EARRINGS", "NECKLACE", "BRACELETS"],
//     "BY COLLECTION": ["COLLECTION 1", "COLLECTION 2", "COLLECTION 3"],
//     "BY SHAPE": ["ROUND", "OVAL", "CUSHION", "PRINCESS", "EMERALD"],
//     "BY PRICE": ["UNDER $1000", "$1000 - $5000", "$5000 - $10000", "ABOVE $10000"],
//   };

//   const handleClose = () => {
//     console.log("Closing menu from MenuUI");
//     setOpen(false);
//   };

//   return (
//     <div className="relative h-full overflow-y-auto bg-white shadow-xl w-80">
//       {/* Close Button */}
//       <button
//         onClick={handleClose}
//         className="absolute top-4 right-4 z-10 text-2xl font-bold text-[#C7A967] hover:text-black transition-colors p-2"
//       >
//         ✕
//       </button>

//       {/* Header */}
//       <div className="px-6 pt-12 pb-6 border-b border-gray-200">
//         <h2 className={`text-2xl font-bold text-black ${montserrat.className}`}>
//           MENU
//         </h2>
//       </div>

//       {/* Tabs */}
//       <div className="flex flex-col">
//         {Object.keys(menuItems).map((tab) => (
//           <div key={tab} className="border-b border-gray-200">
//             <button
//               onClick={() => setActiveTab(activeTab === tab ? "" : tab)}
//               className={`w-full text-left py-4 px-6 font-semibold transition-colors duration-200 ${
//                 activeTab === tab
//                   ? "text-[#C7A967] bg-gray-50"
//                   : "text-gray-700 hover:text-[#C7A967]"
//               } ${montserrat.className}`}
//             >
//               {tab}
//             </button>

//             {/* Submenu Items */}
//             {activeTab === tab && (
//               <div className="py-2 bg-gray-50">
//                 {menuItems[tab].map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="block py-2 px-10 text-gray-600 hover:text-[#C7A967] transition-colors duration-200 font-medium"
//                     onClick={handleClose}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Links */}
//       <div className="sticky bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
//         <div className="flex flex-col space-y-4">
//           <button
//             className={`w-full py-3 px-4 bg-[#C5A769] text-white rounded hover:bg-[#B3975B] transition-colors duration-200 font-medium ${montserrat.className}`}
//             onClick={handleClose}
//           >
//             SIGN IN
//           </button>
//           <button
//             className={`w-full py-3 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 font-medium ${montserrat.className}`}
//             onClick={handleClose}
//           >
//             GET ACCESS
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { cormorant  } from "../app/font";
import { useState, useEffect } from "react";

const timeZones = [
  { city: "SURAT", timezone: "Asia/Kolkata" },
  { city: "NEW YORK", timezone: "America/New_York" },
  { city: "MUMBAI", timezone: "Asia/Kolkata" },
  { city: "CHICAGO", timezone: "America/Chicago" },
  { city: "HONG KONG", timezone: "Asia/Hong_Kong" },
  { city: "LOS ANGELES", timezone: "America/Los_Angeles" },
];

export default function MenuUI({setOpen}: {setOpen: (value: boolean) => void}) {
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
const handleClose=()=>{
  setOpen(false)
}

  return (
    <section className="w-full h-[490px]   max-w-[700px] lg:w-[646px] 2xl:w-[686px] mx-auto p-6 2xl:p-11 lg:p-8 bg-white lg:h-[359px] 2xl:h-[433px] relative transition-all duration-300 ">

      {/* CLOSE BUTTON */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-2xl font-bold text-[#C7A967] hover:text-black transition block lg:hidden"
      >
        ✕
      </button>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 2xl:mt-6 md:grid-cols-2 gap-4.5 lg:gap-0">

        {/* LEFT MENU */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className={`text-3xl md:text-3xl lg:text-[38px] 2xl:text-[43px] ${cormorant.className}`}>Home</h1>

          {["About us", "Events", "CSR", "Contact us"].map((item) => (
            <p
              key={item}
              className={`text-2xl md:text-3xl lg:text-[38px] 2xl:text-[43px] text-[#C7A967] ${cormorant.className}`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* RIGHT TIME ZONES */}
        <div className="flex flex-col items-center md:items-end ">
          <div className="relative grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3 2xl:top-30 lg:top-25">
            {timeZones.map(({ city }) => (
              <div key={city} className="text-center md:text-left ">
                <p className="text-lg font-semibold lg:text-xl ">
                  {currentTimes[city] || "Loading..."}
                </p>
                <p className={`text-xs text-[#C7A967] lg:text-[11px] font-semibold {} `}>{city}</p>
              </div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="absolute flex justify-center gap-5 2xl:bottom-14 lg:bottom-10 md:justify-end bottom-5">
            <Image src="/images/Instagram.png" width={40} height={30} alt="Instagram" />
            <Image src="/images/FaceBook.png" width={40} height={30} alt="Facebook" />
            <Image src="/images/Twitter.png" width={40} height={30} alt="Twitter" />
            <Image src="/images/Youtube.png" width={40} height={30} alt="YouTube" />
          </div>
        </div>
      </div>
    </section>
  );
}
//
<<<<<<< HEAD

=======
>>>>>>> beb8d5a9565d75f6917ed6dcea70b24cd822a7ef
