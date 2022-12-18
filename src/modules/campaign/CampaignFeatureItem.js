import React from "react";
import CamCategory from "./parts/CamCategory";
import Camdescription from "./parts/Camdescription";
import CamImage from "./parts/CamImage";
import CamMeta from "./parts/CamMeta";
import CamTitle from "./parts/CamTitle";

const CampaignFeatureItem = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CamImage className="w-full h-[266px] flex-1"></CamImage>
      <div className="flex-1 max-w-[435px]">
        <CamCategory title="Architecture"></CamCategory>
        <CamTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CamTitle>
        <Camdescription classname="mb-6 text-sm font-normal">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </Camdescription>
        <div className="w-full rounded-full bg-[#EFEFEF] h-1 mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CamMeta type="big"></CamMeta>
          <CamMeta type="big"></CamMeta>
          <CamMeta type="big"></CamMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeatureItem;
