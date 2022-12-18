import Heading from "components/common/Heading";
import React from "react";
import CampaignFeatureItem from "./CampaignFeatureItem";
import CamCategory from "./parts/CamCategory";
import Camdescription from "./parts/Camdescription";
import CamImage from "./parts/CamImage";
import CamMeta from "./parts/CamMeta";
import CamTitle from "./parts/CamTitle";

const CampaignPeature = ({ classname = "" }) => {
  return (
    <div className={classname}>
      <Heading>Popular Campaign</Heading>
      <CampaignFeatureItem></CampaignFeatureItem>
    </div>
  );
};

export default CampaignPeature;
