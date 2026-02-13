// src/components/OurApproachSection.jsx
import React from 'react';
import approachImage from '../../assets/apro.png';

const OurApproachSection = () => {
  return (
    <section className="bg-white py-4 sm:py-4 md:py-4 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left: Image - Fully Responsive */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ">
              <img 
                src={approachImage} 
                alt="Caregiver assisting elderly person" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right: Content - Fully Responsive */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Top Tag */}
            <div className="text-center lg:text-left mb-4 sm:mb-5">
              <span className="border-2 border-[#5a4a3a] text-[#5a4a3a] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                OUR APPROACH
              </span>
            </div>
            
            {/* Main Heading - Responsive Font Sizes */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a241f] mb-5 sm:mb-6 leading-tight">
              Person-Centered Service Delivery
            </h2>
            
            {/* Paragraph - Responsive Text */}
            <p className="text-sm sm:text-base text-[#6f7d62] leading-relaxed">
              Our residential and support services are guided by individual assessments, authorized services, and documented person-centered plans. Each individual's needs, preferences, abilities, and goals are carefully reviewed to ensure supports are appropriate, effective, and aligned with required authorizations.
              <br />
              <br />

              Supports are designed to respect personal choice, promote independence, and ensure safety at all times. We encourage active participation in daily routines and decision-making while providing the level of assistance necessary to maintain health, well-being, and stability.
              <br />
              <br />

              Services are delivered by trained and screened staff who follow established policies, safety standards, and quality assurance practices. Ongoing monitoring, documentation, and communication help ensure services remain responsive to changing needs. Plans are reviewed regularly, and supports are adjusted as needed in collaboration with the individual served, their support network, and authorized professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;