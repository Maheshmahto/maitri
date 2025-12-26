import { montserrat,cormorant } from "../../app/font";


export default function Q2() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      {/* Title */}
      <h1
        className={`text-white  text-3xl md:text-5xl lg:text-5xl tracking-wide ${cormorant.className} `}
      >
        Our Scientific Mastery.Multiple Applications.
        {/* <span className="block mt-2"></span> */}
      </h1>

      {/* Divider */}
      
      <div className="mt-10 mb-10">
        <img src="/images/Line 14.png" alt="" />
      </div>

      {/* Subtitle */}
      <h2
        className={`text-white text-3xl mb-6 font-semibold tracking-[0.3em] ${montserrat.className} `}
      >
        OUR PURPOSE
      </h2>

      {/* Description */}
      <p
        className={`text-gray-300 max-w-7xl text-sm md:text-xl leading-relaxed ${montserrat.className}`}
      >
        What we have built in CVD cultivation extends beyond luxury alone.
        <br />
        Our mastery serves the world of jewelry, but also aerospace, quantum
        computing and industrial innovation.
        <br />
        The same precision that creates beauty creates possibility.
      </p>

      {/* Logo */}
      <div className="mt-16 flex flex-col items-center">
        <img src="/images/Q2.png" height={195} width={184}></img>
      </div>

      {/* Footer */}
      <p
        className={` tracking-[0.3em] text-[18px] font-semibold text-white ${montserrat.className}`}
      >
        MULTIPLE APPLICATIONS
      </p>
    </main>
  );
}
