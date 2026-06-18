import LineText from "../../components/sections/LineText";
// import Image from "next/image";
import kdckitchen from "../../../public/assets/svgs/kdc-kitchen.svg";
import kdcbackyard from "../../../public/assets/svgs/kdc-backyard.svg";
import kdclounge from "../../../public/assets/svgs/kdc-lounge.svg";

import { Typography } from "../../components/shared/Typography";

const KDCHome = () => {
  return (
    <div className="container2 flex gap-10 xl:gap-16 max-lg:flex-col items-start my-12 px-4 md:px-12">
      {/* Left Content Side: Left alignment fixed */}
      <div className="flex-1 space-y-6 text-left">
       <div className="flex flex-col items-start text-left space-y-3">
  {/* Redesigned Subtitle to match the image */}
  <span className="text-[#8B9386] font-sans font-semibold italic uppercase tracking-widest text-xs sm:text-sm">
    RESIDENCES IMAGES
  </span>

  <Typography size="h1" className="text-[#2D2621] font-serif font-medium text-3xl md:text-4xl lg:text-5xl leading-tight">
    KDARHope Serenity Home Located in Palm Bay, Florida
  </Typography>
</div>
        
        <div className="space-y-4 text-[#5A4E45] font-normal leading-relaxed text-sm md:text-base">
          <Typography size={"lg"} className="text-desc-color">
            KDARHope Serenity Home is a thoughtfully designed sober living residence
            created to offer comfort, calm, and stability in early recovery.
            Located in a peaceful and accessible neighborhood, the home provides
            an environment where residents can focus on healing while staying
            connected to everyday life.
          </Typography>
          <Typography size={"lg"} className="text-desc-color">
            Residents enjoy a balanced lifestyle—whether it is starting the day
            with quiet reflection, engaging in daily routines, or unwinding in a
            calm, supportive setting after work. The atmosphere is welcoming,
            structured, and centered around recovery and personal growth.
          </Typography>
          <Typography size={"lg"} className="text-desc-color">
            Inside, the home is fully furnished and maintained to a high standard,
            with clean, modern interiors and comfortable shared spaces. The
            kitchen is equipped for everyday living and shared meals, encouraging
            connection and a sense of community among residents.
          </Typography>
          <Typography size={"lg"} className="text-desc-color">
            KDARHope Serenity Home is also conveniently located near essential
            services, local job opportunities, and recovery resources, making it
            easier for residents to rebuild independence while staying on track
            with their sobriety journey.
          </Typography>
        </div>
      </div>

      {/* Right Media Side: Exact grid layout from image_f9b925.png */}
      <div className="lg:w-[45%] w-full flex gap-3 h-[500px] md:h-[550px]">
        {/* Left tall image/video */}
        <div className="w-1/2 h-full rounded-xl overflow-hidden shadow-sm">
          <img
            src={kdckitchen} // Apni image ya video ka path lagayein
            className="w-full h-full object-cover"
            alt="KDARHope Kitchen Area"
          />
        </div>

        {/* Right column with two stacked items */}
        <div className="w-1/2 flex flex-col gap-3 h-full">
          {/* Top video/image (TV Lounge) */}
          <div className="h-[70%] rounded-xl overflow-hidden shadow-sm">
            <img
              src={kdclounge} // Apni image ya video ka path lagayein
              className="w-full h-full object-cover"
              alt="KDARHope Living Room"
            />
          </div>
          {/* Bottom video/image (Backyard) */}
          <div className="h-[30%] rounded-xl overflow-hidden shadow-sm">
            <img
              src={kdcbackyard} // Apni image ya video ka path lagayein
              className="w-full h-full object-cover"
              alt="KDARHope Backyard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KDCHome;