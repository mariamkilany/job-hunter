"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getAllApplications } from "@/lib/features/application/applicationAction";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { useParams } from "next/navigation";

const ApplicantsTable = ({data}) => {
  console.log(data)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const singleCompany = useSelector((state)=>state.auth.user)
  
  const jobId = useParams().id;

  const allApplications = useSelector((state)=>state.applications.applications)?.filter((app)=>app.company===singleCompany._id&&app.job===jobId)

  const dispatch =  useDispatch();
  useEffect(()=>{ 
      dispatch(getAllApplications());
      dispatch(getAllJobs());
  },[])
  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"280px"}}>
                 Employee Name
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"180px"}}>
                Employee Number
              </th>
              <th scope="col" className="px-6 py-3"style={{minWidth:"180px"}}>
                Years of Experience
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
                Resitance
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
                Job Type
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
                Work Place Type
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
                Expected Salary 
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
                Status
              </th>
              <th scope="col" className="px-6 py-3" style={{minWidth:"210px"}}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">           
            <td className="w-4 p-4">
                  1
            </td>
              <td
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/Images/logo.png"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">01234567891</td>

              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">
                 Cairo 
              </td>
              <td className="px-6 py-4">
                Full Time
              </td>
              <td className="px-6 py-4">
               workplace
              </td>
              <td className="px-6 py-4">
               10000
              </td>
              <td className="px-6 py-4">
                pending
              </td>
              <td className="px-6 py-4">
              <Button
                  // onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
