import React from 'react';
import PageHeader from '../../components/HeaderBg';
import HIPAAImg from '../../assets/hipaa-compliance.png'; 
import { IoShieldCheckmarkOutline, IoFingerPrintOutline, IoDocumentTextOutline, IoCloudUploadOutline, IoPeopleOutline } from 'react-icons/io5';
import { VscLock, VscCheckAll } from 'react-icons/vsc';
import { LuCircleCheckBig } from "react-icons/lu";

const HIPAACompliance = () => {
  const CheckIcon = () => <LuCircleCheckBig className="text-[#A4632B] mr-3 text-lg flex-shrink-0" />;

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <PageHeader 
        label="HIPAA Compliance"
        title="100% HIPAA Compliant EHR Platform"
        description="We are fully compliant with HIPAA Privacy and Security Rules to protect your patients' health information."
        backgroundImage={HIPAAImg}
      />
      
      <main className="w-full overflow-hidden">
        {/* 2. Introduction Section */}
        <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <div className="inline-block px-3 sm:px-4 py-1 border border-[#E9DCCB] rounded-full text-xs font-medium text-gray-500 mb-4">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">Our Commitment To HIPAA Compliance</h2>
          <p className="text-black max-w-2xl mx-auto mb-8 md:mb-12 italic text-sm">
            HealthAI EHR is designed from the ground up to meet and exceed HIPAA requirements for protecting Protected Health Information (PHI).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Data Encryption", desc: "256-bit AES encryption for data at rest and in transit", icon: <VscLock /> },
              { title: "Access Controls", desc: "Role-based access with multi-factor authentication", icon: <IoFingerPrintOutline /> },
              { title: "Audit Logging", desc: "Comprehensive logging of all PHI access and modifications", icon: <IoDocumentTextOutline /> },
              { title: "BAA Agreements", desc: "Business Associate Agreements with all vendors", icon: <IoPeopleOutline /> },
              { title: "Data Backup", desc: "Automated encrypted backups with disaster recovery", icon: <IoCloudUploadOutline /> },
              { title: "Security Training", desc: "Regular HIPAA training for all team members", icon: <IoShieldCheckmarkOutline /> },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF2E6] p-6 sm:p-8 rounded-2xl text-left border border-[#E9DCCB]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#A4632B] text-white rounded-xl flex items-center justify-center text-2xl mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. HIPAA Privacy Rule Section - Full Width Background */}
        <section className="bg-[#CD8D34] py-12 md:py-20 px-4 sm:px-6">
          <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-8 md:mb-10">HIPAA Privacy Rule Compliance</h2>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-6 md:mb-8">How We Protect PHI</h3>
            <div className="space-y-6 md:space-y-8">
              {[
                { title: "Minimum Necessary Standard", desc: "We ensure that only the minimum necessary PHI is used, disclosed, and requested for any given purpose." },
                { title: "Patient Rights", desc: "Patients can access, request amendments to, and receive an accounting of disclosures of their PHI." },
                { title: "Notice of Privacy Practices", desc: "We provide clear notices about how we use and disclose PHI to all users." },
                { title: "Authorization Requirements", desc: "We obtain proper authorization before using or disclosing PHI for purposes not permitted by the Privacy Rule." }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckIcon />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Safeguards Section */}
        <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-center text-[#1A1A1A] text-2xl sm:text-3xl font-bold mb-8 md:mb-12">HIPAA Security Rule Compliance</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { 
                title: "Administrative Safeguards", 
                items: ["Security management process with risk analysis and management", "Assigned security responsibility to dedicated personnel", "Workforce security training and authorization procedures", "Information access management with role-based controls", "Security incident response and reporting procedures", "Contingency planning with data backup and disaster recovery"]
              },
              { 
                title: "Physical Safeguards", 
                items: ["Facility access controls with authorized personnel only", "Workstation security policies and procedures", "Device and media controls for PHI storage and disposal"]
              },
              { 
                title: "Technical Safeguards", 
                items: ["Unique user identification and automatic logoff", "Emergency access procedures for PHI during crises", "End-to-end encryption for all PHI transmissions", "Comprehensive audit controls and integrity monitoring"]
              }
            ].map((section, i) => (
              <div key={i} className="bg-[#FBF2E6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E9DCCB]/50">
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4 md:mb-6">{section.title}</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-start text-gray-600 text-[13px] sm:text-sm italic">
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Certifications & Audits */}
        <section className="w-full bg-[#FBF2E6] border-y border-[#E9DCCB]/50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-center">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 md:mb-12">Certifications & Audits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "HIPAA Compliant", desc: "Certified compliant with HIPAA Privacy & Security Rules", icon: <IoShieldCheckmarkOutline /> },
                { title: "SOC 2 Type II", desc: "Independently audited for security controls", icon: <VscLock /> },
                { title: "Annual Audits", desc: "Regular third-party security assessments", icon: <VscCheckAll /> }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#E9DCCB]/30 hover:scale-[1.02] transition-transform">
                  <div className="text-[#A4632B] text-3xl sm:text-4xl mb-4 flex justify-center">{card.icon}</div>
                  <h4 className="font-bold text-[#1A1A1A] text-base mb-2">{card.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <section className="bg-[#CD8D34] rounded-2xl sm:rounded-[30px] p-8 sm:p-12 md:p-16 text-center text-white shadow-lg overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Questions About Our HIPAA Compliance?</h2>
            <p className="opacity-90 mb-8 md:mb-10 text-sm sm:text-base max-w-xl mx-auto">Our compliance team is here to answer any questions.</p>
            <div className="bg-[#E2A666] inline-block px-8 sm:px-12 py-4 sm:py-5 rounded-2xl border border-white/20 shadow-inner">
              <p className="text-xs uppercase font-black tracking-widest mb-1 opacity-80">Compliance Team</p>
              <p className="text-sm sm:text-lg font-semibold">compliance@healthaienr.com</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HIPAACompliance;