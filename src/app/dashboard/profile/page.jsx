import DashboardASide from "@/components/Dashboard/DashboardASide";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import Profile from "@/components/Dashboard/Profile";
import React from "react";

const Page = () => {
  return (
    <>
      <DashboardNav></DashboardNav>
      <DashboardASide></DashboardASide>
      <Profile></Profile>
    </>
  );
};

export default Page;
