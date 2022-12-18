import { ImageDefault } from "constains/Global";
import React from "react";
import classNames from "utils/classNames";

const CamImage = ({ avatar = ImageDefault, className = "h-[158px]" }) => {
  return (
    <div className={classNames("flex-shrink-0", className)}>
      <img
        alt=""
        srcSet={avatar}
        className="rounded-2xl object-cover w-full h-full"
      />
    </div>
  );
};

export default CamImage;
