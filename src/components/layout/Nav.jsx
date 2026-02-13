import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Lock,
  FileText,
  Shield,
} from "lucide-react";
import logo from './../../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const [showMobilePolicies, setShowMobilePolicies] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.policies-dropdown')) {
        setShowPolicies(false);
        setIsHovering(false);
      }
    };

    if (showPolicies) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPolicies]);

  // Close mobile menu when clicking on any link
  const handleLinkClick = () => {
    setIsOpen(false);
    setShowMobilePolicies(false);
  };

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

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "How its Works", path: "/how-its-works" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  // Check if current path matches
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-20 lg:h-24">
       
      
      <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
  <img
    src={logo}
    alt="KDC Serenity Home Logo"
    style={{ width: '110px', height: '110px' }}
    className="rounded-full object-cover"
  />
</Link>
      

        {/* Center - Nav Items */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group transition ${
                isActive(item.path) ? 'text-[#a4632b]' : ''
              }`}
              onClick={handleLinkClick}
            >
              <span className="text-sm md:text-base hover:text-[#a4632b] transition">{item.name}</span>
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a4632b] transition-all duration-300 ${
                isActive(item.path) ? 'w-full' : 'group-hover:w-full'
              }`}></span>
            </Link>
          ))}

          {/* Policies Dropdown - Desktop (Hover + Click) */}
          <div 
            className="relative policies-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setShowPolicies(!showPolicies)}
              className={`flex items-center gap-1 text-sm md:text-base transition ${
                location.pathname.includes('policy') || 
                location.pathname.includes('terms') || 
                location.pathname.includes('hipaa') 
                  ? 'text-[#a4632b]' 
                  : ''
              }`}
              aria-haspopup="true"
              aria-expanded={showPolicies}
            >
              Policies
              <ChevronDown 
                size={14} 
                className={`ml-1 transition-transform duration-300 ${
                  showPolicies ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {showPolicies && (
              <div 
                className="absolute left-0 top-full mt-2 w-48 sm:w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to="/privacy-policy"
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                    isActive('/privacy-policy') 
                      ? 'bg-[#fbf2e6] text-[#a4632b]' 
                      : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <Lock className="text-[#a4632b] text-base sm:text-lg" />
                  Privacy Policy
                </Link>
                
                <Link
                  to="/terms-conditions"
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                    isActive('/terms-conditions') 
                      ? 'bg-[#fbf2e6] text-[#a4632b]' 
                      : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <FileText className="text-[#a4632b] text-base sm:text-lg" />
                  Terms & Conditions
                </Link>
                
                <Link
                  to="/hipaa-compliance"
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                    isActive('/hipaa-compliance') 
                      ? 'bg-[#fbf2e6] text-[#a4632b]' 
                      : 'text-gray-700 hover:bg-[#fbf2e6] hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <Shield className="text-[#a4632b] text-base sm:text-lg" />
                  HIPAA Compliance
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right - Get Started Button */}
        <div className="hidden md:flex items-center ml-4 sm:ml-6 md:ml-8">
          <Link to="/get-started" className="px-6 sm:px-6 py-2 text-xs sm:text-sm md:text-base border-2 border-[#a4632b]  rounded-full bg-[#A4632B] text-white hover:bg-[#cd8d34] hover:border-[#cd8d34] transition-all font-semibold flex items-center gap-2">
            Get Started 
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#a4632b]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 sm:px-6 py-4 space-y-2 sm:space-y-3 font-medium text-gray-700 border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 text-sm transition ${
                isActive(item.path) 
                  ? 'text-[#a4632b] font-semibold' 
                  : 'hover:text-[#a4632b]'
              }`}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}

          {/* Policies Dropdown - Mobile (Click Only) */}
          <div className="border-t border-gray-100 pt-3">
            <button
              onClick={() => setShowMobilePolicies(!showMobilePolicies)}
              className={`w-full flex justify-between items-center py-2 text-left text-sm transition ${
                location.pathname.includes('policy') || 
                location.pathname.includes('terms') || 
                location.pathname.includes('hipaa') 
                  ? 'text-[#a4632b] font-semibold' 
                  : 'hover:text-[#a4632b]'
              }`}
            >
              Policies
              {showMobilePolicies ? (
                <ChevronUp size={18} className="text-[#a4632b]" />
              ) : (
                <ChevronDown size={18} className={`${
                  location.pathname.includes('policy') || 
                  location.pathname.includes('terms') || 
                  location.pathname.includes('hipaa') 
                    ? 'text-[#a4632b]' 
                    : 'text-gray-500'
                }`} />
              )}
            </button>

            {showMobilePolicies && (
              <div className="space-y-2 mt-2 pl-3 sm:pl-4 border-l-2 border-[#a4632b]">
                <Link
                  to="/privacy-policy"
                  className={`flex items-center gap-2 py-2 text-xs sm:text-sm transition ${
                    isActive('/privacy-policy') 
                      ? 'text-[#a4632b] font-semibold' 
                      : 'hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <Lock size={14} className="text-[#a4632b]" />
                  Privacy Policy
                </Link>
                
                <Link
                  to="/terms-conditions"
                  className={`flex items-center gap-2 py-2 text-xs sm:text-sm transition ${
                    isActive('/terms-conditions') 
                      ? 'text-[#a4632b] font-semibold' 
                      : 'hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <FileText size={14} className="text-[#a4632b]" />
                  Terms & Conditions
                </Link>
                
                <Link
                  to="/hipaa-compliance"
                  className={`flex items-center gap-2 py-2 text-xs sm:text-sm transition ${
                    isActive('/hipaa-compliance') 
                      ? 'text-[#a4632b] font-semibold' 
                      : 'hover:text-[#a4632b]'
                  }`}
                  onClick={handleLinkClick}
                >
                  <Shield size={14} className="text-[#a4632b]" />
                  HIPAA Compliance
                </Link>
              </div>
            )}
          </div>

          {/* Get Started Button - Mobile */}
          <Link to="/get-started" className="w-full mt-3 sm:mt-4 px-6 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm border-2 border-[#a4632b] rounded-full bg-[#a4632b] text-white hover:bg-[#cd8d34] hover:border-[#cd8d34] transition-all font-semibold">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;