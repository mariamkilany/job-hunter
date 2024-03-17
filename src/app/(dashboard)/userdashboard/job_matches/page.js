"use client";
import Button from "@/components/Button";
import { LinkIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import {
  BuildingOfficeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signleEmployeeApp, updateSingleApp } from "@/lib/features/application/applicationAction";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";

export default function JobMatch() {
 const employeeeApp =useSelector(state=>state.applications.singleEmployeeApplication)
   const userId =  useSelector(state=>state.auth.user)._id
   const allJobs =useSelector(state=>state.jobs.jobs)
   const allcompanies =useSelector(state=>state.company.company)

 const ApplicationsWithDetails= employeeeApp?.map((application)=>{
    const compId=application.company;
    const JobId=application.job;
    const companyData=allcompanies?.filter((comp)=>comp._id===compId);
    const jobData=allJobs?.filter((job)=>job._id===JobId);
    return {...application , companyData:companyData?.[0] , jobData:jobData?.[0]}
  })
  console.log(ApplicationsWithDetails)
  const [openModalId, setOpenModalId] = useState(null);

  const dispatch =  useDispatch();
   useEffect(()=>{
      dispatch(signleEmployeeApp(userId));
      dispatch(getAllJobs());
      dispatch(getAllCompaniesAction());
   },[])

  const router = useRouter(); 
  const handleClick = (id) => {
    router.push(`/userdashboard/job_matches/${id}/step1`);
  };

  const [state, setState] = useState(false);
  const handleModal = (id) => {
    console.log(id)
    setOpenModalId(id);
    setState(!state);
  };
  const handleRejectApp = (id) => {
    dispatch(updateSingleApp({id,updateInfo:{
      status:"closed"
    }})).then(()=>{ 
      dispatch(signleEmployeeApp(userId));
      setState(!state);
    })
  
  };

const handleAcceptApp =(id)=>{  
  dispatch(updateSingleApp({id,updateInfo:{
    status:"step1"
  }})).then(()=>{
    dispatch(signleEmployeeApp(userId));
    setState(!state)
  })

}

  return (
    <div className="p-5 overflow-x-auto ">
      <h2 className="text-2xl text-primary font-semibold p-5">Matches Jobs</h2>
      <table className="w-full text-sm text-left rtl:text-right  w-screen text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
          <tr>
           <th scope="col" className="px-6 py-3">
             #
            </th>
            <th scope="col" className="px-6 py-3">
                Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3" style={{minWidth:"280px"}}>
              Job Description
            </th>
            <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
              JobType
            </th>
            <th scope="col" className="px-6 py-3">
              WorkPlace
            </th>
            <th scope="col" className="px-6 py-3" style={{minWidth:"120px"}}>
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Years Of Experience
            </th>
            <th scope="col" className="px-6 py-3" style={{minWidth:"150px"}}>
              Status
            </th>
            <th scope="col" className="px-6 py-3">
             Actions
            </th>
          </tr>
        </thead>
        <tbody>
        {ApplicationsWithDetails?.map((app, index) => {
      
          return ( 
             <> <tr className="odd:bg-white even:bg-gray-50 ">
                    
                  <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index+1}
                    </th>
                    <th>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 flex items-center  dark:text-white" style={{minWidth:"280px"}}>
                      <img src={app.companyData?.image} alt='logo app.companyData ' className=' inline rounded-full w-12 me-3'></img>
                      {app.companyData?.name}
                     </td>
                     </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {app.jobData?.title}
                    </th>
                    <td className="px-6 py-4  w-fit">
                    {app.jobData?.info.description?.slice(0,200)}...
                    </td>
                    <td className="px-6 py-4  w-fit">
                    {app.jobData?.jobType}
                    </td>
                    <td className="px-6 py-4  w-fit">
                    {app.jobData?.place}
                    </td>
                    <td className="px-6 py-4">
                      {app.jobData?.salary} L.E
                    </td>
                    <td className="px-6 py-4">{app.jobData?.experience} year</td>
                    <td className="px-6 py-4  w-40">
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                       {app?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4  min-w-60">
                      <div className="flex flex-col gap-2">
                      {/* {app?.status==="pending" && */}
                     <Button
                          className="flex gap-3 justify-center items-center"
                          onClick={()=>handleModal(app._id)}
                          data-modal-target={app._id}
                          data-modal-toggle={app._id}
                        >
                          <span>Job Deatils</span>
                          <NewspaperIcon className="size-6" />
                        </Button>
                        
                      
                      {!(app?.status==="pending"|| app?.status==="rejected")&&  <Button
                          onClick={()=>handleClick(app._id)}
                          className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                        >
                          <span> Enter Process</span>
                          <ArrowRightStartOnRectangleIcon className="size-6" />
                        </Button>
                      }
                      </div>
                    </td>
                  </tr>
     
                {console.log(openModalId)}
                  {openModalId === app._id &&( <div
        id={app._id}
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          state ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal body */}
            <div className="p-4 md:p-10 space-y-4 md:pt-4 relative">
              {console.log(app.companyData)}
              <div className="absolute top-7 right-6">
                  <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleModal}
                  data-modal-hide="static-modal"
                  >
                  <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                  >
                      <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                  </svg>
                  <span className="sr-only">Close modal</span>
                  </button>
              </div>
              <div className='flex items-center   sm:direction-columns'>
                  <img src={app?.companyData?.image} alt='logo app.companyData ' className=' inline rounded-full w-12 me-4'></img>
                  <div>
                  <h3 className="font-bold text-xl mt-0">
                {app.jobData?.title}
                  </h3>
                  <span className="text-sm"> {app.companyData?.name} ,</span>
                  <span className="text-sm"> {app.companyData?.address}</span>
                  </div>
              </div>
                  <div className=' space-y-4 ps-8'>
              <p>
                  <BriefcaseIcon className="me-2 w-6 inline-block text-gray-400"></BriefcaseIcon>
                {app.jobData?.place}, {app.jobData?.jobType}
              </p>
              <p>
                  <BuildingOfficeIcon className="me-2 w-6 inline-block text-gray-400"></BuildingOfficeIcon>
                  {app.companyData?.employeesNumber} Employee
              </p>
              <p>
                  <CurrencyDollarIcon className="me-2 w-6 inline-block text-gray-400">
                  
                  </CurrencyDollarIcon>
                  {app.jobData?.salary} L.E
              </p>

              <p>
                  <ListBulletIcon className="me-2 w-6 inline-block text-gray-400"></ListBulletIcon>
                  Skills: {app.jobData?.skills.map((skill, index)=>{
                      return(
                      <span key={index} > {skill} ,</span>
                      ) 
                  })}
              </p>
              <p> 
                  <LinkIcon className="me-2 w-6 inline-block text-gray-400">
                  
                  </LinkIcon>
                <a className='text-primary' href={app?.companyData?.links.linkedIn} target='_blank'>
                      {app?.companyData?.links.linkedIn}
                  </a>  
              </p>

              <h2 className="font-bold text-lg">About the Job </h2>
              <p className="text-gray-600">
                {app.jobData?.info.description}
              </p>

              <h2 className="font-bold text-lg">Requirements </h2>
              <ul className="list-disc text-gray-600 ps-12">
              {app.jobData?.info.responsibilities.split(",").map((resp, index)=>{
                  return(
                      <li key={index}>{resp}</li>     
                  )
              })}
              </ul>
                  </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={()=>handleAcceptApp(app._id)}
              >
                Accept Job
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={()=>handleRejectApp(app._id)}
              >
                Reject Job
              </button>
            </div>
          </div>
        </div>
                 </div>
                  )}
              </>)

          })}
        
       
        </tbody>
      </table>
    
    </div>
  );
}
