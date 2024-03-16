/* eslint-disable @next/next/no-img-element */
"use client";
import CompanyProfile from "@/components/company_profile";
import ContactCompany from "@/components/contact_company";
import HeaderCompany from "@/components/headerCompany";
import TechStack from "@/components/tech_stack";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompanyDashboardHome = () => {
  const data = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  );
  return (
    <>
      <section className="flex gap-2">
        <img alt="" src="/Images/Company Logo.png" width="200px" />
        <HeaderCompany company={data} />
        
      </section>
      <hr className="h-px my-8 bg-gray-400 border-0.5"></hr>
      <section className="grid md:grid-cols-2 gap-20 sm:grid-cols-1 m-10">
        <div>
          <CompanyProfile company={data} />
        </div>
        <div>
          <TechStack company={data} />
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-300 border-0.5"></hr>
      <section className="m-10">
        <ContactCompany company={data} />
      </section>
      <hr className="h-px my-8 bg-gray-500 border-0.5"></hr>
    </>
  );
};

export default CompanyDashboardHome;
