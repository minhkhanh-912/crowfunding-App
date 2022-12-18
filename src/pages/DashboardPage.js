import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignPeature from "modules/campaign/CampaignPeature";
import CampaignPopular from "modules/campaign/CampaignPopular";
import CampaignRecent from "modules/campaign/CampaignRecent";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <CampaignPeature classname="home-block"></CampaignPeature>
      <CampaignPopular classname="home-block"></CampaignPopular>
      <CampaignRecent></CampaignRecent>
    </>
  );
};

export default DashboardPage;
