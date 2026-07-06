import React from 'react';
import { Icon } from '@iconify/react';
import location from "../../assets/primelocation.png";

const Location = () => {
  return (
    <div className='bg-[#FAF4EB] '>
        <div className="bg-[#FAF4EB] relative flex items-center justify-center w-full  mb-12">
      
     
      <div className="w-full h-[2px] bg-[#A47551]"></div>
      
    
      <div className="absolute bg-[#FAF4EB] px-4 flex items-center justify-center">
       
        <Icon 
          icon="noto:eyes" 
          className="text-4xl md:text-5xl" 
        />
      </div>
        
    </div>

    <div className="max-w-7xl mx-auto flex flex-col px-8 gap-12">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          
          <div className="flex flex-col gap-4">
           
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#8A9A86]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A9A86]">
                Location
              </span>
            </div>
            
           
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2623] leading-tight">
              Prime & Convenient Location
            </h2>
            
           
            <p className="text-[#7A726E] text-sm md:text-base leading-relaxed mt-2">
              Located in a well-connected area of Palm Bay for easy access to daily essentials and services.
            </p>
          </div>

         
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={location}
              alt="KDC Serenity Home Exterior" 
              className="w-full h-[350px] object-cover rounded-[2rem] shadow-sm"
            />
          </div>

        
          <div className="bg-[#FAF4EB] border border-[#EBE3D5] rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-center shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            <h3 className="text-2xl font-serif text-[#60705C] mb-4 leading-snug">
              Prime & Convenient <br /> Palm Bay Location
            </h3>
            
            <p className="text-[#5C5552] text-xs md:text-sm leading-relaxed font-light">
              Conveniently located in Palm Bay, KDC Serenity Home is just minutes away from urgent care 
              centers, hospitals, shopping centers, restaurants, barber shops, salons, and other personal 
              care services. With quick access to major transportation routes, including I-95, residents 
              enjoy seamless connectivity to healthcare, community activities, and everyday essentials—supporting 
              independence, comfort, and an enhanced quality of life.
            </p>
          </div>

        </div>

        
        <div className="text-center mt-6">
          <p className="text-[#A47551] font-medium text-sm md:text-base px-4">
            At KDC Serenity Home, we are committed to creating a supportive, respectful, and enriching environment
          </p>
        </div>

      </div>
    </div>
  )
}

export default Location
