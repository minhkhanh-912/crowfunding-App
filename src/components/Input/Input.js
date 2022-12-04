import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import classNames from "utils/classNames";

const Input = ({
  control,
  name = "",
  placeholder = "",
  type = "text",
  error = "",
  children,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...field}
        {...rest}
        className={classNames(
          "w-full py-4 text-sm font-medium border rounded-lg outline-none text-text1 bg-transparent dark:text-white dark:placeholder:text-text2 placeholder:text-text4",
          error.length > 0
            ? "border-error text-transparent dark:text-text1"
            : "border-strock dark:border-darkStroke",
          children ? "pl-6 pr-14" : "px-6"
        )}
        // className={`${
        //   error.length > 0 ? "border-error text-transparent" : "border-strock dark:border-darkStroke"
        // } w-full py-4 text-sm font-medium border rounded-lg outline-none text-text1 bg-transparent dark:text-white dark:placeholder:text-text2 placeholder:text-text4 ${
        //   children ? "pl-6 pr-14" : "px-6"
        // }`}
      />
      {error && (
        <label
          htmlFor={name}
          className="absolute text-sm font-medium -translate-y-1/2 text-error top-2/4 left-6 error-input">
          {error}
        </label>
      )}
      {children && (
        <span className="absolute -translate-y-1/2 cursor-pointer select-none right-6 top-2/4">
          {children}
        </span>
      )}
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="white" />
        <path
          d="M13.7345 13.855C13.5098 14.1129 13.2388 14.3198 12.9378 14.4632C12.6367 14.6067 12.3116 14.6839 11.9821 14.6901C11.6525 14.6963 11.3251 14.6315 11.0195 14.4994C10.7139 14.3674 10.4362 14.1709 10.2031 13.9216C9.97007 13.6724 9.78632 13.3755 9.66287 13.0486C9.53942 12.7217 9.47879 12.3716 9.48461 12.0192C9.49042 11.6667 9.56256 11.3191 9.69672 10.9971C9.83087 10.6751 10.0243 10.3853 10.2655 10.145M16.86 17.1975C15.4614 18.3376 13.7584 18.9693 12 19C6.27273 19 3 12 3 12C4.01773 9.97167 5.42929 8.19955 7.14 6.80252L16.86 17.1975ZM10.2818 5.21002C10.845 5.06904 11.4216 4.99857 12 5.00002C17.7273 5.00002 21 12 21 12C20.5033 12.9937 19.911 13.9292 19.2327 14.7913L10.2818 5.21002Z"
          stroke="#A2A2A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 2.5L21 21"
          stroke="#A2A2A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

export default Input;
