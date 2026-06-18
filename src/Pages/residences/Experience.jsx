import LineText from "../../components/sections/LineText";
import { Typography } from "../../components/shared/Typography";
import { experience } from "../../Data/index";
import { Icon } from "@iconify/react";

const Experience = () => {
  return (
    <div className="container2 space-y-12 py-12 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
     <div className="flex flex-col items-center text-center space-y-3">
  {/* Redesigned to match the italic, spaced-out uppercase style */}
  <span className="text-[#8B9386] font-sans font-semibold italic uppercase tracking-widest text-xs sm:text-sm">
    EXPERIENCE
  </span>

  <Typography size="h1s" className="text-[#2D2621] font-serif font-medium text-3xl md:text-5xl leading-tight">
    What You will Experience at KDARHope Serenity Home
  </Typography>

  <Typography size={"lg"} className="text-[#7A6E65] text-sm md:text-base tracking-wide font-normal">
    Everything You Need — With Care and Transparency
  </Typography>
</div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {experience.map((feature, index) => (
          <div
            key={index}
            // image_f9b221.png ka exact soft cream/beige card background fixed
            className="bg-[#FBF4EC] rounded-[24px] p-8 lg:p-12 flex flex-col items-center gap-6 text-center cursor-pointer transition-all duration-300 ease-in-out border border-[#F5EBE0] hover:shadow-sm"
          >
            {/* Icon color set to the precise brown tone */}
            <Icon
              width={42}
              height={42}
              icon={feature.icon}
              className="text-[#94592B]"
            />

            {/* Title styling matching image_f9b221.png */}
            <Typography size="h3" className="italic font-serif font-medium text-2xl text-[#2D2621]">
              {feature.title}
            </Typography>

            {/* List Points: Icon base removed, and styled text with custom dash character */}
            <ul className="space-y-4 w-full text-left pl-2">
              {feature.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {/* Image ke mutabiq dot ki jagah standard dash text color ke sath */}
                  <span className="text-[#5A4E45] font-medium select-none text-sm md:text-base">-</span>
                  <Typography className="text-[#5A4E45] text-sm md:text-[15px] leading-relaxed font-normal">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;