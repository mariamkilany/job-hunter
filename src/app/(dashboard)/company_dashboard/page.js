"use client";
import dynamic from "next/dynamic";
import DashboardHeader from "@/components/dashboard_header";
const BarChart = dynamic(() => import("@/components/company_bar/bar_chart"), {
  ssr: false,
});
const CompanyPiechart = dynamic(
  () => import("@/components/company_pie/company_piechart"),
  {
    ssr: false,
  }
);

import React from "react";

const Page = () => {
  return (
    <>
      <div>
        <DashboardHeader />
      </div>
      <section className="flex  flex-wrap justify-center gap-8 pb-5">
        <div className="mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-full ">
          <div className="w-full">
            <CompanyPiechart />
          </div>
          <div>
            <BarChart />
          </div>
        </div>
      </section>
      {/* <div>
        <h4 className="text-3xl text-center md:text-start">Job Updates</h4>
      </div>
      <section className="grid md:grid-cols-3 gap-2 p-4 justify-center sm:grid-cols-1 ">
        <JobUpdatesCard />
        <JobUpdatesCard />
        <JobUpdatesCard />
        <JobUpdatesCard />
      </section> */}
    </>
  );
};

export default Page;
