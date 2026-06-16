import { cva } from "class-variance-authority";
import React from "react";

const typography = cva("", {
  variants: {
    size: {
      h1: "text-h1 font-extrabold",
      h1s: "text-h1 font-semibold",
      h2: "text-h2 font-bold",
      h3: "text-h3 font-bold",
      h4: "text-h4 font-bold",
      h4m: "text-h4 font-medium",
      h5: "text-h5 font-semibold",
      h5m: "text-h5 font-medium",
      xl: "text-xl",
      lg: "text-lg",
      nl: "text-nl",
      md: "text-md",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    size: "nl",
  },
});

export const Typography = ({
  as: Component = "p",
  className = "",
  size,
  ...props
}) => {
  return (
    <Component
      className={`${typography({ size })} ${className}`}
      {...props}
    />
  );
};