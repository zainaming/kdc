// src/components/ReadySection.jsx
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReadySection = () => {
  return (
    <section className="bg-[#f9f2e9] py-8 lg:py-10 mx-10 rounded-3xl mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 relative">
        
        {/* Paper Plane Decorations */}
        <div className="absolute top-0 left-0 opacity-20">
          <FaPaperPlane size={60} color="#a4632b" />
        </div>
        <div className="absolute top-0 right-0 opacity-20 rotate-180">
          <FaPaperPlane size={60} color="#a4632b" />
        </div>
        
        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2a241f] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#6f7d62] mb-8">
            Reach out to begin the conversation or learn more about our services.
          </p>
          
          <div  className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="bg-[#a4632b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8c5223] transition-colors">
              Contact Us →
            </Link>
            <Link to="/services" className="border-2 border-[#a4632b] text-[#a4632b] px-8 py-3 rounded-full font-medium hover:bg-[#f9f2e9] transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;