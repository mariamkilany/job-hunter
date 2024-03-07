import DashboardASide from "@/components/Dashboard/DashboardASide";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import Profile from "@/components/Dashboard/Profile";
import React from "react";

const Page = () => {
  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="flex pt-16 overflow-hidden bg-white">
        <DashboardASide></DashboardASide>
        {/* <Profile></Profile> */}
      </div>
    </>
  );
};

export default Page;
