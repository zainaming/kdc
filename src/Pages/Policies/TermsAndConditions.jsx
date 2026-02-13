import React, { useState } from 'react';
import PageHeader from '../../components/HeaderBg';
import TermAndCondtionimg from '../../assets/termcondition.png';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const SectionIcon = () => (
    <div className="w-[18px] h-[18px] bg-[#6B8E61] flex flex-col items-center justify-center rounded-[2px] mr-3 mt-1.5 flex-shrink-0">
      <div className="w-2.5 h-[1.5px] bg-[#FDF9F3] mb-[2px]"></div>
      <div className="w-2.5 h-[1.5px] bg-[#FDF9F3]"></div>
    </div>
  );

  const sections = [
    { title: "Acceptance of Terms", content: "By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, you should not use our website or services." },
    { title: "About KDC Serenity Home LLC", content: "KDC Serenity Home LLC provides residential and support services in accordance with applicable licensing requirements, regulations, and person-centered care standards." },
    { title: "Scope of Services", content: "Services are delivered based on individual eligibility, authorization, intake assessment, and a documented person-centered plan. Services do not begin until all required approvals are confirmed." },
    { title: "Eligibility & Authorization", content: "Access to services is subject to eligibility determination, funding authorization, and completion of required assessments. Authorization decisions are made by appropriate funding or regulatory entities, not solely by KDC Serenity Home LLC." },
    { title: "User Responsibilities", type: "list", content: [
        "Provide accurate and complete information", 
        "Respect staff, residents, and property", 
        "Follow agreed-upon plans and house guidelines", 
        "Communicate changes in needs or circumstances promptly"
      ] 
    },
    { title: "Acceptable Use", type: "card", label: "You agree NOT to:", items: [
        "Violate any laws or regulations", "Infringe on intellectual property rights", 
        "Transmit malware or harmful code", "Attempt to gain unauthorized access", 
        "Use the Service for fraudulent purposes", "Harass, abuse, or harm others"
      ] 
    },
    { title: "Consent & Communication", content: "Information may be shared only with proper consent or when required by law. Individuals or their authorized representatives may revoke consent in accordance with applicable procedures." },
    { title: "AI Medical Scribe Disclaimer", type: "card", label: "Important Notice", content: "Our AI Medical Scribe is a documentation tool only. It does not provide medical advice, diagnosis, or treatment. Healthcare providers must review and verify all AI-generated content before using it in patient care. We are not responsible for medical decisions made based on AI suggestions." },
    { title: "Service Modifications or Termination", content: "Services may be modified, suspended, or terminated in accordance with regulatory requirements, safety concerns, authorization changes, or contractual obligations. Notice will be provided when required." }
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
        label="Terms & Conditions"
        title="Service Use & Responsibilities"
        description="These Terms and Conditions outline the rules, responsibilities, and expectations related to the use of our services and website. Please read them carefully."
        lastUpdated="Last updated: August 1, 2025"
        backgroundImage={TermAndCondtionimg}
      />
      
      <main className="max-w-6xl mx-auto pb-12 md:pb-20 mt-8 md:mt-12 relative z-10 px-4 sm:px-6">
        {/* Main Content Card */}
        <div className="bg-[#FBF2E6] border border-[#E9DCCB] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-8 md:mb-10">Terms & Conditions</h2>
          
          <div className="space-y-8 md:space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="relative pl-3 border-l-[3px] border-[#A4632B]">
                <div className="flex items-start mb-3 md:mb-4">
                  <SectionIcon />
                  <h3 className="text-base sm:text-[17px] font-bold text-[#6B8E61]">{section.title}</h3>
                </div>
                
                <div className="pl-8">
                  {section.type === "list" ? (
                    <ul className="space-y-2 md:space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start text-[#555] text-sm sm:text-[15px] italic leading-relaxed">
                          <span className="mr-3 text-[#A4632B] font-bold mt-1">•</span> <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : section.type === "card" ? (
                    <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#E9DCCB]/60 shadow-sm mt-2">
                      <div className="flex items-center gap-2 mb-3 md:mb-4 text-[#A4632B] font-bold text-xs sm:text-[14px]">
                        <span className="border-[1.5px] border-[#A4632B] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">!</span>
                        {section.label}
                      </div>
                      <div className="space-y-2 text-[#666] text-xs sm:text-[14px] leading-relaxed">
                        {section.items ? section.items.map((item, i) => (
                          <p key={i} className="pl-4">{item}</p> 
                        )) : <p className="italic">{section.content}</p>}
                      </div>
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
            <div className="flex items-start sm:items-center mb-8 md:mb-10 group cursor-pointer" onClick={() => setAccepted(!accepted)}>
              <div className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${accepted ? 'bg-[#A4632B] border-[#A4632B]' : 'border-gray-300'}`}>
                {accepted && <span className="text-white text-[10px]">✓</span>}
              </div>
              <label className="ml-3 text-sm sm:text-[15px] text-[#555] cursor-pointer">
                I confirm that I have read and accept the <span className="text-[#A4632B] font-bold border-b border-[#A4632B]">terms and conditions.</span>
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

export default TermsAndConditions;