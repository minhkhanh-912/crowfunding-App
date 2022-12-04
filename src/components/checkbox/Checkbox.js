import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  children,
  className,
  checked,
  name,
  onClick = () => {},
}) => {
  return (
    <div className={`flex items-center gap-x-5 ${className}`}>
      <div
        className={`inline-flex cursor-pointer items-center justify-center text-white w-5 h-5 p-1 border rounded ${
          checked
            ? "bg-primary border-primary"
            : " border-text4 dark:border-text3"
        }`}
        onClick={onClick}>
        <input type="text" className="hidden" name={name} />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div onClick={onClick} className="font-medium text-text3">
          {children}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
