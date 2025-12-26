import Image from "next/image";
import { cormorant, montserrat } from "../font";


const Card = () => {
  return (
    <div >
      {/* The Maitri Promise Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className={`text-[#C8A35D] text-2xl font-bold tracking-[0.3em] mb-4 ${montserrat.className}`}>
              THE
            </h2>

           <Image src="/images/Vector.png" alt="MAITRI" width={100} height={50} className="mx-auto mb-4"/>

            <h2 className={`text-[#C8A35D] text-2xl font-bold tracking-[0.3em] ${montserrat.className}`}>
              PROMISE
            </h2>

            <div className="w-72 h-px bg-gradient-to-r from-transparent via-[#C8A35D] to-transparent mx-auto mt-10"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">

            {/* Card 1 */}
            <div>
              <div className="relative h-[260px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/four_our_planet.png"
                  alt="For our planet"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="px-6 pt-8 text-center">
                <h3 className={`text-lg font-semibold tracking-wide mb-4 ${montserrat.className}`}>
                  FOR OUR PLANET
                </h3>

                <p className={`text-gray-600 leading-relaxed mb-8 ${montserrat.className}`}>
                  Mining moves 1,000 tons of earth per carat. We move zero.
                  Climate-neutral operations, SCS-007 certified, proving luxury and
                  sustainability are inseparable.
                </p>

                <button className={`bg-black text-white px-8 py-3 text-xs tracking-widest rounded-full hover:bg-gray-800 transition ${montserrat.className}`}>
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative h-[260px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/People.png"
                  alt="For our people"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="px-6 pt-8 text-center">
                <h3 className={`text-lg font-semibold tracking-wide mb-4 ${montserrat.className}`}>
                  FOR OUR PEOPLE
                </h3>

                <p className={`text-gray-600 leading-relaxed mb-8 ${montserrat.className}`}>
                  Our Mumbai labs employ scientists, artisans, and skilled workers.
                  These aren't assembly lines—they're labs where human expertise
                  meets cutting-edge technology.
                </p>

                <button className={`bg-black text-white px-8 py-3 text-xs tracking-widest rounded-full hover:bg-gray-800 transition ${montserrat.className}`}>
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <div className="relative h-[260px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/community.png"
                  alt="For our communities"
                  fill
                  className="object-cover object-center mt-5"
                />
              </div>

              <div className="px-6 pt-8 text-center">
                <h3 className={`text-lg font-semibold tracking-wide mb-4 ${montserrat.className}`}>
                  FOR OUR COMMUNITIES
                </h3>

                <p className={`text-gray-600 leading-relaxed mb-8 ${montserrat.className}`}>
                  The MAITRI Foundation channels 2% of annual revenue into
                  education, healthcare, and empowerment programs in the
                  communities where our craftspeople live and work.
                </p>

                <button className={`bg-black text-white px-8 py-3 text-xs tracking-widest rounded-full hover:bg-gray-800 transition ${montserrat.className}`}>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We're Making Change Section */}
      <div className="py-20 px-4" style={{backgroundColor: '#F5F2EB'}}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Gold Diamond Icon */}
          <div className="flex justify-center mb-8 h-10">
            {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L30 15L20 35L10 15L20 5Z" fill="#C8A35D" stroke="#C8A35D" strokeWidth="1"/>
            </svg> */}
            <img src="images/logo_icon.png" alt="" />
          </div>

          {/* Title */}
          <h2 className={`  text-4xl md:text-5xl mb-6 ${cormorant.className}`}>
            <span className="font-light">How We're </span>
            <span className="italic font-serif">Making Change</span>
          </h2>

          {/* Subtitle */}
          <p className={`text-gray-700 text-lg mb-2 ${cormorant.className}`}>
            Stepping away from depletion towards cultivation.
          </p>
          <p className={`text-gray-700 text-lg ${cormorant.className}`}>
            <span className="italic">From taking to giving back.</span> From scarcity mindset to abundance through innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;