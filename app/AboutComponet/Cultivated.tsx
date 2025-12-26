import Image from "next/image";
// import { cormorant, montserrat } from "../app/font";
import { cormorant, montserrat,bodoni } from "../font";

export default function Cultivated() {
  return (
    <>

      <div className="relative group mt-46">
        <Image
          src="/images/About-us_2 1.png"
          alt="Timeline"
          width={800}
          height={300}
          className="w-full rounded-lg"
        />
        {/* Text Overlay - Center */}
        <div className="absolute top-10 left-25 flex flex-col items-start justify-center ">

          <h2
            className={`font-serif font-medium text-[65px] leading-[65px] tracking-[0em] max-w-[942px] mt-8 mb-4 ${cormorant.className}`}
          >
            <span className="block">
              Cultivated with{" "}
              <span className={`italic font-semi-bold `}>Precision</span>
            </span>
            <span className="block">
              Created with{" "}
              <span className={`italic font-semi-bold `}>Care</span>
            </span>
          </h2>



          <div className="mt-1 mb-6  h-px ">
            <img className="w-[75%] " src="/images/Line 14.png" alt="line" />
          </div>
          <div className="max-w-2xl">
            <p
              className={`text-black font-normal text-[19px] leading-[30px] tracking-[0.05em] max-w-[777px] mb-5 ${montserrat.className}`}
            >
              At Maitri, we believe the future of diamonds isn't found by
              digging deeper into the earth—it's cultivated through human
              ingenuity, scientific precision, and genuine care for the world
              we'll leave behind.
            </p>

            <p
              className={`text-black text-sm md:text-base lg:text-xl font-normal leading-7 mb-1 ${montserrat.className}`}
            >
              This is why we exist. This is what we mean when we say:
            </p>
            <p
              className={`uppercase tracking-[7px] text-[#c9a24d] font-semibold lg:text-2xl mt-4 ${montserrat.className}`}
            >
              We are the future of diamonds.
            </p>
          </div>
        </div>
        <div className="text-center mt-20 mb-12">
          <div className="flex justify-center mb-3 ">
            <Image
              src="/images/logo_icon.png"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={60}
              height={20}
              className="object-contain"
            />
          </div>

          <h3
  className={`font-serif font-medium
  text-[65px]
  leading-[85px]
  tracking-[0em]
  
  ${cormorant.className}`}
>
  A Chronicle of{" "}
  <span className={`italic font-semi-bold `}>
  Mastery
</span>
</h3>

        </div>

        {/* Or permanent text */}
      </div>
    </>
  );
}
