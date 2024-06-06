import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    red_300: "bg-red-300 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900_02",
    gray_600_01: "bg-gray-600_01 text-white-A700",
    light_green_100_ba: "bg-light_green-100_ba",
    gray_100: "bg-gray-100 text-black-900",
    gray_100_02: "bg-gray-100_02",
    white_A700_0a: "bg-white-A700_0a shadow-bs text-white-A700",
  },
  outline: {
    black_900_38: "border border-black-900_38 border-solid text-black-900",
    black_900_3d:
      "border-2 border-black-900_3d border-solid text-blue_gray-900_01",
  },
};
const sizes = { xs: "p-1", sm: "p-[9px]", md: "p-3.5", lg: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  onClick=() =>{},
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
      onClick={onClick}
      style={{color}}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900",
    "red_300",
    "white_A700",
    "gray_600_01",
    "light_green_100_ba",
    "gray_100",
    "gray_100_02",
    "white_A700_0a",
    "black_900_38",
    "black_900_3d",
  ]),
};

export { Button };
