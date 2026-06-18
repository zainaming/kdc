// src/components/AboutMissionSection.jsx
import React from "react";
import aboutImage from "../../assets/missionimg.svg";

import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const AboutMissionSection = () => {
  // Values array for mapping
  const values = [
    "Safety and well-being",
    "Respect and dignity",
    "Individual choice and autonomy",
    "Integrity",
    "Cultural humility and inclusion",
  ];

  return (
    <section className="bg-white py-4 sm:py-6 md:py-8 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: Image - Fully Responsive */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <img
              src={aboutImage}
              alt="Caregiver supporting man in wheelchair"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content Box - Fully Responsive */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* About Us Tag */}
            <div className="inline-block mb-5 sm:mb-6">
              <span className="px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[#6f7d62] text-[#6f7d62] rounded-full text-sm sm:text-base font-medium">
                About Us
              </span>
            </div>

            {/* Heading - Responsive Font Sizes */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a241f] mb-5 sm:mb-6 leading-tight">
              Our Mission & Values
            </h2>

            {/* Mission Text - Responsive */}
            <p className="text-base sm:text-lg text-[#6A5E54] mb-8 sm:mb-1 leading-relaxed">
              KDARHope Serenity Home provides a welcoming, person-centered
              environment where residents are supported in building
              independence, developing life skills, participating in community
              activities, and enjoying a meaningful quality of life. Owned and
              operated by a Registered Nurse and Board-Certified Psychiatric
              Mental Health Nurse Practitioner, our home offers an added level
              of healthcare knowledge, advocacy, and individualized support.
            </p>

            {/* Values List - Responsive Spacing with Map */}
            <div className="mb-8 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold text-[#2a241f] mb-2 sm:mb-6">
                Our Values
              </h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-[#a4632b] text-lg sm:text-xl flex-shrink-0 mt-0.5">
                      <MdOutlineLibraryAddCheck />
                    </span>
                    <span className="text-base sm:text-lg text-[#6A5E54]">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button - Responsive */}
            <Link
              to="/about-us"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#A4632B] hover:bg-[#8B5224] text-white font-semibold rounded-full text-base sm:text-lg 
                        transition-colors shadow-md hover:shadow-lg 
                        focus:outline-none focus:ring-2 focus:ring-[#a4632b] focus:ring-offset-2"
              aria-label="Learn more about our mission and values"
            >
              Learn More <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
