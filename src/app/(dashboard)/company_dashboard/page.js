"use client";
import BarChart from "@/components/company_bar/bar_chart";
import CompanyPiechart from "@/components/company_pie/company_piechart";
import DashboardHeader from "@/components/dashboard_header";
import JobUpdatesCard from "@/components/job_updates_card";

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
