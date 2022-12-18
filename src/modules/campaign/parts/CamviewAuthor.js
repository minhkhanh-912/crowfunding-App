import IconStar from "components/icon/IconStar";
import { ImageDefault } from "constains/Global";
import React from "react";

const CamviewAuthor = () => {
  return (
    <div className="flex items-center  gap-x-5 mb-6">
      <img
        src={ImageDefault}
        className="object-cover w-[60px] h-[60px] rounded-full"
        alt=""
      />
      <div className="flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-text1 text-lg font-medium">Saiful Islam</h3>
          <div className="flex gap-x-1">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <IconStar key={index}></IconStar>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <strong className="text-primary text-sm font-semibold">
            02 Campaign
          </strong>
          <div className="w-[6px] h-[6px] rounded-full bg-text3"></div>
          <span className="text-text3 text-sm">Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CamviewAuthor;
