// src/components/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../Data/serviceData';

const ServicesSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="border-2 border-[#2a241f] text-[#2a241f] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-medium mb-3 sm:mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight">
            What Our Services Include
          </h2>
          <p className="text-sm sm:text-base text-[#6f7d62] max-w-3xl mx-auto leading-relaxed">
            All services are delivered according to assessed needs and documented person-centered plans.
          </p>
        </div>
        
        {/* Services Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image - Responsive Height */}
              <div className="h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Content - Responsive Padding */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2a241f] mb-2 sm:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6f7d62] mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-[#a4632b] font-semibold text-sm sm:text-base hover:text-[#8B5224] transition-colors group/link"
                  aria-label={`View details about ${service.title}`}
                >
                  View Details
                  <span className="ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;