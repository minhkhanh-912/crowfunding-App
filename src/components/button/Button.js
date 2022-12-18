import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  className = "",
  kind = "primary",
  isloading = false,
  ...rest
}) => {
  const child = !!isloading ? (
    <div className="w-5 h-5 border-4 border-white rounded-full border-b-transparent border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  let classNamedefault =
    "flex items-center justify-center p-4 text-base font-semibold min-h-[56px] rounded-xl";
  switch (kind) {
    case "primary":
      classNamedefault += " bg-primary text-white";
      break;
    case "secondary":
      classNamedefault += " bg-secondary text-white";
      break;
    case "ghost":
      classNamedefault += " bg-secondary text-secondary bg-opacity-20";
      break;
    default:
      break;
  }
  if (rest.To)
    return (
      <Link
        to={rest.To}
        className={`${classNamedefault} inline-block   ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      {...rest}
      className={`${classNamedefault} ${className}`}>
      {child}
    </button>
  );
};

Button.propTypes = {
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
