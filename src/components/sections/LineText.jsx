import { Typography } from "../../components/shared/Typography";

const LineText = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 h-px bg-secondary-color" />
      <Typography
        size={"md"}
        className="text-secondary-color font-extrabold italic"
      >
        {text || "ABOUT US"}
      </Typography>
    </div>
  );
};

export default LineText;
