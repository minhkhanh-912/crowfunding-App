import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ children }) => {
  return <div className="flex flex-col mb-4 lg:mb-5 gap-x-3">{children}</div>;
};
FormGroup.propTypes = {
  children: PropTypes.node,
};

export default FormGroup;
