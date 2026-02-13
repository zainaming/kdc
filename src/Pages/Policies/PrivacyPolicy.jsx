import React, { useState } from 'react';
import PageHeader from '../../components/HeaderBg';
import PrivacyImg from '../../assets/privacy-policy.png'; 
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'; 
import { IoShieldOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const SectionIcon = () => (
    <div className="w-[18px] h-[18px] bg-[#6B8E61] flex flex-col items-center justify-center rounded-[2px] mr-3 mt-1.5 flex-shrink-0">
      <div className="w-2.5 h-[1.5px] bg-[#FDF9F3] mb-[2px]"></div>
      <div className="w-2.5 h-[1.5px] bg-[#FDF9F3]"></div>
    </div>
  );

  const sections = [
    {
      title: "Our Commitment to Privacy",
      content: "We are committed to protecting the privacy, dignity, and confidentiality of individuals, families, and visitors. Personal information is handled responsibly, securely, and in accordance with applicable privacy laws and regulations."
    },
    {
      title: "Information We Collect",
      type: "bold-list",
      items: [
        { label: "Personal Information", desc: "Name, contact details, emergency contacts, and other identifying information." },
        { label: "Service Information", desc: "Assessments, care plans, preferences, and service-related records." },
        { label: "Website Information", desc: "Basic usage data such as IP address, browser type, and pages visited." }
      ]
    },
    {
      title: "How We Use Information",
      type: "bullet-list",
      items: [
        "To assess eligibility and deliver authorized services",
        "To develop and maintain person-centered plans",
        "To communicate with individuals, families, and authorized representatives",
        "To meet legal, regulatory, and licensing requirements",
        "To improve service quality and operations"
      ]
    },
    {
      title: "Legal Basis for Processing",
      content: "Information is processed based on consent, contractual necessity, legal obligations, and legitimate service-related interests, as permitted by applicable law."
    },
    {
      title: "Consent",
      content: "Consent is obtained when required and may be withdrawn in accordance with applicable procedures. Withdrawal of consent may affect the ability to provide certain services."
    },
    {
      title: "Information Sharing & Disclosure",
      content: "Information is shared only with authorized parties, such as funding agencies, service providers, or regulatory authorities, and only with proper consent or when required by law."
    },
    {
      title: "How We Protect Your Information",
      type: "security-cards",
      cards: [
        { title: "Encryption", desc: "256-bit SSL encryption for all data in transit and at rest.", icon: <VscLock /> },
        { title: "HIPAA Compliance", desc: "Full compliance with HIPAA privacy and security rules.", icon: <IoShieldOutline /> }
      ]
    },
    {
      title: "Secure Records Management",
      content: "Records are maintained securely using physical, administrative, and technical safeguards. Access is restricted to authorized personnel and monitored to protect confidentiality."
    },
    
    {
      title: "How We Use Your Information",
      type: "highlight-card",
      items: [
        "To provide, maintain, and improve our services",
        "To facilitate healthcare services and patient care",
        "To process payments and prevent fraud",
        "To communicate with you about our services",
        "To comply with legal obligations"
      ]
    },
    {
        title: "Data Retention",
        content: "Personal information is retained only for as long as necessary to fulfill service, legal, and regulatory requirements, after which it is securely disposed of."
    }
  ];

  
  // Handle Accept button click
  const handleAccept = () => {
    if (accepted) {
      // Navigate to home page
      navigate('/');
    }
  };

  // Handle Cancel button click
  const handleCancel = () => {
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        label="Privacy Policy"
        title="Your Privacy is Our Priority"
        description="This Privacy Policy explains how KDC Serenity Home LLC collects, uses, protects, and shares personal information in connection with our services and website."
        lastUpdated="Last updated: August 1, 2025"
        backgroundImage={PrivacyImg}
      />
      
      <main className="max-w-6xl mx-auto pb-12 md:pb-20 mt-8 md:mt-12 relative z-10 px-4 sm:px-6">
        <div className="bg-[#FBF2E6] border border-[#E9DCCB] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-8 md:mb-10 font-serif">Privacy Policy</h2>
          
          <div className="space-y-8 md:space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="relative pl-3 border-l-[3px] border-[#A4632B]">
                <div className="flex items-start mb-3 md:mb-4">
                  <SectionIcon />
                  <h3 className="text-base sm:text-[17px] font-bold text-[#6B8E61] uppercase tracking-tight">
                    {section.title}
                  </h3>
                </div>
                
                <div className="pl-8">
                  {section.type === "bold-list" ? (
                    <ul className="space-y-2 md:space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-[#555] text-sm sm:text-[15px] italic leading-relaxed">
                          <span className="font-bold text-[#1A1A1A] not-italic">• {item.label}:</span> {item.desc}
                        </li>
                      ))}
                    </ul>
                  ) : section.type === "bullet-list" ? (
                    <ul className="space-y-2 md:space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-[#555] text-sm sm:text-[15px] italic leading-relaxed flex items-center">
                          <span className="mr-3 text-[#A4632B] font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  ) : section.type === "security-cards" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {section.cards.map((card, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 sm:p-6 border border-[#E9DCCB]/60 shadow-sm">
                          <div className="text-[#A4632B] mb-2 text-lg sm:text-xl">{card.icon}</div>
                          <h4 className="font-bold text-[#1A1A1A] text-xs sm:text-sm mb-1">{card.title}</h4>
                          <p className="text-[#666] text-xs leading-relaxed italic">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : section.type === "highlight-card" ? (
                    /* RENDER FOR THE HIGHLIGHTED IMAGE SECTION */
                    <div className="bg-white/60 rounded-xl p-4 sm:p-6 border border-white/40 shadow-sm mt-2">
                      <ul className="space-y-2 md:space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center text-[#555] text-xs sm:text-[14px] italic">
                            <FaCheckCircle className="text-[#A4632B] mr-3 text-[14px] sm:text-[16px] opacity-70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-[#555] text-sm sm:text-[15.5px] italic leading-relaxed font-light">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#E9DCCB]">
            <div className="flex items-start sm:items-center mb-8 md:mb-10 cursor-pointer" onClick={() => setAccepted(!accepted)}>
              <div className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${accepted ? 'bg-[#A4632B] border-[#A4632B]' : 'border-gray-300'}`}>
                {accepted && <span className="text-white text-[10px]">✓</span>}
              </div>
              <label className="ml-3 text-sm sm:text-[15px] text-[#555] cursor-pointer">
                I confirm that I have read and accept the <span className="text-[#A4632B] font-bold border-b border-[#A4632B]">Privacy And Policy.</span>
              </label>
            </div>
            
            <div className="flex justify-end gap-4 sm:gap-5">
              <button 
                onClick={handleAccept}
                disabled={!accepted}
                className={`px-8 sm:px-12 py-2 rounded-full text-white text-sm sm:text-[14px] font-medium transition-all shadow-md flex items-center gap-2 ${accepted ? 'bg-[#A4632B] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                Accept <span className="text-sm"><FaArrowRight /></span>
              </button>
              <button 
                onClick={handleCancel}
                className="px-8 sm:px-12 py-2 rounded-full border border-[#E9DCCB] text-[#A4632B] bg-white text-sm sm:text-[14px] font-medium hover:bg-[#FDF9F3] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;