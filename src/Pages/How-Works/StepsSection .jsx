import React from "react";
import step1 from "../../assets/01.svg";
import step2 from "../../assets/02.svg";
import step3 from "../../assets/03.svg";
import step4 from "../../assets/04.svg";
import step5 from "../../assets/05.svg";


const steps = [
  {
    number: "01",
    title: "Initial Contact",
    description:
      "Call or email us to discuss needs, ask questions, and learn how our services may support you or your family member.",
  },
  {
    number: "02",
    title: "Eligibility & Authorization",
    description:
      "We confirm eligibility, funding sources, and required approvals to ensure services can be provided appropriately.",
  },
  {
    number: "03",
    title: "Intake Assessment",
    description:
      "We review goals, preferences, strengths, and potential risks to understand the individual's needs holistically.",
  },
  {
    number: "04",
    title: "Person-Centered Plan",
    description:
      "Supports are tailored to the individual, reflecting personal goals, routines, choices, and authorized services.",
  },
  {
    number: "05",
    title: "Ongoing Support & Review",
    description:
      "We provide continuous support, regular monitoring, and quality checks to ensure services remain effective and appropriate.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Tag */}
        <div className="flex justify-center mb-6">
          <span className="border border-gray-300 text-gray-500 px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white">
            How It Works
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a241f] max-w-4xl mx-auto leading-tight">
            Simple Steps. Clear Support. Person-
            <br />
            Centered Care.
          </h2>
        </div>

       <div className="py-8 px-4 sm:px-8 gap-12 md:gap-16 flex flex-col max-w-7xl mx-auto">

  {/* Step 1 */}
  <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 py-6 md:py-12 px-4 md:px-16">
    <div className="w-full md:w-1/2">
      <img src={step1} alt="Initial Contact" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-md">
      <h3 className="text-2xl font-semibold text-[#2C2623] md:text-3xl">
        Initial Contact
      </h3>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        Call or email us to discuss needs, ask questions, and learn how
        our services may support you or your family member.
      </p>
    </div>
  </div>

  {/* Step 2 (Alternating layout on desktop, naturally stacked on mobile) */}
  <div className="w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 py-6 md:py-12 px-4 md:px-16">
    <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-md">
      <h3 className="text-2xl font-semibold text-[#2C2623] md:text-3xl">
        Eligibility & Authorization
      </h3>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        We confirm eligibility, funding sources, and required approvals to
        ensure services can be provided appropriately.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <img src={step2} alt="Eligibility & Authorization" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>

  {/* Step 3 */}
  <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 py-6 md:py-12 px-4 md:px-16">
    <div className="w-full md:w-1/2">
      <img src={step3} alt="Intake Assessment" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-md">
      <h3 className="text-2xl font-semibold text-[#2C2623] md:text-3xl">
        Intake Assessment
      </h3>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        We review goals, preferences, strengths, and potential risks to
        understand the individual's needs holistically.
      </p>
    </div>
  </div>

  {/* Step 4 */}
  <div className="w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 py-6 md:py-12 px-4 md:px-16">
    <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-md">
      <h3 className="text-2xl font-semibold text-[#2C2623] md:text-3xl">
        Person-Centered Plan
      </h3>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        Supports are tailored to the individual, reflecting personal
        goals, routines, choices, and authorized services.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <img src={step4} alt="Person-Centered Plan" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>

  {/* Step 5 */}
  <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 py-6 md:py-12 px-4 md:px-16">
    <div className="w-full md:w-1/2">
      <img src={step5} alt="Ongoing Support & Review" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col gap-4 max-w-md">
      <h3 className="text-2xl font-semibold text-[#2C2623] md:text-3xl">
        Ongoing Support & Review
      </h3>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        We provide continuous support, regular monitoring, and quality
        checks to ensure services remain effective and appropriate.
      </p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default StepsSection;
