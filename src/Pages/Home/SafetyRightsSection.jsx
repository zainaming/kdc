// src/components/SafetyRightsSection.jsx
import React from 'react';

import zeroToleranceImg from '../../assets/mission.png';     
import emergencyImg from '../../assets/safetysection2.png';   
import privacyImg from '../../assets/safetysection3.png'; 

const cards = [
  {
    title: "Zero Tolerance Policy",
    description: "No abuse, neglect, exploitation, harassment, intimidation, or retaliation. Allegations are reported promptly to protect individuals served.",
    image: zeroToleranceImg,
  },
  {
    title: "Emergency Readiness",
    description: "Emergency management plans. Documented drills and improvement debriefs. Infection prevention and control practices.",
    image: emergencyImg,
  },
  {
    title: "Privacy & Confidentiality",
    description: "Records are safeguarded in paper and electronic formats and shared only as authorized by consent or law (minimum necessary).",
    image: privacyImg,
  },
];

const SafetyRightsSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#6f7d62] text-[#6f7d62] rounded-full text-xs sm:text-[16px] font-bold shadow-sm font-sans">
            Health, Safety & Rights
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center text-[#2A241F] mb-3 sm:mb-4 font-sans tracking-tight">
          Your Health, Safety & Legal Rights
        </h2>

        {/* Subheading */}
        <p className="text-xs sm:text-sm md:text-[16px] text-[#6A5E54] text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 font-sans">
          Find information about your health protection, personal safety, legal rights and how to raise concerns or complaints.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[480px] flex flex-col transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Overlay - Adjusted to be darker at bottom for text clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-10 text-white">
                
                {/* Heading with fixed minimum height for alignment */}
                <h3 className="text-xl sm:text-2xl md:text-[24px] text-[#ffffff] font-extrabold text-center mb-2 sm:mb-3 drop-shadow-md font-sans min-h-[3rem] flex items-center justify-center">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-[16px] text-[#ffffff] text-center leading-relaxed drop-shadow-md opacity-90 font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyRightsSection;