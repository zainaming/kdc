// src/components/SupportingLivesSection.jsx
import React from 'react';
import suport from '../../assets/apro.png';
import { FaArrowTurnDown } from "react-icons/fa6";
import { GoGoal } from "react-icons/go"; 
import { HiOutlineHeart } from "react-icons/hi2"; 
// Fix: LuCheckSquare ki jagah FiCheckSquare use karein
import { FiCheckSquare } from "react-icons/fi"; 

const SupportingLivesSection = () => {
  const values = [
    "Safety and well-being",
    "Respect and dignity",
    "Individual choice and autonomy",
    "Integrity and confidentiality",
    "Cultural humility and inclusion",
    "Continuous Quality Improvement"
  ];

  return (
    <section className="bg-white py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          
          {/* COLUMN 1: Heading & Text */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">
                Vision & Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2a241f] leading-tight mb-4">
                Supporting Lives with <br /> Care and Compassion
              </h2>
              
              <div className="flex flex-col items-start md:items-center w-full md:w-fit md:ml-28 mb-4">
                 <FaArrowTurnDown className="text-3xl text-[#a4632b]" />
              </div>
            </div>

            <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              <p>
                We believe in the power of clear vision and unwavering dedication.
              </p>
              <p>
                At KDC Serenity Home LLC, our purpose is to provide a safe, supportive, and welcoming home environment where individuals with disabilities are treated with dignity, respect, and compassion.
              </p>
              <p>
                Our approach focuses on promoting independence, well-being, and quality of life while ensuring health, safety, and rights are always protected.
              </p>
            </div>
          </div>
          
          {/* COLUMN 2: Center Image */}
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl w-full">
              <img 
                src={suport} 
                alt="Caregiver supporting individual" 
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
          </div>
          
          {/* COLUMN 3: Mission & Values Cards */}
          <div className="flex flex-col gap-4">
            
            {/* Mission Card */}
            <div className="bg-[#fbf2e6] rounded-[2rem] p-8 shadow-sm">
              <div className="mb-4">
                <GoGoal className="text-4xl text-[#a4632b]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2a241f] mb-4">Our Mission</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                To provide safe, respectful, person-centered residential support services that promote independence, wellness, and quality of life.
              </p>
            </div>
            
            {/* Values Card */}
            <div className="bg-[#fbf2e6] rounded-[2rem] p-8 shadow-sm">
              <div className="mb-4">
                <HiOutlineHeart className="text-4xl text-[#a4632b]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2a241f] mb-4">Our Values</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-500 font-bold text-xs md:text-sm">
                    <FiCheckSquare className="text-[#a4632b] text-lg flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SupportingLivesSection;