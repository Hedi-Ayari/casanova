import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    deep_orange_50: "bg-deep_orange-50 text-black-900",
    red_300_2b: "bg-red-300_2b text-gray-600_03",
    white_A700: "bg-white-A700 text-gray-600_03",
    gray_100: "bg-gray-100 text-black-900",
    gray_50: "bg-gray-50 text-gray-900_02",
  },
  outline: { gray_300_01: "border-2 border-gray-300_01 border-solid" },
  underline: { gray_100_01: "border-b border-gray-100_01 text-gray-400" },
};
const shapes = { round: "rounded-[7px]" };
const sizes = {
  lg: "p-[11px]",
  xl: "pb-1.5 pt-1.5 px-2.5",
  sm: "pb-2",
  xs: "p-1.5",
  md: "pb-1.5 pt-[9px] px-1.5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "fill",
      color = "white_A700",
      register,
      width='100%',
      ...restProps
      
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}
              ${"w-["+width+"]" || ""}
              `}
              
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
            {...(register && register(name))}

          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "xl", "sm", "xs", "md"]),
  variant: PropTypes.oneOf(["fill", "outline", "underline"]),
  color: PropTypes.oneOf([
    "deep_orange_50",
    "red_300_2b",
    "white_A700",
    "gray_100",
    "gray_50",
    "gray_300_01",
    "gray_100_01",
  ]),
};

export { Input };
