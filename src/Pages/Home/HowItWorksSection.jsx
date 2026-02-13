// src/components/HowItWorksSection.jsx
import React from 'react';
import works from '../../assets/Hworks.png';

const HowItWorksSection = () => {
  // Steps data for mapping
  const steps = [
    {
      number: "01",
      title: "Referral or Inquiry",
      description: "Families, support coordinators, or individuals reach out."
    },
    {
      number: "02",
      title: "Eligibility & Authorization Review",
      description: "Services begin only after required approvals are confirmed."
    },
    {
      number: "03",
      title: "Intake & Assessment",
      description: "Needs, goals, and preferences are reviewed."
    },
    {
      number: "04",
      title: "Person-Centered Plan",
      description: "Supports are tailored to the individual."
    },
    {
      number: "05",
      title: "Ongoing Support & Monitoring",
      description: "Regular reviews, communication, and quality checks."
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left: Image - Original Heights */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={works}
              alt="Nurse supporting elderly woman in wheelchair"
              className="w-full h-auto object-cover lg:h-[650px] xl:h-[700px]"
              loading="lazy"
            />
          </div>

          {/* Right: Content Box - Responsive */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative">
            {/* How It Works Button */}
            <button className='px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#2a241f] text-[#2a241f] rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-5'>
              How It Works
            </button>
            
            {/* Heading - Responsive Font Sizes */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2a241f] mb-5 sm:mb-6 leading-tight">
              How We Make It Happen
            </h2>

            {/* Description - Responsive Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#6f7d62] mb-8 sm:mb-10 leading-relaxed">
              We combine careful, personalized support and skilled teamwork to deliver services that meet your needs.
            </p>

            {/* Steps List - Mapped */}
            <ol className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fbf2e6] text-[#a4632b] font-bold flex items-center justify-center text-base sm:text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2a241f] mb-1.5 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6f7d62] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;