import ApplicantsTable from "@/components/applicants_table";
import React from "react";

const Page = () => {
  return (
    <>
      <div>
        <h3 className="text-xl">All Applicants:19</h3>
      </div>
      <div>
        <ApplicantsTable/>
      </div>
    </>
  );
};

export default Page;
