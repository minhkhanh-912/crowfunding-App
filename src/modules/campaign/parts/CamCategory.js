import Iconfolder from "components/icon/Iconfolder";
import React from "react";
import { Link } from "react-router-dom";

const CamCategory = ({ title = "Education", link = "/" }) => {
  return (
    <Link
      to={link}
      className="flex items-baseline gap-x-3 mb-4 text-text3 font-medium text-xs">
      <Iconfolder></Iconfolder>
      <span>{title}</span>
    </Link>
  );
};

export default CamCategory;
