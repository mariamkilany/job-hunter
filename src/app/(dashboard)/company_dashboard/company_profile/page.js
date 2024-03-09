import CompanyProfile from "@/components/company_profile";
import ContactCompany from "@/components/contact_company";
import HeaderCompany from "@/components/headerCompany";
import TechStack from "@/components/tech_stack";
import React from "react";

const CompanyDashboardHome = () => {
  return (
    <>
      <section className="flex gap-2 ">
        <img src="/Images/Company Logo.png" width="200px" />
        <HeaderCompany />
      </section>
      <hr className="h-px my-8 bg-gray-400 border-0.5"></hr>
      <section className="grid md:grid-cols-2 gap-20 sm:grid-cols-1 m-10">
        <div>
          {" "}
          <CompanyProfile />
        </div>
        <div>
          <TechStack />
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-300 border-0.5"></hr>
      <section className="m-10">
        <ContactCompany />
      </section>
      <hr className="h-px my-8 bg-gray-500 border-0.5"></hr>
    </>
  );
};

export default CompanyDashboardHome;
