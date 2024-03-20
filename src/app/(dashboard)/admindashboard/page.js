"use client";
import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import { getAllEmployees } from "@/lib/features/employees/employeeActions";
import dynamic from "next/dynamic";

const AdminPie = dynamic(() => import("@/components/AdminPie"), {
  ssr: false,
});
const AdminBar = dynamic(() => import("@/components/AdminBar"), {
  ssr: false,
});

const Admin = () => {
  // reading jobs and companies data
  const allJobs = useSelector((state) => state.jobs.jobs);
  const allCompanies = useSelector((state) => state.company.company);
  const allEmployees = useSelector((state) => state.employee.employee);
  const dispatch = useDispatch();
  useEffect(() => {
    //calling data
    dispatch(getAllJobs());
    dispatch(getAllCompaniesAction());
    dispatch(getAllEmployees());
  }, []);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <div className=" p-8 border border-1 rounded shadow-xl bg-primary  ">
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">
              {allCompanies?.length}
            </h3>
            <span className=" font-medium text-white text-2xl ">
              No. of Companies
            </span>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#56CDAD" }}
        >
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">
              {allJobs?.length}
            </h3>
            <span className=" font-medium text-white text-2xl ">
              No. of Jobs
            </span>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#26A4FF" }}
        >
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">
              {allEmployees?.length}
            </h3>
            <span className=" font-medium text-white text-2xl ">
              No. of Job Seekers
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 gap-24  lg:grid-cols-2">
        <AdminPie />

        <AdminBar />
      </div>
    </div>
  );
};

export default Admin;
