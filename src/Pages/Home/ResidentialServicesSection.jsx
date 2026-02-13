// src/components/ResidentialServicesSection.jsx
import React from 'react';
import { FaArrowTurnDown } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2"; // Person-Centered
import { PiHouseLineBold } from "react-icons/pi"; // Daily Living
import { MdOutlinePsychology } from "react-icons/md"; // Skill Building
import { RiProgress3Line } from "react-icons/ri"; // Choice & Routines
import { PiFilesBold } from "react-icons/pi"; // Secure Records

const services = [
  {
    title: "Person-Centered Planning",
    description: "Person-centered planning & implementation Individualized planning designed around each person's needs, goals, and preferences, with coordinated implementation that supports meaningful outcomes.",
    icon: <HiOutlineGlobeAlt size={45} className="text-[#a4632b]" />,
  },
  {
    title: "Daily Living Support",
    description: "Daily living supports aligned with authorized services. We provide daily living supports aligned with authorized services, ensuring care plans are implemented accurately while respecting individual needs, choices, and routines.",
    icon: <PiHouseLineBold size={45} className="text-[#a4632b]" />,
  },
  {
    title: "Skill-Building & Independence",
    description: "We focus on skill-building and promoting independence, helping individuals develop abilities that support daily living and personal growth. Our approach respects each person's choices while providing the guidance",
    icon: <MdOutlinePsychology size={45} className="text-[#a4632b]" />,
  },
  {
    title: "Individual Choice & Routines",
    description: "We prioritize and respect each individual's choices and daily routines, ensuring that support is personalized and empowering. Our approach values personal and integrates individual decisions into all aspects of care.",
    icon: <RiProgress3Line size={45} className="text-[#a4632b]" />,
  },
  {
    title: "Secure Records Management",
    description: "We ensure secure records, maintaining accurate and confidential documentation at all times. Our approach protects sensitive information, and guarantees that records are safely stored only to authorized personnel.",
    icon: <PiFilesBold size={45} className="text-[#a4632b]" />,
  },
];

const ResidentialServicesSection = () => {
  return (
    <section className="bg-[#fbf2e6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-4">
             <div className='px-5 py-1.5 border border-[#2a241f] text-[#2a241f] inline-block rounded-full mb-6 font-medium text-sm'>
                Our Services
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-[#2a241f] leading-tight mb-6">
               Residential & <br className="hidden md:block"/> Support Services
             </h2>
             
             <div className="flex flex-col items-start">
                <FaArrowTurnDown className="text-4xl text-[#a4632b] mb-4 ml-24" />
                <p className="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
                  All services are delivered according to assessed needs and documented person-centered plans.
                </p>
             </div>
          </div>

          {/* Service Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Row (2 Cards) */}
              {services.slice(0, 2).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(2).map((service, index) => (
            <ServiceCard key={index + 2} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Reusable Card Component to keep code clean
const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start text-left h-full">
    <div className="mb-6">
      {service.icon}
    </div>
    <h3 className="text-xl font-extrabold text-[#2a241f] mb-4">
      {service.title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">
      {service.description}
    </p>
  </div>
);

export default ResidentialServicesSection;