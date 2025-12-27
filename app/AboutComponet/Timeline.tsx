import Image from "next/image";
import { montserrat,cormorant } from "../../app/font";
const Timeline = () => {
  return (
    <div className="relative w-full">
      {/* Single Timeline Image */}
      <Image
        src="/images/Timeline_1 2.png"
        alt="Timeline"
        width={1920}
        height={2400}
        className="w-full"
      />

<div className="absolute top-10 left-36 flex flex-col items-start justify-center ">
        <h1 className={`text-black lg:text-4xl 2xl:text-4xl font-semibold mb-10 tracking-[0.15em] ${montserrat.className}`}>2012</h1>
        <h1 className={`text-[#7A7161] lg:text-5xl 2xl:text-5xl font-medium ${cormorant.className}`}>
          The Enquiry  <span className="italic">Begins</span>
        </h1>
        <p
  className={`text-[#8B7969] text-lg font-normal opacity-80 mt-6 max-w-[598px]  leading-[25px] tracking-[0.02em] whitespace-normal break-words
  ${montserrat.className}`}
>
  A small team believed diamonds could be created with care instead of
  extraction. They didn't know if it was possible-only that the world
  needed an alternative. It began with curiosity, uncertainty, and a
  conviction that there had to be a better way.
</p>

      </div>

      {/* 2014 Section Text Overlay */}
      <div className="absolute top-[26%] right-[8%] max-w-xl">
        <h1 className={`text-white lg:text-4xl 2xl:text-4xl font-semibold mb-10 tracking-[0.15em] ${montserrat.className}`}>2014</h1>
        <h2 className={`text-[#C9A876] text-4xl mb-4 font-medium ${cormorant.className}`}>
          First <span className="italic">Brilliance</span>
        </h2>
        <p
  className={`text-[#C9A876] text-base font-normal leading-[28px] tracking-[0.02em] max-w-[550px] whitespace-normal break-words
  ${montserrat.className}`}
>
  After countless experiments, brilliance emerged. Carbon atoms, guided by
  human hands and scientific precision, crystallized into our first diamond.
  The moment when science became artistry.
</p>

      </div>

      {/* 2018 Section Text Overlay */}
      <div className="absolute top-[45%] left-[8%] max-w-xl">
        <h1 className={`text-black lg:text-4xl 2xl:text-4xl font-semibold mb-10 tracking-[0.15em] ${montserrat.className}`}>2018</h1>
        <h2 className={`text-[#7A7161] text-4xl mb-4 font-medium ${cormorant.className}`}>
          Rare <span className="italic">Beauty</span>
        </h2>
        <p className={`text-[#8B7969] text-base leading-relaxed font-normal ${montserrat.className}`}>
          Pink diamonds occur naturally once in millions. Our team cultivated one at 5.01 carats, GIA certified-the largest lab-grown pink ever created. A quiet milestone in understanding how color and structure intertwine at the atomic level.
        </p>
      </div>

      {/* 2021 Section Text Overlay */}
      <div className="absolute top-[65%] right-[8%] max-w-xl">
        <h1 className={`text-black lg:text-4xl 2xl:text-4xl font-semibold mb-10 tracking-[0.15em] ${montserrat.className}`}>2021</h1>
        <h2 className={`text-[#8B7969] text-4xl mb-4 font-medium ${cormorant.className}`}>
          <span className="italic">Global</span> Recognition
        </h2>
        <p
  className={`text-[#8B7969] text-base font-normal
  leading-[28px]
  tracking-[0.02em]
  max-w-[580px]
  text-justify
  whitespace-normal break-words
  ${montserrat.className}`}
>
  Our diamonds reached discerning partners across five continents a fivefold
  increase in exports that spoke not to aggressive expansion, but to earned
  trust. The industry recognized that cultivated diamonds, when crafted with
  uncompromising standards, deserved equal reverence.
</p>


      </div>

      {/* 2025 Section Text Overlay */}
      <div className="absolute top-[85%] left-[8%] max-w-xl">
        <h1 className={`text-black lg:text-4xl 2xl:text-4xl font-semibold mb-10 tracking-[0.15em] ${montserrat.className}`}>2025</h1>
        <h2 className={`text-[#7A7161] text-4xl mb-4 font-medium ${cormorant.className}`}>
          Where Science <span className="italic">Meets Artistry</span>
        </h2>
        <p
  className={`text-[#8B7969] text-base font-normal  leading-[28px]  tracking-[0.02em]  max-w-[600px]  text-justify  whitespace-normal break-words
 ${montserrat.className}`}
>
  We complete the vision: our luxury jewelry line proves we don't just grow
  diamonds, we understand beauty at every level. From atomic precision to
  artistic vision, vertical integration in service of art.
</p>

      </div>
    </div>
  );
};
export default Timeline;