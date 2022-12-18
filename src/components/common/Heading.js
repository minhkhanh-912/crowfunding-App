import React from "react";

const Heading = ({ children, number = "" }) => {
  return (
    <h2 className="mb-5 text-lg font-semibold text-text1">
      {children}{" "}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
