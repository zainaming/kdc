import React, { useRef } from 'react';
import PageHeader from '../../components/HeaderBg';
import ContactImg from '../../assets/contactus.png'; 
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const fullName = formData.get('user_name');
    const email = formData.get('user_email');
    const phone = formData.get('user_phone');
    const service = formData.get('service_type');
    const message = formData.get('message');

    if (!fullName) return toast.error("Please add your Full Name");
    if (!email) return toast.error("Please add your Email");
    if (!phone) return toast.error("Please add your Phone Number");
    if (!service) return toast.error("Please select a Service");
    if (!message) return toast.error("Please add your Message");

    // EmailJS Send using .env keys
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          toast.success("Message Sent Successfully!");
          e.target.reset();
          console.log(result);
      }, (error) => {
          toast.error("Failed to send message, please try again.");
          console.log("EmailJS Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <PageHeader 
        label="Contact Us"
        title="Get In Touch With Us"
        description="We're here to help and happy to answer your questions. Whether you're seeking services, need more information, or have a concern to share, our team is available to support you with respect and care."
        backgroundImage={ContactImg}
      />

      <main className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* CENTERED HEADING */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 md:mb-6 border-2 border-black/40">
            <span className="text-black text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em]">Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">Reach Out, We’re Ready</h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-xl px-4">
           Share your details and questions,and our team will reach out with the right guidance.
          </p>
        </div>
        
        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-24">
          {[
            { icon: <FaPhoneAlt />, title: "Phone", detail: "321-809-7588" },
            { icon: <FaEnvelope />, title: "Email", detail: "kdcserenityhome@gmail.com" },
            { 
              icon: <FaClock />, 
              title: "24/7 Coverage", 
              detail: "Urgent calls: response within 15 minutes",
              sub: "Non-urgent calls: response within 60 minutes"
            },
            { icon: <FaMapMarkerAlt />, title: "Address", detail: "Lahore, Pakistan" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#A4632B] text-white rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg mb-3 sm:mb-5 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium px-2">{item.detail}</p>
              {item.sub && <p className="text-[9px] sm:text-[10px] font-extrabold mt-1 sm:mt-2 tracking-widest opacity-80 uppercase px-2">{item.sub}</p>}
            </div>
          ))}
        </div>

        {/* MAP & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108844.22606554865!2d74.23769168434771!3d31.51351111620606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc202c60741278144!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full grayscale-[0.2]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* FORM SIDE */}
          <div className="bg-[#FBF2E6] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-[#E9DCCB]/50 shadow-sm">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-5 text-left">
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5 md:mb-2 ml-1">Full Name *</label>
                <input 
                  name="user_name" 
                  type="text" 
                  placeholder="John Smith" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5 md:mb-2 ml-1">Email *</label>
                <input 
                  name="user_email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5 md:mb-2 ml-1">Phone Number *</label>
                <input 
                  name="user_phone" 
                  type="tel" 
                  placeholder="321-809-7588" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm shadow-sm"
                />
              </div>
              
              <div className="relative">
                <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5 md:mb-2 ml-1">Service Needed *</label>
                <div className="relative flex items-center">
                  <select 
                    name="service_type" 
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-[#E9DCCB] focus:border-[#A4632B] text-sm text-gray-500 appearance-none shadow-sm cursor-pointer outline-none"
                  >
                    <option value="">Select Service Type</option>
                    <option value="Skilled Nursing" className="text-black bg-white">Skilled Nursing</option>
                    <option value="Therapy Services" className="text-black bg-white">Therapy Services</option>
                    <option value="Personal Care" className="text-black bg-white">Personal Care</option>
                  </select>
                  <div className="absolute right-4 pointer-events-none text-[#A4632B] text-lg sm:text-xl">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1.5 md:mb-2 ml-1">Message *</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  sm:rows="5"
                  placeholder="How can we help you?" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-[#E9DCCB] outline-none focus:border-[#A4632B] text-sm resize-none shadow-sm"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#A4632B] text-white font-bold py-4 md:py-5 rounded-lg sm:rounded-xl hover:bg-[#8B5224] transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3 uppercase tracking-widest text-[11px] sm:text-[12px] mt-4 md:mt-6 group"
              >
                Send Message <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform"><FaArrowRight /></span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;