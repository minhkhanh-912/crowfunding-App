import IconCampaign from "components/icon/IconCampaign";
import IconDashboard from "components/icon/IconDashboard";
import IconLogout from "components/icon/IconLogout";
import IconPayment from "components/icon/IconPayment";
import IconProfile from "components/icon/IconProfile";
import IconSun from "components/icon/IconSun";
import IconWidthdraw from "components/icon/IconWidthdraw";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/Campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/Payment",
  },
  {
    icon: <IconWidthdraw></IconWidthdraw>,
    title: "Widthdraw",
    url: "/Widthdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/Profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/",
    onClick: () => {},
  },
  {
    icon: <IconSun></IconSun>,
    title: "Light/Dark",
    url: "/",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-4 py-10">
      {sidebarLinks.map((item) => (
        <NavLink
          key={item.title}
          className={classNames(
            `link flex items-center mb-4 sm:pl-5 sm:py-4 md:pl-0 md:py-0 gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-8 text-IconColor last:mt-auto last:mb-0 last:bg-white last:shadow-sdPrimary`,
            ({isActive})=> isActive && "bg-primary"
          )}>
          <span>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
