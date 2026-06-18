// src/components/EligibilitySection.jsx
import React from 'react';
import eligibilityImage from '../../assets/EligibilitySectionImg.png';

const EligibilitySection = () => {
  // Steps data for mapping
  const steps = [
    {
      title: "Eligibility has been confirmed",
      description: "Before services begin, we verify that the individual meets all eligibility criteria."
    },
    {
      title: "Required Authorizations Are Approved",
      description: "Authorizations, including funding approvals, service authorizations, or insurance coverage, must be secured prior to starting services."
    },
    {
      title: "Intake Assessment Is Completed",
      description: "A comprehensive intake assessment is conducted to understand the individual's needs, preferences, abilities, and goals."
    }
  ];

  return (
    <section className="bg-white py-4 sm:py-4 md:py-4 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left: Content - Fully Responsive */}
          <div className="space-y-6 sm:space-y-8">
            <span className="border-2 border-[#2a241f] text-[#2a241f] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-1 inline-block">
              When Service Begin
            </span>
            
            {/* Heading - Responsive Font Sizes */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a241f] leading-tight">
              Eligibility & Start of Services
            </h2>
            
            {/* Description - Responsive Text */}
            <p className="text-sm sm:text-base text-[#6f7d62] max-w-2xl leading-relaxed">
              Services at KDC Serenity Home LLC begin only after an individual's eligibility and authorization have been confirmed. This ensures that supports are appropriate, safe, and aligned with each person's needs and funding requirements.
            </p>
            
            {/* Steps - Mapped and Responsive */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 sm:mr-4 mt-0.5 sm:mt-1">
                    <div className="bg-[#6f7d62] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2a241f] mb-1.5 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6f7d62] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Image - Fully Responsive */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={eligibilityImage} 
                alt="Caregiver assisting individual in wheelchair" 
                className="w-full h-auto object-cover max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;