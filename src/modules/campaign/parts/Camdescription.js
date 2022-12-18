import React from "react";
import classNames from "utils/classNames";

const Camdescription = ({
  children,
  classname = "text-xs font-normal mb-4",
}) => {
  return <p className={classNames("text-text3", classname)}>{children}</p>;
};

export default Camdescription;
