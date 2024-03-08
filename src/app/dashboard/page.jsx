import DashboardASide from "@/components/Dashboard/DashboardASide";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import Main from "@/components/Dashboard/Main";
import React from "react";

const Page = () => {
  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="flex pt-16 overflow-hidden bg-white">
        <DashboardASide></DashboardASide>
        <div
          class="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
          id="sidebarBackdrop"
        ></div>
        <Main></Main>
      </div>
    </>
  );
};

export default Page;
