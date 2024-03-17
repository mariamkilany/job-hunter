"use client";
import ApplicantsTable from "@/components/applicants_table";
import { useParams, useRouter } from "next/navigation";
import axios from "@/axiosConfig";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobApplications } from "@/lib/features/application/applicationAction";
import { getAllEmployees } from "@/lib/features/employees/employeeActions";

const Page = () => {
  const router = useRouter();
  // const [applications, setApplications] = useState([]);
  const applications = useSelector(
    (state) => state.applications.jobApplications
  );
  const allEmpolyees = useSelector((state) => state.employee.employee);
  const dispatch = useDispatch();
  const jobId = useParams().id;

  useEffect(() => {
    dispatch(jobApplications(jobId));
    dispatch(getAllEmployees());
  }, []);

  const ApplicationsWithDetails = applications?.map((application) => {
    const empId = application.employee;
    const employeeData = allEmpolyees?.filter((emp) => emp._id === empId);
    return {
      ...application,
      employeeData: employeeData?.[0],
    };
  });
  console.log(ApplicationsWithDetails);
  return (
    <div>
      <div>
        <h3 className="text-xl">All Applications: {applications?.length}</h3>
      </div>
      <div>
        <ApplicantsTable data={ApplicationsWithDetails} />
      </div>
    </div>
  );
};

export default Page;
