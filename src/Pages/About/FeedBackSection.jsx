// src/components/FeedBackSection.jsx
import React from 'react';
import suport from '../../assets/teamM1.png';

const FeedBackSection = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className=" mx-auto">
        
        {/* MAIN CONTAINER: TWO COLUMNS (IMAGE + TEXT) */}
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT: IMAGE (with proper aspect ratio) */}
          <div className="lg:w-1/2 flex items-center  justify-center overflow-hidden">
            <img 
              src={suport} 
              alt="Claudia Porter-Lawrence" 
              className="w-full h-auto object-cover max-h-[500px] lg:max-h-none"
              loading="lazy"
            />
          </div>
          
          {/* RIGHT: TEXT CONTENT (Beige background) */}
          <div className="lg:w-1/2 bg-[#fbf2e6] p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
            
            {/* Quote Content */}
            <div className="relative">
              {/* Opening Quote Mark */}
              <div className="text-[#6f7d62] text-4xl md:text-5xl font-serif absolute -top-4 -left-4 z-10">
                "
              </div>
              
              {/* Quote Text */}
              <p className="text-[#5a5a5a] text-sm sm:text-base md:text-lg leading-relaxed font-medium pl-4">
                The leadership of KDC Serenity Home LLC is committed to fostering a safe, respectful, and person-centered environment where individuals with disabilities are supported to live with dignity, independence, and purpose. Our vision is to lead with integrity, accountability, and compassion, ensuring that all services meet the highest standards of quality, safety, and ethical care. Through collaborative leadership, continuous improvement, and a strong commitment to rights protection, we strive to create a supportive residential setting where individuals, families, and staff feel valued, heard, and empowered.
              </p>
              
              {/* Closing Quote Mark */}
              <div className="text-[#6f7d62] text-5xl md:text-6xl font-serif absolute -bottom-8 right-80 z-10">
                "
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 sm:mt-14 pt-6  ">
              <p className="font-extrabold text-[#a4632b] text-lg sm:text-xl">
                Claudia Porter-Lawrence
              </p>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm mt-1 uppercase tracking-wider">
              Owner/Administrator/ Direct Care Staff (DSP)
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeedBackSection;