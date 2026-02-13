import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaChevronDown } from 'react-icons/fa6';
import { IoArrowForward } from 'react-icons/io5';
import { FiLock, FiFileText, FiShield } from 'react-icons/fi';
import logo from './../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [showPolicies, setShowPolicies] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  // Close dropdown when clicking on any link
  const handlePolicyClick = () => {
    setShowPolicies(false);
    setIsHovering(false);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.policies-dropdown')) {
      setShowPolicies(false);
      setIsHovering(false);
    }
  };

  useEffect(() => {
    if (showPolicies) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPolicies]);

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setShowPolicies(true);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768 && !isHovering) {
      setShowPolicies(false);
    }
  };

  // Handle dropdown container hover
  const handleDropdownEnter = () => {
    if (window.innerWidth >= 768) {
      setIsHovering(true);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth >= 768) {
      setIsHovering(false);
      setShowPolicies(false);
    }
  };

  // Check if current path matches
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Quick links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "How Works", path: "/how-works" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
    <footer className="bg-[#fbf2e6] pt-6 md:pt-8 pb-4 md:pb-6">
      {/* 1. Newsletter Section - Centered with Side Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-[#a4632b] py-8 md:py-10 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl flex flex-col items-center shadow-lg relative overflow-hidden">
          {/* Decorative Corner Shapes (Like in SS) */}
          <div className="absolute top-0 right-0 p-3 md:p-4 opacity-20 rotate-180">
            <svg width="60" height="60" viewBox="0 0 100 100" className="md:w-20 md:h-20">
              <path d="M0 0L100 50L0 100Z" fill="#cd8d34" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 p-3 md:p-4 opacity-20">
            <svg width="60" height="60" viewBox="0 0 100 100" className="md:w-20 md:h-20">
              <path d="M0 0L100 50L0 100Z" fill="#cd8d34" />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 text-center">
            Subscribe to Newsletter
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-base mb-6 md:mb-8 text-center opacity-90 px-4">
            Enter your email address to register to our newsletter subscription!
          </p>

          {/* Form - Input and Button */}
          <div className="w-full max-w-xl sm:max-w-2xl flex bg-[#fbf2e6] rounded-full overflow-hidden p-0">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-transparent text-gray-700 placeholder-[#cd8d34] focus:outline-none font-medium text-sm"
            />
            <button className="bg-[#cd8d34] text-white px-6 md:px-10 py-3 md:py-4 font-bold hover:bg-[#b57a2a] transition-all flex items-center gap-2 text-sm md:text-base">
              Send <span className="text-lg md:text-xl"><IoArrowForward /></span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content - Alignment Fixed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          
          {/* Left Side: Logo and Tagline */}
          <div className="flex flex-col items-start max-w-[250px] sm:max-w-[300px]">
            <img src={logo} alt="KDC Logo" className="w-24 sm:w-28 md:w-32 h-auto" />
            <p className="text-gray-600 text-[12px] sm:text-[13px] leading-relaxed mt-3 md:mt-4">
              All services are delivered according to assessed needs and documented person-centered plans.
            </p>
          </div>

          {/* Right Side: Quick Links & Social Icons */}
          <div className="flex flex-col mt-6 md:mt-0">
            <h4 className="text-[#1A1A1A] font-bold text-base md:text-lg mb-3 md:mb-2">Quick Links</h4>
            
            <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-gray-700 font-semibold text-[13px] sm:text-[14px] mb-4 md:mb-6">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`relative group transition ${
                      isActive(link.path) ? 'text-[#a4632b]' : ''
                    }`}
                    onClick={handlePolicyClick}
                  >
                    {link.name}
                    <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a4632b] transition-all duration-300 ${
                      isActive(link.path) ? 'w-full' : 'group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
              
              {/* Policies Dropdown - Clean & Modern */}
              <li className="relative policies-dropdown">
                <button 
                  onClick={() => setShowPolicies(!showPolicies)}
                  className={`hover:text-[#a4632b] flex items-center gap-1 outline-none transition ${
                    location.pathname.includes('policy') || 
                    location.pathname.includes('terms') || 
                    location.pathname.includes('hipaa') 
                      ? 'text-[#a4632b]' 
                      : ''
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Policies 
                  <FaChevronDown className={`text-[10px] ml-1 transition-transform duration-300 ${
                    showPolicies ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {showPolicies && (
                  <div 
                    className="absolute right-0 bottom-full mb-3 md:mb-4 w-48 sm:w-56 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="absolute -bottom-2 right-5 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
                    
                    <Link 
                      to="/privacy-policy" 
                      className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                        isActive('/privacy-policy') 
                          ? 'bg-[#fbf2e6] text-[#a4632b]' 
                          : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                      }`}
                      onClick={handlePolicyClick}
                    >
                      <FiLock className="text-[#a4632b] text-base sm:text-lg" />
                      Privacy Policy
                    </Link>
                    
                    <Link 
                      to="/terms-conditions" 
                      className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                        isActive('/terms-conditions') 
                          ? 'bg-[#fbf2e6] text-[#a4632b]' 
                          : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                      }`}
                      onClick={handlePolicyClick}
                    >
                      <FiFileText className="text-[#a4632b] text-base sm:text-lg" />
                      Terms of Service
                    </Link>
                    
                    <Link 
                      to="/hipaa-compliance" 
                      className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                        isActive('/hipaa-compliance') 
                          ? 'bg-[#fbf2e6] text-[#a4632b]' 
                          : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                      }`}
                      onClick={handlePolicyClick}
                    >
                      <FiShield className="text-[#a4632b] text-base sm:text-lg" />
                      HIPAA Compliance
                    </Link>
                  </div>
                )}
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: <FaFacebookF />, link: '#' },
                { icon: <FaXTwitter />, link: '#' },
                { icon: <FaInstagram />, link: '#' },
                { icon: <FaYoutube />, link: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-[#a4632b] text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:bg-[#cd8d34] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom Line */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[#E9DCCB] text-center">
          <p className="text-gray-500 text-[12px] sm:text-[13px] font-medium tracking-wide px-4">
            © 2026 KDC Serenity Home LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;