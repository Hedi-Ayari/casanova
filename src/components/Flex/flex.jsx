import React from "react";
import "./style.css";

const Flex = ({
  flex = "center",
  gap ="0px",
  align="",
  className = "",
  children,
  onClick = () => {},
}) => {
  const flexes = {
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    start: "flex-start",
    end: "flex-end",
    stretch: "stretch",
  };

  const justifyContent = flexes[flex];

  return (
    <div
      style={{ justifyContent,gap,alignItems:align }}
      onClick={onClick}
      className={`main ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
