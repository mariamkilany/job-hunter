import BarChart from "@/components/company_bar/bar_chart";
import CompanyPiechart from "@/components/company_pie/company_piechart";
import DashboardHeader from "@/components/dashboard_header";
import JobUpdatesCard from "@/components/job_updates_card";
import TotalJobs from "@/components/total_jobs";
import Totalmatchers from "@/components/totalmatchers";
import React from "react";

const Page = () => {
  return (
    <>
      {" "}
      <div>
        <DashboardHeader />
      </div>
      <section className="flex gap-8">
        <div className="mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center">
          <div>
            <CompanyPiechart />
          </div>

          <div>
            <BarChart />
          </div>
        </div>

        <section>
          <div>
            <TotalJobs />
          </div>
          <div className="mt-2">
            <Totalmatchers />
          </div>
        </section>
      </section>
      <div>
          <h4 className="text-3xl">Job Updates</h4>
        </div>
      <section className="grid md:grid-cols-3 gap-2 sm:grid-cols-1 ">
        
        <JobUpdatesCard />
        <JobUpdatesCard />
        <JobUpdatesCard />
        <JobUpdatesCard />
      </section>
    </>
  );
};

export default Page;
