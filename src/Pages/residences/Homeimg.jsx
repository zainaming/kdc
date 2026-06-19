import { Typography } from "../../components/shared/Typography";
import homeimg from "../../../public/assets/svgs/residenceimg.svg";
import { useNavigate } from "react-router-dom";
const Homeimg = () => {
  const navigate = useNavigate();
  return (
    <section className="container2 relative w-full pt-10 md:mt-28 mt-8 pb-16 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Accent (Top Right light cream shape from image_f8c1a7.png) */}
      <div className="absolute top-0 right-0 w-[35%] h-[30%] bg-[#FBF4EC] -z-10 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
        {/* Left Content Column */}
        <div className="md:col-span-6 flex flex-col items-start text-left z-10 space-y-6">
          {/* Main Title - Uses absolute/negative margin logic implicitly via grid spacing on desktop to overlap */}
          <h1 className="text-[#2D2621] font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1] tracking-tight max-w-xs sm:max-w-md md:max-w-lg z-20 pointer-events-none select-none">
            KDC Serenity <span className="block">Home</span>
          </h1>

          {/* Subheading with highlighted text */}
          <div className="space-y-4 pt-4 md:pt-8 max-w-lg">
            <Typography className="text-[#2D2621] text-lg md:text-xl font-bold leading-snug">
              Nurse-Owned Residential Support Home for 
              <span className="text-[#8B9386]"> Adults with Intellectual</span>{" "}
              and Developmental Disabilities
            </Typography>

            {/* Muted paragraph text */}
            <Typography className="text-[#6B5E55] text-sm md:text-base leading-relaxed font-normal">
            A nurse-owned residential support home providing dedicated care for adults with intellectual and developmental disabilities.A nurse-owned residential support home providing dedicated care for adults with intellectual and developmental disabilities.
            </Typography>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() =>
                navigate("/get-started", {
                  state: {
                    label: "Apply Now",
                    title: "Let's Apply Now",
                  },
                })
              }
              className="bg-[#94592B] hover:bg-[#7d4a23] text-white font-medium px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 text-xs md:text-sm shadow-sm"
            >
             
              {/* Apply for Residency */}
              Get Started
              {/* Thin white arrow right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="md:col-span-6 w-full h-[350px] sm:h-[450px] md:h-[550px] rounded-bl-[40px] md:rounded-bl-[80px] overflow-hidden shadow-sm z-0">
          <img
            src={homeimg} // Aapki interior kitchen kitchen image ka path
            className="w-full h-full object-cover"
            alt="KDC Serenity Home Interior Kitchen and Island"
          />
        </div>
      </div>
    </section>
  );
};

export default Homeimg;
