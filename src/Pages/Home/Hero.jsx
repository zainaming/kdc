// src/components/Hero.jsx
import React from "react";
import hero from "./../../assets/hero2.png";
import { Link } from "react-router-dom";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineTimer } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="bg-[#fbf2e6]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Small tag */}
            <div className="inline-block text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-[#A4632B]/30 text-[#8b6f47] rounded-full font-medium">
              Person-Centered Residential Support
            </div>

            {/* Main Heading - Responsive font sizes */}
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2a241f]">
              A Safe and <br className="hidden sm:block" />
              <span className="text-[#A4632B]">Supportive</span> Place to{" "}
              <br className="hidden sm:block" />
              Call Home
            </h1>

            {/* Description - Responsive text */}
            <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl leading-relaxed">
              Person centered residential services for adults with developmental
              disabilities — built on dignity, safety, and choice.
            </p>

            {/* Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/get-started"
                className="px-6 sm:px-8 py-3 bg-[#A4632B] hover:bg-[#A4632B]/80 text-white font-semibold rounded-full text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A4632B] focus:ring-offset-2"
                aria-label="Get started with our services"
              >
                Get Started →
              </Link>
            </div>

            {/* Trust badges - Responsive wrapping */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 text-[#2a241f] font-semibold text-xs sm:text-sm">
                <HiOutlineShieldCheck className="text-[#a4632b] text-lg sm:text-xl" />
                <span className="hidden sm:inline">HIPAA</span> Compliant
              </div>
              <div className="flex items-center gap-2 text-[#2a241f] font-semibold text-xs sm:text-sm">
                <RiShieldKeyholeLine className="text-[#a4632b] text-lg sm:text-xl" />
                256-bit Encryption
              </div>
              <div className="flex items-center gap-2 text-[#2a241f] font-semibold text-xs sm:text-sm">
                <MdOutlineTimer className="text-[#a4632b] text-lg sm:text-xl" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Image Section - Fixed for mobile */}
          <div className="relative order-1 lg:order-2 ">
         <div className="overflow-hidden h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
  <img
    src={hero}
    alt="Caregiver assisting senior woman in wheelchair"
    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
    loading="lazy"
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
