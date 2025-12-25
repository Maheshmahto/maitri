import React from "react";
import Image from "next/image";
import { cormorant, montserrat } from "../font";

const Timeline = () => {
  return (
    <div className="relative group">
      <Image
        src="/images/Timeline_1 2.png"
        alt="Timeline"
        width={800}
        height={300}
        className="w-full rounded-lg"
      />

      {/* Text Overlay - Center */}
      <div className="absolute top-10 left-36 flex flex-col items-start justify-center ">
        <h1 className="text-black lg:text-5xl 2xl:text-5xl font-medium mb-10">2012</h1>
        <h1 className={`text-[#7A7161] lg:text-5xl 2xl:text-5xl ${cormorant.className}`}>
          The Enquiry  <span className="italic">Begins</span>
        </h1>
        <p className={`text-[#8B7969] max-w-xl text-xl opacity-80 mt-6 ${montserrat.className}`}>
          A small team believed diamonds could be created with care instead of
          extraction. They didn't know if it was possible-only that the world
          needed an alternative. It began with curiosity, uncertainty, and a
          conviction that there had to be a better way.
        </p>
      </div>

      {/* Or permanent text */}
      {/* <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
        <h1 className=" text-black font-semibold">
          The enquiry <span>Begins</span>
        </h1>
      </div> */}
    </div>
  );
};

export default Timeline;
