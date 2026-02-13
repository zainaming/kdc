// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../../Data/serviceData';
import TestimonialsSection from '../../components/TestimonialsSection';
import ReadySection from '../About/ReadySection';
import { ImageOff } from 'lucide-react';
import testD from '../../assets/testD.png';
import { IoIosArrowForward } from 'react-icons/io';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const relatedServices = servicesData.filter(s => s.id !== id).slice(0, 3);
  const testimonials = [
    {
      id: 1,
      quote: "The team has been incredible in supporting my son's daily routine and helping him develop new skills. Their person-centered approach makes all the difference, and I always feel informed and respected.",
      name: "Sarah M",
      location: "Chicago, IL",
      image: testD
    },
    {
      id: 2,
      quote: "We are so grateful for the compassionate care and attention to detail. The support workers truly understand our daughter's needs and make every day better.",
      name: "Michael R",
      location: "Austin, TX",
      image: testD
    }
  ];

  if (!service) {
    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2a241f] mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#a4632b] hover:underline">
            ← Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 sm:py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className=" mt-8 sm:mt-20">
          <Link 
            to="/services" 
            className="text-[#A4632B] font-bold inline-flex items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base transition-colors focus:outline-none"
            aria-label="Back to Blogs"
          >
            <span className='text-black font-bold'>Services</span> <IoIosArrowForward /> Service Detail
          </Link>
        </div>
        
        {/* Top Section: Header & Image */}
        <div className="bg-white rounded-xl overflow-hidden mb-6 sm:mb-8">
          <div className="text-center mb-4 sm:mb-6">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 text-[#A4632B] bg-[#EDE0D5] inline-block rounded-full mb-3 sm:mb-4">
              Service Detail
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a241f] leading-tight">
              {service.title}
            </h1>
          </div>
           
          <div className="h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          
          {/* LEFT COLUMN (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* 1. What It Means Section */}
            <div className="bg-white p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight tracking-tight">
                What {service.title} Means
              </h2>
              <p className="text-sm sm:text-base text-[#6f7d62] leading-relaxed">
                {service.whatItMeans}
              </p>
            </div>
            
            {/* 2. How We Support Section */}
            <div className="bg-white p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight tracking-tight">
                How We Support Individual Choice
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {service.howWeSupport.map((item, index) => (
                  <div key={index} className="pb-3 sm:pb-4 last:pb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#6f7d62] mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6a5e54] leading-relaxed border-l-4 border-[#a4632b] pl-3 sm:pl-4">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. What's Included Section - MOVED HERE TO FILL SPACE */}
            <div className=" p-5 sm:p-6 md:p-8 ">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2a241f] mb-4 sm:mb-5 leading-tight">
                What's Included 
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3 sm:gap-4">
                {service.whatsIncluded.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 sm:p-5 bg-[#f9f2e6] rounded-lg"
                  >
                    <div className="bg-[#a4632b] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#2a241f] font-bold text-sm sm:text-base mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-[#6f7d62] text-xs sm:text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Testimonials */}
            <div className="bg-white p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight tracking-tight">
                What Our Families Say
              </h2>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-[#fbf2e6] px-3 sm:px-4 py-5 sm:py-6 rounded-xl"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-[#6f7d62] italic mb-3 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#a4632b]">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#6f7d62]">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Other Services */}
            <div className="bg-white rounded-xl p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2a241f] mb-3 sm:mb-4 leading-tight tracking-tight">
                Other Services
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {relatedServices.map((service, index) => (
                  <Link 
                    key={index}
                    to={`/services/${service.id}`}
                    className="flex items-start border-b border-gray-200 pb-3 last:border-b-0 hover:bg-[#f9f2e9] rounded-lg p-2 transition-colors group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 overflow-hidden rounded-lg mr-3">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#2a241f] mb-1 line-clamp-2 group-hover:text-[#a4632b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6f7d62] line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 sm:mt-5">
                <Link to="/services" className="block">
                  <button className="w-full bg-[#a4632b] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#8c5223] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a4632b]">
                    View All Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <ReadySection />
    </section>
  );
};

export default ServiceDetail;