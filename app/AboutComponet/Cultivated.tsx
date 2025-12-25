import Image from "next/image";
// import { cormorant, montserrat } from "../app/font";
import { cormorant, montserrat } from "../font";

export default function Cultivated() {
  return (
    <>
      {/* <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
          <div>
            <h2
              className={`font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 ${cormorant.className}`}
            >
              Cultivated with <span className="italic">Precision</span>
              <br />
              Created with <span className="italic">Care</span>
            </h2>

            <p
              className={`text-black text-sm md:text-base lg:text-lg font-normal  leading-7 mb-5 {montserrat.className}`}
            >
              At Maitri, we believe the future of diamonds isn't found by
              digging deeper into the earth-it's cultivated through human
              ingenuity, scientific precision, and genuine care for the world
              we'll leave behind.
            </p>
            <p
              className={`text-black text-sm md:text-base lg:text-lg font-normal leading-7 mb-1 ${montserrat.className}`}
            >
              This is why we exist. This is what we mean when we say:
            </p>
            <p
              className={`uppercase tracking-[3px] text-[#c9a24d] font-semibold mt-4 ${montserrat.className}`}
            >
              We are the future of diamonds
            </p>
          </div>

          <div className="flex justify-end">
            <Image
              src="/images/logo_icon.png"
              alt="Diamond crafting"
              width={520}
              height={400}
              className="rounded-md"
              priority
            />
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="flex justify-center mb-3">
            <Image
              src="/images/logo_icon.png"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          <h3 className="font-serif text-3xl">A Chronicle of Mastery</h3>
        </div>
      </section> */}
      <div className="relative group mt-18 mb-20">
        <Image
          src="/images/About-us_2 1.png"
          alt="Timeline"
          width={800}
          height={300}
          className="w-full rounded-lg"
        />
        {/* Text Overlay - Center */}
        <div className="absolute top-10 left-36 flex flex-col items-start justify-center ">
          {/* <h1 className="text-black lg:text-5xl 2xl:text-5xl font-medium mb-10">2012</h1>
              <h1 className={`text-[#7A7161] lg:text-5xl 2xl:text-5xl ${cormorant.className}`}>
                The Enquiry  <span className="italic">Begins</span>
              </h1> */}
          <h2
            className={`font-serif text-4xl md:text-7xl font-medium leading-tight mb-6 ${cormorant.className}`}
          >
            Cultivated with <span className="italic">Precision</span>
            <br />
            Created with <span className="italic">Care</span>
          </h2>
          <div className="max-w-2xl">
            <p
              className={`text-black text-sm md:text-base lg:text-2xl font-normal  leading-7 mb-5 ${montserrat.className}`}
            >
              At Maitri, we believe the future of diamonds isn't found by
              digging deeper into the earth-it's cultivated through human
              ingenuity, scientific precision, and genuine care for the world
              we'll leave behind.
            </p>
               <p
              className={`text-black text-sm md:text-base lg:text-2xl font-normal leading-7 mb-1 ${montserrat.className}`}
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
            <div className="text-center mt-20">
          <div className="flex justify-center mb-3">
            <Image
              src="/images/logo_icon.png"
              alt="MAITRI LAB GROWN DIAMONDS"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          <h3 className={`lg:text-7xl ${cormorant.className}`}>A Chronicle of <span className="italic">Mastery</span></h3>
        </div>

        {/* Or permanent text */}
      </div>
    </>
  );
}
