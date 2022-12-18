import Button from "components/button/Button";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeatureItem from "modules/campaign/CampaignFeatureItem";
import React from "react";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="h-[54px] rounded-full w-[54px] bg-secondary bg-opacity-40 flex items-center justify-center">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-semibold text-text1 ">
              Create Your Campaign
            </h3>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link to="/" className="text-sm text-primary">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button type="button" kind="ghost" className="px-8 py-3">
          Create campaign
        </Button>
      </div>
      <Heading>Your Campaign</Heading>
      <div className="grid grid-cols-1 mb-10 gap-y-10">
        <CampaignFeatureItem></CampaignFeatureItem>
        <CampaignFeatureItem></CampaignFeatureItem>
        <CampaignFeatureItem></CampaignFeatureItem>
      </div>
      <Button type="button" kind="ghost" className="py-3 mx-auto px-14">
        See more+
      </Button>
      <Heading>Your Campaign</Heading>
      <div className="grid grid-cols-1 mb-10 gap-y-10">
        <CampaignFeatureItem></CampaignFeatureItem>
        <CampaignFeatureItem></CampaignFeatureItem>
        <CampaignFeatureItem></CampaignFeatureItem>
      </div>
      <Button type="button" kind="ghost" className="py-3 mx-auto px-14">
        See more+
      </Button>
    </>
  );
};

export default CampaignPage;
