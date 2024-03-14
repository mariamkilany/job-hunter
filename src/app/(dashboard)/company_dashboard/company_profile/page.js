"use client";
import CompanyProfile from "@/components/company_profile";
import ContactCompany from "@/components/contact_company";
import HeaderCompany from "@/components/headerCompany";
import TechStack from "@/components/tech_stack";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompanyDashboardHome = () => {
  const data = {
    _id: "65f273705ed9351afc92a2ca",
    name: "MyCompany",
    address: "123 Street, City, Country",
    email: "mycompany@example.com",
    password: "$2b$10$MimaOiF2lmhDTi56HPKWg.K4Iz4mftmbzVY5VLxi1HqKAFP46M5QW",
    foundedIn: "2000-01-01T00:00:00.000Z",
    employeesNumber: 100,
    industry: "Technology",
    contactInfo: {
      phoneNumber: "12345678901",
      website: "http://www.mycompany.com",
    },
    links: {
      linkedIn: "http://www.linkedin.com/mycompany",
      facebook: "http://www.facebook.com/mycompany",
      instagram: "http://www.instagram.com/mycompany",
    },
    techStack: ["html", "css", "js"],
    description: "A description for the company 22",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
    workplace: " the Workplace for comapny 22",
    role: "company",
  };
  
  return (
    <>
      <section className="flex gap-2 ">
        <img src="/Images/Company Logo.png" width="200px" />
        <HeaderCompany company={data} />
      </section>
      <hr className="h-px my-8 bg-gray-400 border-0.5"></hr>
      <section className="grid md:grid-cols-2 gap-20 sm:grid-cols-1 m-10">
        <div>
       
          <CompanyProfile  company={data} />
        </div>
        <div>
          <TechStack company={data}/>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-300 border-0.5"></hr>
      <section className="m-10">
        <ContactCompany company={data}/>
      </section>
      <hr className="h-px my-8 bg-gray-500 border-0.5"></hr>
    </>
  );
};

export default CompanyDashboardHome;
