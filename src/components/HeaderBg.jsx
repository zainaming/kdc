import React from 'react';

const PageHeader = ({ label, title, description, lastUpdated, backgroundImage }) => {
  return (
    <section 
      className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Light Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/20"></div> */}
      
      {/* Content Container - Balanced Padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full pt-12 sm:pt-16">
        
        {/* Label - SS Style Capsule */}
        {label && (
          <div className="inline-block bg-[#A4632B]/70 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6">
            <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest">
              {label}
            </span>
          </div>
        )}
        
        {/* Title - Bold Black */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#1A1A1A]/80 mb-4 sm:mb-5 max-w-xl leading-tight">
          {title}
        </h1>
        
        {/* Description - Readable Black */}
        <p className="text-black/70 text-xs sm:text-sm md:text-base max-w-xl mb-2 leading-relaxed font-medium">
          {description}
        </p>
        
        {/* Last Updated */}
        {lastUpdated && (
          <p className="text-black/60 font-bold text-[10px] sm:text-xs md:text-sm mt-2">
            {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;