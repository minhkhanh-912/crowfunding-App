import { ImageDefault } from "constains/Global";
import React from "react";

const CamAuthor = ({ avatar = ImageDefault, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={avatar}
        alt=""
        className="w-8 h-8 rounded-full object-cover inline-block"
      />
      <div className="flex items-center gap-x-1 text-xs">
        <span className="text-text3">by</span>
        <span className="text-text2 font-semibold">{author}</span>
      </div>
    </div>
  );
};

export default CamAuthor;
