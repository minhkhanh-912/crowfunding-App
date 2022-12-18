import Heading from "components/common/Heading";
import React from "react";
import { v4 } from "uuid";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignRecent = ({ classname = "" }) => {
  return (
    <div className={classname}>
      <Heading number="12">Recent Campaign</Heading>
      <CampaignGrid>
        {new Array(4).fill(0).map((item) => (
          <CampaignItem key={v4()}></CampaignItem>
        ))}
      </CampaignGrid>
    </div>
  );
};

export default CampaignRecent;
