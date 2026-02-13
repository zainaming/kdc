import React from 'react';

const steps = [
  {
    number: "01",
    title: "Initial Contact",
    description: "Call or email us to discuss needs, ask questions, and learn how our services may support you or your family member."
  },
  {
    number: "02",
    title: "Eligibility & Authorization",
    description: "We confirm eligibility, funding sources, and required approvals to ensure services can be provided appropriately."
  },
  {
    number: "03",
    title: "Intake Assessment",
    description: "We review goals, preferences, strengths, and potential risks to understand the individual's needs holistically."
  },
  {
    number: "04",
    title: "Person-Centered Plan",
    description: "Supports are tailored to the individual, reflecting personal goals, routines, choices, and authorized services."
  },
  {
    number: "05",
    title: "Ongoing Support & Review",
    description: "We provide continuous support, regular monitoring, and quality checks to ensure services remain effective and appropriate."
  }
];

const StepsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex justify-center mb-6">
          <span className="border border-gray-300 text-gray-500 px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white">
            How It Works
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a241f] max-w-4xl mx-auto leading-tight">
            Simple Steps. Clear Support.  Person-<br />Centered Care.
          </h2>
        </div>
        
        {/* Steps List Container */}
        <div className="max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start mb-12 last:mb-0 group"
            >
              {/* Number Bubble - Left side */}
              <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#fbf2e6] flex items-center justify-center text-[#a4632b] font-bold text-sm md:text-lg shadow-sm border border-[#ead5c1] z-10">
                {step.number}
              </div>

              {/* Vertical Connector Line (Design touch) */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[20px] md:left-[27px] top-[40px] md:top-[56px] w-[2px] h-[calc(100%-20px)] bg-[#f3e3d3] -z-0"></div>
              )}
              
              {/* Content Area */}
              <div className="ml-6 md:ml-10 pt-1 md:pt-3">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  {/* Decorative Brown Dot */}
                  <div className="w-2.5 h-2.5 bg-[#a4632b] rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#2a241f]">
                    {step.title}
                  </h3>
                </div>
                
                {/* Description with left border line from image */}
                <div className="border-l-[3px] border-[#f3e3d3] pl-6 md:pl-8 mt-2">
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;