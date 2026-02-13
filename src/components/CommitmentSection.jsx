// src/components/CommitmentSection.jsx
import React from 'react';
import commitmentImage1 from '../assets/comm1.png';
import commitmentImage2 from '../assets/comm2.png';
import commitmentImage3 from '../assets/comit3.png';
import commitmentImage4 from '../assets/comit4.png';

const commitmentItems = [
  {
    number: "01",
    title: "Person-centered care",
    description: "We tailor services to each individual's needs, preferences, and goals. Care plans respect personal choice, dignity, and daily routines.",
    image: commitmentImage1
  },
  {
    number: "02",
    title: "Secure documentation",
    description: "All records are maintained securely and confidentially. Access is limited to authorized personnel in compliance with privacy standards.",
    image: commitmentImage2
  },
  {
    number: "03",
    title: "Licensed & compliant services",
    description: "Our services meet all licensing and regulatory requirements. We operate in accordance with applicable laws and care standards.",
    image: commitmentImage3
  },
  {
    number: "04",
    title: "Ethical & transparent practices",
    description: "We act with honesty, accountability, and integrity in all interactions. Our decisions and processes are clear, responsible, and person-focused.",
    image: commitmentImage4
  }
];

const CommitmentSection = () => {
  return (
    <section className="bg-white py-10 sm:py-8 md:py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Header Section - Fully Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="border border-gray-300 text-gray-500 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold  tracking-widest mb-4 sm:mb-5 inline-block">
            Trust & Compliance Band
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight">
            Our Commitment To Trust & Compliance
          </h2>
          <p className="text-gray-500   mx-auto  leading-relaxed">
            We operate with integrity, transparency, and full regulatory compliance in every aspect of our services.
          </p>
        </div>
        
        
        {/* Commitment List - Fully Responsive */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-6xl mx-auto">
          {commitmentItems.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col lg:flex-row items-center gap-5 sm:gap-6 md:gap-8"
            >
              {/* 1. Number Bubble - Responsive Size */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fbf2e6] flex items-center justify-center text-[#a4632b] font-bold text-sm sm:text-lg shadow-sm border border-[#ead5c1]">
                {item.number}
              </div>

              {/* 2. Image Wrapper - Responsive Sizes */}
              <div className="w-full lg:w-[300px] xl:w-[350px] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-44 md:h-48 lg:h-[180px]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 3. Title (Center) - Responsive Text */}
              <div className="w-full lg:w-[200px] xl:w-[220px] flex-shrink-0">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#2a241f] text-center lg:text-left leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* 4. Description (Right) - Responsive Text */}
              <div className="flex-grow mt-3 sm:mt-4 lg:mt-0">
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium text-center lg:text-left">
                  {item.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;