import React from "react";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import Overlay from "components/common/Overlay";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import IconClose from "components/icon/IconClose";
import Button from "components/button/Button";
import CampaignPerk from "modules/campaign/CampaignPerk";
const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      {/* <Overlay></Overlay> */}
      <ReactModal
        isOpen={false}
        className="modal-content w-full max-w-[532px] bg-white outline-none py-14 px-10 rounded-2xl relative max-h-[90vh] overflow-y-scroll scrollbar-hidden"
        overlayClassName="modal-overlay fixed inset-0 z-[100] bg-black bg-opacity-40 flex items-center justify-center">
        <button className="absolute top-1 right-5 text-text1 w-11 h-11 flex justify-center items-center ">
          <IconClose></IconClose>
        </button>
        <h2 className="text-text1 font-bold text-2xl text-center mb-10">
          Back this project
        </h2>
        <p className="text-sm font-medium text-text2 mb-2">
          Enter the contribute amount
        </p>
        <input
          placeholder="$10"
          name="mount"
          className="w-full py-4 mb-5 text-lg font-medium border-strock border rounded-lg outline-none px-6"></input>
        <p className="mb-5 text-text3 text-sm">
          Contribution are not associatied with perks
        </p>
        <Button className="px-11">Continue</Button>
        <div className="mt-[60px]">
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
          <CampaignPerk></CampaignPerk>
        </div>
      </ReactModal>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1 hidden md:block ">{<Outlet></Outlet>}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
