// src/components/QualitySection.jsx
import React from 'react';
import Q1 from '../../assets/q1.jpg'; 
import Q2 from '../../assets/q2.jpg'; 
import Q3 from '../../assets/q3.jpg'; 

// Error fix: LuCheckSquare ki jagah FiCheckSquare ya HiCheck istemal karein
import { FiCheckSquare } from "react-icons/fi"; 

const cards = [
  {
    title: "Training & Competency",
    image: Q1,
    items: [
      "Pre-service orientation before independent work",
      "Annual refreshers (rights, confidentiality, incident reporting)",
      "CPR / First Aid and role-specific competency validation"
    ]
  },
  {
    title: "Training & Competency",
    image: Q2,
    items: [
      "Corrective action planning and follow-up re-audits",
      "Required background screening prior to unsupervised access",
      "Quarterly internal audits and annual satisfaction surveys"
    ]
  },
  {
    title: "Incident Management",
    image: Q3,
    items: [
      "Immediate response, factual documentation, and external reporting within required timeframes when applicable.",
      "All incidents are promptly reported and accurately documented to ensure transparency."
    ]
  },
];

const QualitySection = () => {
  return (
    <section className="bg-[#fbf2e6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-8 md:mb-10 items-center">
          <div className="text-left">
            <span className="border border-[#6f7d62] text-[#6f7d62] px-4 py-1.5 rounded-full text-xs font-bold  tracking-wide mb-6 inline-block">
              Quality & Accountability
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#2a241f] leading-tight mb-6">
              Our Quality & Accountability<br className="hidden md:block" />  Promise
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-lg leading-relaxed font-medium">
              We are committed to delivering the highest standards of care through transparent practices, continuous improvement, and accountability.
            </p>
          </div>
          
          <QualityCard card={cards[0]} />
        </div>
        
        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {cards.slice(1, 3).map((card, index) => (
            <QualityCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityCard = ({ card }) => (
  <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100/50">
    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center h-full">
      <div className="w-full sm:w-[45%] flex-shrink-0">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-sm"
        />
      </div>
      
      <div className="w-full sm:w-[55%]">
        <h3 className="text-xl md:text-xl font-bold text-[#2a241f] mb-4">
          {card.title}
        </h3>
        <ul className="space-y-4">
          {card.items.map((item, i) => (
            <li className="flex items-start gap-3" key={i}>
              {/* Updated Icon */}
              <FiCheckSquare className="text-[#a4632b] text-xl mt-0.5 flex-shrink-0" />
              <span className="text-gray-500 text-xs md:text-sm font-semibold leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default QualitySection;