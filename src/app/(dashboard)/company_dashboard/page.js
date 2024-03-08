import CompanyPiechart from "@/components/company_pie/company_piechart";
import DashboardHeader from "@/components/dashboard_header";
import JobUpdatesCard from "@/components/job_updates_card";
import TotalJobs from "@/components/total_jobs";
import React from "react";

const Page = () => {
  return (
    <>
      {" "}
      <div>
        <DashboardHeader />
      </div>
      <div className="mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center">
        <CompanyPiechart />
        <TotalJobs/>
      </div>

      <section>
        <JobUpdatesCard/>
      </section>
    </>
  );
};

export default Page;
