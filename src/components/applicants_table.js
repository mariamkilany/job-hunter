"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getAllApplications } from "@/lib/features/application/applicationAction";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { useParams, useRouter } from "next/navigation";

const ApplicantsTable = ({ data }) => {
  console.log(data);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const jobId = useParams().id;

  const handleNavigate = (app) => {
    router.push(
      `/company_dashboard/joblisting/${jobId}/${app._id}/${app?.status}`
    );
  };

  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "280px" }}
              >
                Employee Name
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "180px" }}
              >
                Employee Number
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "180px" }}
              >
                Years of Experience
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "150px" }}
              >
                Resitance
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "120px" }}
              >
                Job Type
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "120px" }}
              >
                Work Place Type
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "120px" }}
              >
                Expected Salary
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "120px" }}
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                style={{ minWidth: "210px" }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((app , index) => {
              return (
                <tr key={index} className="bg-white border-b ">
                  <td className="w-4 p-4">{index +  1 }</td>
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={app?.employeeData?.image}
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {app?.employeeData?.userName}
                      </div>
                      <div className="font-normal text-gray-500">
                        {app?.employeeData?.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{app?.employeeData?.phone}</td>

                  <td className="px-6 py-4">
                    {app?.employeeData?.yearsOfExperience}
                  </td>
                  <td className="px-6 py-4">
                  {app?.employeeData?.location?.city} , {app?.employeeData?.location?.country}
                                    </td>

                  {/* <td className="px-6 py-4 inline-block">
                    <span className="">
                      {app?.employeeData?.location?.city}
                    </span>
                    ,<span>{app?.employeeData?.location?.country}</span>
                  </td> */}

                  <td className="px-6 py-4">{app?.employeeData?.typeOfJob}</td>
                  <td className="px-6 py-4">
                    {app?.employeeData?.workPlaceType}
                  </td>
                  <td className="px-6 py-4">
                    {app?.employeeData?.minimumSalary}
                  </td>
                  <td className="px-6 py-4 font-bold">
                    <span class="bg-blue-100 text-primary-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  border-primary-light">
                      {app?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {app.status !== "accepted" &&
                    app.status !== "rejected" &&
                    app.status !== "pending" ? (
                      <Button
                        className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                        onClick={() => handleNavigate(app)}
                      >
                        <span> Enter Process</span>
                        <ArrowRightStartOnRectangleIcon className="size-6" />
                      </Button>
                    ) : (
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        No Action
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
