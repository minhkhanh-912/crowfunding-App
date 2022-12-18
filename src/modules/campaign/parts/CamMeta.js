import React from "react";
import classNames from "utils/classNames";

const CamMeta = ({
  amount = "$2,000",
  desc = "Raised of $1,900",
  type = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h3
        className={classNames(
          "text-text2",
          type === "small" ? "font-semibold text-sm" : "font-bold text-xl"
        )}>
        {amount}
      </h3>
      <p
        className={classNames(
          "text-text4",
          type === "small" ? "text-xs" : "text-base"
        )}>
        {desc}
      </p>
    </div>
  );
};

export default CamMeta;
