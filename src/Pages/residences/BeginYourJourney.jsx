import { Typography } from "../../components/shared/Typography";
// Agar aapke paas icon library hai to use karein, warna niche main ne SVG arrow add kiya hai.
import { ArrowRight } from "lucide-react"; 

const BeginYourJourney = () => {
  return (
    // 'container2' ko check karlein, standard tailwind ke liye 'max-w-7xl mx-auto px-4' behtar hai
    <section className="container2 w-full px-4">
      <div 
        // Aapki image_f9bd9f.png ka exact background color apply karne ke liye arbitrary value use ki hai
        className="bg-[#E6CBB3] mt-20 rounded-[40px] px-6 py-12 md:py-16 flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto"
      >
        <Typography size={"h1s"} className="text-center text-[#2D2621] font-serif font-medium text-3xl md:text-4xl">
          Begin Your Journey
        </Typography>
        
        <Typography className="text-[#5A4E45] text-center max-w-2xl text-sm md:text-base leading-relaxed">
          Whether you are coming from treatment or just need a safe, structured
          place to rebuild, we are here to help.
        </Typography>

        <div>
          <button
            // onClick={() => router.push("/about")}
            className="bg-[#94592B] hover:bg-[#7d4a23] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 text-sm md:text-base shadow-sm"
          >
            Apply Now
            {/* Right arrow icon jo image_f9bd9f.png mein hai */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeginYourJourney;