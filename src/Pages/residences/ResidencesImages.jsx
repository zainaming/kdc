import LineText from "../../components/sections/LineText";
import { Typography } from "../../components/shared/Typography";

const ResidencesImages = () => {
  return (
    <div className="container2 space-y-10 px-4 max-w-7xl mx-auto">
      {/* Header Section - Exact match according to image_f8d3ed.png */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* LineText component ke andar ka text color handle karne ke liye agar class support hai, 
            warna iska standard design image_f8d3ed.png se match kar raha hai */}
        <div className="text-[#8B9386] tracking-widest text-xs uppercase font-medium mt-8">
          <LineText text="RESIDENCES IMAGES" />
        </div>
        
        {/* Clean, exact heading color and weight adjustment */}
        <Typography size="h1" className="text-[#231F20] font-serif font-normal text-4xl md:text-5xl tracking-tight sm:leading-tight">
          A Safe Place to Call Home
        </Typography>
        
        {/* Muted description text mimicking the subtle look in image_f8d3ed.png */}
        <Typography size={"lg"} className="text-[#6B5E55] text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed">
          A quick look inside the place that our residents call home.
        </Typography>
      </div>

      {/* Image Grid - Kept exactly as your original code (Untouched) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="/assets/svgs/residences-images-left.svg"
          className="w-full"
          width={674}
          height={648}
          priority
          alt="residences-images-left"
        />
        <img
          src="/assets/svgs/residences-images-right.svg"
          className="w-full"
          width={674}
          height={648}
          priority
          alt="residences-images-right"
        />
      </div>

      {/* Button Section - Kept exactly as your original code */}
      <div className="pt-5 text-center w-full flex justify-center">
        <button
          // onClick={() => router.push("/about")}
          className="bg-[#94592B] hover:bg-[#7d4a23] text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-200 text-sm md:text-base shadow-sm"
        >
          View Gallery
          {/* Right side arrow icon */}
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
  );
};

export default ResidencesImages;