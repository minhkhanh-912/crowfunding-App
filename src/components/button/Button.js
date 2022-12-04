import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  className = "",
  isloading = false,
  ...rest
}) => {
  const child = !!isloading ? (
    <div className="w-5 h-5 border-4 border-white rounded-full border-b-transparent border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      {...rest}
      className={`flex items-center justify-center p-4 bg-primary text-base font-semibold min-h-[56px] text-white rounded-xl ${
        !!isloading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}>
      {child}
    </button>
  );
};

Button.propTypes = {};

export default Button;
