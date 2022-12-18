import Iconfolder from "components/icon/Iconfolder";
import React from "react";
import CamAuthor from "./parts/CamAuthor";
import CamCategory from "./parts/CamCategory";
import Camdescription from "./parts/Camdescription";
import CamImage from "./parts/CamImage";
import CamMeta from "./parts/CamMeta";
import CamTitle from "./parts/CamTitle";

const CampaignItem = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-[0px_2px_4px_rgba(184,_184,_184,_0.03),_0px_6px_12px_rgba(184,_184,_184,_0.02),_0px_12px_20px_rgba(184,_184,_184,_0.03)]">
      <CamImage></CamImage>
      <div className="py-4 pl-5 pr-9">
        <CamCategory title="Education1" link="/as"></CamCategory>
        <CamTitle>Powered Kits Learning Boxes</CamTitle>
        <Camdescription>
          Fun, durable and reusable boxes with eco-friendly options.
        </Camdescription>
        <div className="flex items-center justify-between gap-x-5 mb-5">
          <CamMeta></CamMeta>
          <CamMeta amount="1735" desc="Total backers"></CamMeta>
        </div>
        <CamAuthor></CamAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
