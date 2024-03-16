'use client'
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from '@/components/Button';
import { getAllCompaniesAction } from '@/lib/features/company/companyActions';
import { filterJobs, getAllJobs, getAllJobsPaginated, patchJob } from '@/lib/features/jobs/jobsActions';
import { LinkIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, BuildingOfficeIcon, ClockIcon, CurrencyDollarIcon, ListBulletIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import { split } from 'postcss/lib/list';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Joblisting = () => {
  
    // reading jobs and companies data 
    const singleCompany = useSelector((state)=>state.auth.user)

    const allJobs =  useSelector((state)=>state.jobs.jobs)?.filter((job)=>job.company === singleCompany._id)
  
  
    const [filteredData, setFilteredData] = useState(allJobs)



    const [filter, setfilter] = useState("all");
    const [status ,setStatus] = useState(false);
    const [jobId , setJobId] = useState();

     const dispatch = useDispatch();
     // call datafrom api
     useEffect(()=>{
        dispatch(getAllJobs());
        dispatch(getAllCompaniesAction());
     },[])
     


    // handle model 

   
    const handleModal = (jobId)=>{
       setStatus(!status);
       setJobId(jobId);
    }

    // id for jobs
    let counter = 0 ; 

  const handleFilter = (status) => {
    if (status === "all") {
        setfilter(status);
        setFilteredData(allJobs);
    } else {
        if (filter === status) {
            setfilter("all");
            setFilteredData(allJobs);
        } else {
            const data = allJobs?.filter((job) => job.status === status);
            setFilteredData(data);
            setfilter(status);
        }
    }
};
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className='flex mt-10 '>
                <button onClick={()=>{handleFilter("all")}} className={`text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary ${filter === "all" ? "border-b-2 !font-bold !text-black": ""}`}>
                    All
                </button>
                <button onClick={()=>{handleFilter("pending")}} className={`text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary ${filter === "pending" ? "border-b-2 !font-bold !text-black" : ""}`}>
                  Pending
                </button>
                <button  onClick={()=>{handleFilter("accepted")}}className={`text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary ${filter === "accepted" ? "border-b-2 !font-bold !text-black" : ""}`}>
                   Accepted
                </button>
                <button onClick={()=>{handleFilter("rejected")}} className={`text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary ${filter === "rejected" ? "border-b-2 !font-bold !text-black" : ""}`}>
                   Rejected
                </button>
            </div>
            <hr></hr>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-14">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                             #
                        </th>

                        <td scope="col" className="px-6 py-3 font-bold" style={{minWidth:"280px"}}>
                           Job Title
                        </td>

                        <td scope="col" className="px-6 py-3 font-bold" style={{minWidth:"280px"}}>
                           Job Description
                        </td>
                        <th scope="col" className="px-6 py-3 " style={{minWidth:"180px"}}>
                        Date Publishes
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Status
                        </th>
                        
                        <th scope="col" className="px-6 py-3" style={{minWidth:"200px"}}>
                        Actions
                        </th>
                        <th scope="col" className="px-6 py-3" style={{minWidth:"200px"}}>
                          Matchers
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                                      
                    {filteredData?.map((job)=>{
                          counter++;
                          return (<>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td className="w-4 p-4">
                                    {counter}
                                  </td>
                              
                                  <td className="px-6 py-4">
                                      {job.title}
                                  </td>
                                  <td className="px-6 py-4">
                                      {job.info.description}    
                                  </td>
                                  <td className="px-6 py-4">
                                  {job.createdAt.slice(0,10)}
                                  </td>

                                  {job.status === "pending"&&(<><td className="px-6 py-4">
                                          <span className='block p-2 px-4 rounded-2xl border border-1 border-orange-400 bg-orange-400 text-white  '>
                                          {job.status.toUpperCase()}
                                          </span>
                                          </td>  </>
                                          )

                                    } 
                                      {job.status === "accepted"&&( <><td className="px-6 py-4">
                                          <span className='block p-2 px-4 rounded-2xl  border-emerald-600 bg-emerald-600	 text-white '>
                                          {job.status.toUpperCase()}
                                          </span>
                                          </td> </>  )
                                    }
                                      {job.status === "rejected"&&(<td className="px-6 py-4">
                                          <span className='block p-2 px-4 rounded-2xl  border-emerald-600 bg-pink-600	 text-white '>
                                          {job.status.toUpperCase()}
                                          </span>
                                          </td>  )
                                    }

                                    <td className="px-6 py-4">
                                          <Button
                                              className="flex gap-3 justify-center items-center"
                                              onClick={() => handleModal(job._id)}
                                              >
                                              <span>Job Details</span>
                                              <NewspaperIcon className="size-6" />
                                          </Button>
                                      </td>


                                      {job.status === "accepted"&&( <><td className="px-6 py-4">
                                          <Link
                                            href={`/company_dashboard/joblisting/${job._id}`}
                                            className="font-medium text-blue-600  hover:underline"
                                          >
                                            View Matchers
                                          </Link>
                                          </td>  </>  )
                                          }
                    
                              </tr>
                              
                             <div
                            id="static-modal"
                            data-modal-backdrop="static"
                            tabIndex={-1}
                            aria-hidden="true"
                            className={`${
                                status ? " " : "hidden"
                            } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                        >
                            <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow ">
                                {/* Modal body */}
                                <div className="p-4 md:p-10 space-y-4 md:pt-4 relative">
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
                                    <div>
                                    <h3 className="font-bold text-xl mt-0">
                                    {job.title}
                                    </h3>
                                  
                                    </div>
                                </div>
                                    <div className=' space-y-4 ps-8'>
                                        
                                <p>
                                    <BriefcaseIcon className="me-2 w-6 inline-block text-gray-400"></BriefcaseIcon>
                                    {job.place}, {job.jobType}
                                </p>
                                <p>
                                    <ClockIcon className="me-2 w-6 inline-block text-gray-400"></ClockIcon>
                                    9.00am to 6.00pm
                                </p>
                                <p>
                                    <CurrencyDollarIcon className="me-2 w-6 inline-block text-gray-400">
                                    
                                    </CurrencyDollarIcon>
                                    {job.salary} L.E
                                </p>
        
                                <p>
                                    <ListBulletIcon className="me-2 w-6 inline-block text-gray-400"></ListBulletIcon>
                                      Skills: {job.skills.map((skill)=>{
                                        return(
                                          <span> {skill} ,</span>
                                        ) 
                                      })}
                                </p>
                            
        
                                <h2 className="font-bold text-lg">About the Job </h2>
                                <p className="text-gray-600">
                                  {job.info.description}
                                </p>
        
                                <h2 className="font-bold text-lg">Requirements </h2>
                                <ul className="list-disc text-gray-600 ps-12">
                                  {job.info.responsibilities.split(",").map((resp)=>{
                                      return(
                                          <li>{resp}</li>     
                                      )
                                  })}
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                              </div> 
                                          
                             </>

                          )
                            
                          }
                        )}

                   
                    </tbody>
                </table>
              
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <button onClick={()=>{handlePagination(1)}}>
                        <a  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </button>
                    <button onClick={()=>{handlePagination(2)}}>
                        <a  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </button>
                    <button onClick={()=>{handlePagination(3)}}>
                        <a  aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </button>
                    <button onClick={()=>{handlePagination(4)}}>
                        <a  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </button>
                    <button>
                        <a  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </button>
                
                    </ul>
                </nav>
                </div>
      </div>
    </div>
  );
};





export default Joblisting;
