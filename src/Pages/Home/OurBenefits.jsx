import React from 'react'
import { Icon } from '@iconify/react';


const OurBenefits = () => {

  const values = [
    {
      id: 1,
      icon: 'material-symbols:apartment-rounded',
      title: 'Expertly Owned & Operated Care',
      description: 'Registered Nurse and Mental Health Nurse Practitioner–Owned & Operated'
    },
    {
      id: 2,
      icon: 'ion:home-outline',
      title: 'A Brand-New Modern Home',
      description: 'Beautifully Built in 2025 with a Comfortable Living Environment'
    },
    {
      id: 3,
      icon: 'material-symbols:group-rounded',
      title: 'Specialized Supportive Living',
      description: 'Designed for Adults with Intellectual & Developmental Disabilities'
    },
    {
      id: 4,
      icon: 'material-symbols:health-and-safety-rounded',
      title: 'Convenient Healthcare Access',
      description: 'Minutes Away from Urgent Care & Hospital Services'
    },
    {
      id: 5,
      icon: 'material-symbols:trending-up-rounded',
      title: 'Everything You Need Nearby',
      description: 'Walking Distance to Shopping, Dining, Barber Shop & Salon'
    },
    {
      id: 6,
      icon: 'material-symbols:directions-walk-rounded',
      title: 'Easy & Accessible Location',
      description: 'Located less than 1 mile from I-95, providing quick and convenient access.'
    },
    {
      id: 7,
      icon: 'material-symbols:cached-rounded',
      title: 'Personalized Care & Community Connection',
      description: 'Person-Centered Support with Meaningful Integration'
    },
    {
      id: 8,
      icon: 'material-symbols:trending-up-rounded',
      title: 'Clean & Comfortable Family-Style Living',
      description: 'Modern, Safe, and Welcoming Environment'
    },
    {
      id: 9,
      icon: 'material-symbols:directions-walk-rounded',
      title: 'Encouraging Independence & Dignity',
      description: 'Focused on Quality of Life and Personal Growth'
    }
  ];
  return (
    <section className="max-w-7xl mx-auto bg-[#FAF4EB] py-12 px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#8A9A86]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A9A86]">
                What We Provide
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2623] leading-tight max-w-xl">
              A Safe, Supportive & Comfortable Home for Meaningful Living
            </h2>
          </div>

          <div className="md:pt-10">
            <p className="text-[#5C5552] text-sm md:text-base leading-relaxed max-w-xl">
              Our beautiful home was newly constructed in 2025 and offers a clean, modern,
              and comfortable living environment designed to promote safety, dignity, and well-being.
              Residents enjoy spacious accommodations, a family-style atmosphere,
              and opportunities for meaningful community engagement.
            </p>
          </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {values.map((value, index) => {
            return (
              <div
                key={value.id}
                className="bg-[#FAF4EB] border border-[#EBE3D5] rounded-sm p-8 flex flex-col gap-4"
              >
                <Icon
                  icon={value.icon}
                  className="text-[#A47551] text-3xl"
                />
                <h3 className="text-xl  font-bold  text-[#2C2623]">
                  {value.title}
                </h3>
                <p className="text-[#7A726E] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>


      </div>

    </section>
  )
}

export default OurBenefits