// src/components/GetStarted.jsx
import React, { useRef, useState, useEffect } from 'react'; 
import PageHeader from '../../components/HeaderBg';
import GetStartedimg from '../../assets/termcondition.png'; 
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion'; 
import 'react-toastify/dist/ReactToastify.css';

const GetStarted = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  const handleStartSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    
    // Form Values
    const fullName = formData.get('user_name').trim();
    const email = formData.get('user_email').trim();
    const phone = formData.get('user_phone').trim();
    const county = formData.get('user_county'); 
    const service = formData.get('service_type');
    const message = formData.get('message').trim();

 
    
    // 1. Empty Field Check
    if (!fullName) return toast.error("Full Name is required");
    if (!email) return toast.error("Email address is required");
    if (!phone) return toast.error("Phone Number is required");
    if (!county) return toast.error("Please select your County");
    if (!service) return toast.error("Please select a Service type");
    if (!message) return toast.error("Please enter your message");

    // 2. Email Format Validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    // 3. Phone Number Validation (Sirf digits aur minimum length)
    const phoneRegex = /^[0-9+\s-]{7,15}$/; 
    if (!phoneRegex.test(phone)) {
      return toast.error("Please enter a valid phone number");
    }

    // 4. Message Length Check (Optional but good)
    if (message.length < 10) {
      return toast.error("Message should be at least 10 characters long");
    }

    // --- IF VALIDATION PASSES, SEND EMAIL ---
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
          setShowModal(true);
          e.target.reset();
          setTimeout(() => setShowModal(false), 3000);
      }, (error) => {
          toast.error("Failed to submit request.");
          console.log(error);
      });
  };

  // Complete list of countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", 
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", 
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
    "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
    "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#FBF2E6] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl w-full relative overflow-hidden text-center"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-[#E9DCCB]/20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#14A800] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                  <FaCheck className="text-white text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2 sm:mb-3">Form Submitted Successfully!</h3>
                <p className="text-[#14A800] font-black text-base sm:text-lg mb-3 sm:mb-4">Confirmation</p>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto px-2">
                  Thank you for reaching out. A member of our team will contact you shortly to discuss next steps.
                </p>
                <button 
                  onClick={() => setShowModal(false)} 
                  className="w-full md:w-auto px-8 sm:px-10 py-3 rounded-full bg-[#A4632B] text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#8B5224] transition-all shadow-lg mx-auto group text-sm sm:text-base"
                >
                  Call Now (321-809-7588) <FaArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PageHeader 
        label="Get Started"
        title="Let's Get Started"
        description="We're here to help you explore whether KDC Serenity Home is the right fit. This process is confidential and obligation-free."
        backgroundImage={GetStartedimg}
      />

      <main className="max-w-4xl mx-auto py-1 md:py-2 px-4 sm:px-6 md:px-8 bg-[#FBF2E6] rounded-2xl sm:rounded-[2.5rem] mt-12 md:mt-16 mb-12 md:mb-20 shadow-sm border border-[#E9DCCB]/30">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 pt-4 md:pt-6">
          <div className="inline-block px-4 sm:px-5 py-1.5 rounded-full mb-3 sm:mb-4 border-2 border-black/10 bg-gray-50">
            <span className="text-black text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em]">Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1A1A] mb-2">Information For Start</h2>
          <p className="text-gray-400 text-xs sm:text-sm tracking-widest font-bold">Fill form to get start</p>
        </div>

        <form ref={form} onSubmit={handleStartSubmit} className="space-y-4 md:space-y-6 px-2 sm:px-4 md:px-10 pb-8 md:pb-10">
          <div>
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Full Name *</label>
            <input 
              name="user_name" 
              type="text" 
              placeholder="John Smith" 
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] transition-all text-sm shadow-sm"
            />
          </div>

          <div>
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Email *</label>
            <input 
              name="user_email" 
              type="email" 
              placeholder="john@example.com" 
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] transition-all text-sm shadow-sm"
            />
          </div>

          <div>
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Phone Number *</label>
            <input 
              name="user_phone" 
              type="tel" 
              placeholder="321-809-7588" 
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] transition-all text-sm shadow-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Country *</label>
            <div className="relative flex items-center">
              <select 
                name="user_county" 
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm text-gray-500 appearance-none shadow-sm cursor-pointer transition-all"
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 sm:right-5 pointer-events-none text-[#A4632B] text-lg sm:text-xl">
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Type of services Needed *</label>
            <div className="relative flex items-center">
              <select 
                name="service_type" 
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm text-gray-500 appearance-none shadow-sm cursor-pointer transition-all"
              >
                <option value="">Select Service</option>
                <option value="Residential support">Residential support</option>
                <option value="Skilled Nursing">Skilled Nursing</option>
              </select>
              <div className="absolute right-4 sm:right-5 pointer-events-none text-[#A4632B] text-lg sm:text-xl">
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] tracking-widest mb-2 md:mb-3 ml-1">Message *</label>
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Write your message" 
              className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm resize-none shadow-sm transition-all"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
            <button 
              type="submit" 
              className="flex-1 bg-[#A4632B] text-white font-bold py-3 rounded-full hover:bg-[#8B5224] transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3 tracking-widest text-[11px] sm:text-[12px] group"
            >
              Submit Request <FaArrowRight className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              type="button" 
              onClick={() => form.current.reset()} 
              className="px-8 sm:px-12 py-3 rounded-full border-2 border-[#A4632B]/30 text-[#A4632B] font-bold tracking-widest text-[11px] sm:text-[12px] hover:bg-white transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default GetStarted;