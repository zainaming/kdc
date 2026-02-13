// src/components/OurTeamSection.jsx
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
 
import team2 from '../assets/teamM1.png'
import team3 from '../assets/teamM2.jpg'

const teamMembers = [
  {
    name: "Zane Sorell",
    role: "Care Coordinators",
    desc: "Our care coordinators plan and manage daily support tailored to each individual.",
  
      image: team2,
  },
  {
    name: "Zane Sorell",
    role: "Support Workers",
    desc: "Skilled support workers assist with daily living activities, mobility, and skill-building.",
    image: team3,
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white py-16 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-block px-7 py-2 border-2 border-[#2a241f] text-[#2a241f] rounded-full text-lg font-medium">
            Our Team
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center text-[#2a241f] mb-4">
          Meet Our Team Members
        </h2>

        {/* Sub Description */}
        <p className="text-xl text-[#7c7066] text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          We Focus on the details of everything we do. All to help businesses around the world
        </p>

        {/* Team Cards - 2 cards only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-2xl  w-full mx-auto"
            >
              {/* Background Image - full card bg */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[500px] md:h-[530px] lg:h-[600px] "
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content Card - bottom se thoda upar overlap karta hua */}
              <div className="absolute bottom-20 left-0 right-0 bg-[#fbf2e6] rounded-3xl p-6 lg:p-8transform translate-y-10 lg:translate-y-12 shadow-2xl mx-5">
                <h3 className="text-2xl font-bold text-[#2a241f] mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-[#a4632b] mb-2">
                  {member.role}
                </p>
                <p className="text-[#7c7066] leading-relaxed mb-4">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="flex justify-start gap-6">
                  <a href="#" className="text-[#a4632b] hover:text-[#8b6f47] transition-colors text-2xl">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-[#a4632b] hover:text-[#8b6f47] transition-colors text-2xl">
                    <IoLogoGithub />
                  </a>
                  <a href="#" className="text-[#a4632b] hover:text-[#8b6f47] transition-colors text-2xl">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;