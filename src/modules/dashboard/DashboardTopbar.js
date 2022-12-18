import Button from "components/button/Button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/">
          <img alt="crowfunding-app" srcSet="/Logo.png 2x" className="ml-3" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10">
        <div className="flex items-center cursor-pointer gap-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8.293L13.707 12.586L9.707 8.586L2 16.293L3.414 17.707L9.707 11.414L13.707 15.414L19.414 9.707L21.707 12V6H15.707L18 8.293Z"
              fill="#A2A2A8"
            />
          </svg>
          <span className="text-base font-semibold text-text2">
            Fundrising for
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#A2A2A8" strokeWidth="2" />
          </svg>
        </div>
        <Button className="py-3 px-7" kind="secondary" To="/start-campaign">
          Start a campaign
        </Button>
        <img
          alt="avartar"
          srcSet="/Logo.png 2x"
          className="flex-shrink-0 object-cover rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
