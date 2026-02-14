// src/components/TestimonialsSection.jsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import testi1 from '../assets/testM.png'

const testimonials = [
  {
    name: "Sarah M",
    location: "Florida",
    quote: "“The team has been incredible in supporting my son's daily routine and helping him develop new skills. Their person-centered approach makes all the difference, and I always feel informed and respected.”",
    image: testi1,
  },
  {
    name: "Michael R",
    location: "Austin, TX",
    quote: "“We are so grateful for the compassionate care and attention to detail. The support workers truly understand our daughter's needs and make every day better.”",
    image: testi1,
  },
  {
    name: "Emily T",
    location: "New York, NY",
    quote: "“The coordinators are exceptional at creating personalized plans. Our family feels heard, supported, and confident in the care provided.”",
    image: testi1,
  },
  {
    name: "David K",
    location: "Seattle, WA",
    quote: "“The support we received was life-changing. Every team member showed genuine care and dedication to our family's needs.”",
    image: testi1,
  },
  {
    name: "Jennifer L",
    location: "Boston, MA",
    quote: "“I appreciate how they listen to our concerns and adapt quickly. The communication is always clear and compassionate.”",
    image: testi1,
  },
  {
    name: "Robert P",
    location: "Denver, CO",
    quote: "“Their commitment to quality care shines through in every interaction. We couldn't be happier with the support we've received.”",
    image: testi1,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARENT GRID - 2 COLUMNS ON MD/LG, 1 COLUMN ON SM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* COLUMN 1: TEXT CONTENT */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 border-2 border-[#2a241f] text-[#2a241f] rounded-full text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Stories From Families We've Helped
            </h2>
            <p className="text-lg text-gray-600">
              Discover real-life experiences from families who have benefited from our services. These stories highlight the impact of personalized care, support, and guidance.
            </p>

             <div className="flex justify-start gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white border border-[#a4632b] shadow-sm flex items-center justify-center hover:bg-[#a4632b] transition-colors text-[#a4632b] hover:text-white"
              >
                <FaArrowLeft className="text-lg" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-[#a4632b] border border-[#a4632b] shadow-sm flex items-center justify-center hover:bg-[#a4632b] transition-colors text-white hover:text-white"
              >
                <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>


          {/* COLUMN 2: SINGLE TESTIMONIAL (IMAGE + CONTENT IN ONE ROW) */}
          <div className="space-y-8">
            
            {/* TESTIMONIAL GRID - IMAGE + CONTENT SIDE BY SIDE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* IMAGE CARD */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl ">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-96 md:h-96 lg:h-96 object-cover"
                />
              </div>
              
              {/* CONTENT CARD */}
              <div className="bg-[#fbf2e6] rounded-2xl p-6 flex flex-col justify-center">
                <div className="text-gray-800 text-base md:text-lg italic leading-relaxed mb-6  pl-4 py-1">
                  {current.quote}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{current.name}</h3>
                  <p className="text-gray-600">{current.location}</p>
                </div>
              </div>
              
            </div>

            {/* ARROWS BELOW TESTIMONIAL */}
           
            
            {/* INDICATOR DOTS */}
            {/* <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;