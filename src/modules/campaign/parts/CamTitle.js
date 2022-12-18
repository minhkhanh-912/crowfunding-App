import React from "react";
import classNames from "utils/classNames";

const CamTitle = ({ children, className = "font-semibold text-base mb-1" }) => {
  return <h3 className={classNames("text-text1", className)}>{children}</h3>;
};

export default CamTitle;
