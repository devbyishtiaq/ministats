import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  rounded = "lg",
  bg = "secondary",
  color = "white",
  disabled = false,
  padding = "md",
}) => {
  // Define Tailwind classes based on the provided props
  const roundedClasses = {
    none: "",
    small: "rounded-sm",
    lg: "rounded-[40px]",
    xl: "rounded-[49px]",
    full: "rounded-full",
  }[rounded];

  const bgClasses = {
    secondary: "bg-secondary",
    primary: "bg-primary",
    white: "bg-white",
    none: "bg-transparent",
  }[bg];

  const textClasses = {
    white: "text-white",
    black: "text-black",
  }[color];

  return (
    <button
      className={`font-secondary uppercase transition-all delay-100 font-light text-sm ${roundedClasses} ${bgClasses} ${textClasses} ${className} ${
        bg === "secondary"
          ? "hover:bg-primary border border-secondary hover:border-primary"
          : bg === "transparent"
          ? "border border-white hover:bg-white hover:text-black"
          : ""
      } ${
        padding === "md"
          ? "xl:py-3 py-2 xl:px-5 px-4"
          : padding === "lg"
          ? "xl:py-4 py-[10px] xl:px-7 px-4"
          : padding === "sm"
          ? "xl:py-[10px] py-2 xl:px-4 px-3"
          : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
