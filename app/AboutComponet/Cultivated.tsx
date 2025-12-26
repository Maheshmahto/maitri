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
       <div className="absolute top-[40px] left-[140px] flex flex-col items-start">

  {/* Heading */}
  <h2
    className={`font-serif font-medium text-[65px] leading-[65px] tracking-[0em] max-w-[802px] mb-6 ${cormorant.className}`}
  >
    <span className="block">
      Cultivated with{" "}
      <span className="italic font-semibold">Precision</span>
    </span>
    <span className="block">
      Created with{" "}
      <span className="italic font-semibold">Care</span>
    </span>
  </h2>

  {/* Divider */}
  <img
    src="/images/Line 14.png"
    alt="line"
    className="w-[75%] mb-8"
  />

  {/* Description */}
  <p
    className={`text-black font-normal text-[18px] leading-[31px] tracking-[0.05em] max-w-[650px] mb-6 ${montserrat.className}`}
  >
    At Maitri, we believe the future of diamonds isn't found by digging
    deeper into the earth—it's cultivated through human ingenuity,
    scientific precision, and genuine care for the world we'll leave
    behind.
  </p>

  {/* Sub text */}
  <p
    className={`text-black font-normal text-[18px] leading-[41px] tracking-[0.05em] mb-2 ${montserrat.className}`}
  >
    This is why we exist. This is what we mean when we say:
  </p>

  {/* Highlight statement */}
  <p
    className={`uppercase text-[25px] leading-[41px] tracking-[0.2em] font-bold text-[#c9a24d] ${montserrat.className}`}
  >
    We are the future of diamonds.
  </p>

</div>

        <div className="text-center mt-20 mb-12">
          <div className="flex justify-center mb-5 ">
            <Image
              src="/images/logo_icon.png"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={55}
              height={18}
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
