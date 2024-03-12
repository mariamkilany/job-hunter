'use client'
import Button from '@/components/Button';
import { getAllCompaniesAction } from '@/lib/features/company/companyActions';
import { getAllJobs } from '@/lib/features/jobs/jobsActions';
import { BriefcaseIcon, BuildingOfficeIcon, ClockIcon, CurrencyDollarIcon, ListBulletIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Jobs = () => {
    // reading jobs and companies data 
    const allJobs =  useSelector((state)=>console.log(state.jobs.jobs))
    const allCompanies = useSelector((state)=>console.log(state.company.company.data))
     const dispatch = useDispatch();
     // call datafrom api
     useEffect(()=>{
        dispatch(getAllJobs());
        dispatch(getAllCompaniesAction());
     },[])
     
     // handle model 
     const [status ,setStatus] = useState(false);
     const handleModal = ()=>{
        setStatus(!status);
     }


    return (
        <div>
              <div>
            <h2 className='text-3xl font-bold text-primary'>
                Jobs
            </h2>
            
            <div className='flex mt-10 '>
                <button className='text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary '>
                    All
                </button>
                <button className='text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary '>
                  Pending
                </button>
                <button className='text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary '>
                   Accepted
                </button>
                <button className='text-gray-400 px-6 py-2  hover:border-b hover:border-b-2 hover:text-black hover:font-bold  border-primary '>
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
                            Company name
                        </td>
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
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                             1 
                        </td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 flex items-center  dark:text-white" style={{minWidth:"280px"}}>
                            <img src='/Images/logi.jpg' alt='logo company ' className=' inline rounded-full w-16'></img>

                            Company Name 
                        </td>
                        <td className="px-6 py-4">
                            Job Title inlcude all details fot the job and iclude its name 
                        </td>
                        <td className="px-6 py-4">
                            thisis lcude the post the company will need admin approvaldfvdfvndflvn
                        </td>
                        <td className="px-6 py-4">
                         25 july 2024
                        </td>
                        <td className="px-6 py-4">
                          <span className='block p-2 px-4 rounded-2xl border border-1 border-emerald-600 bg-emerald-600	 text-white '>
                          Accepted
                          </span>
                        </td>
                         <td className="px-6 py-4">
                            <Button
                                className="flex gap-3 justify-center items-center"
                                onClick={handleModal}
                                >
                                <span>Job Details</span>
                                <NewspaperIcon className="size-6" />
                            </Button>
                        </td> 
                    </tr>
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            2
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src='/Images/logi.jpg' alt='logo company ' className=' inline rounded-full w-16'></img>

                        Company Name 
                        </th>
                        <td className="px-6 py-4">
                            thisis lcude the post the company will need admin approvaldfvdfvndflvn
                        </td>
                        <td className="px-6 py-4">
                         25 july 2024
                        </td>
                        <td className="px-6 py-4">
                        <span className='block p-2 px-4 rounded-2xl border border-1 border-orange-400 text-orange-400 '>
                        pending
                          </span>
                        </td>
                        {/* <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-5">Accept </a>
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>

                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                             1 
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src='/Images/logi.jpg' alt='logo company ' className=' inline rounded-full w-16'></img>

                        Company Name 
                        </th>
                        <td className="px-6 py-4">
                            thisis lcude the post the company will need admin approvaldfvdfvndflvn
                        </td>
                        <td className="px-6 py-4">
                         25 july 2024
                        </td>
                        <td className="px-6 py-4">
                        <span className='block p-2 px-4 rounded-2xl border border-1 border-pink-600	 text-pink-600 '>
                        rejected
                          </span>

                        </td>
                        {/* <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-5">Accept </a>
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>

                        </td> 
                    </tr> */}
                   
                    </tbody>
                </table>
                 {/* Model for job details  */}
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
                            <img src='/Images/logi.jpg' alt='logo company ' className=' inline rounded-full w-16'></img>
                            <div>
                            <h3 className="font-bold text-xl mt-0">
                            Senior Full Stack .Net Core and Angular Expert
                            </h3>
                            <span className="text-sm"> Company Name ,</span>
                            <span className="text-sm"> Cairo, Egypt</span>
                        
                            </div>
                        </div>
                            <div className=' space-y-4 ps-8'>
                                
                        <p>
                            <BriefcaseIcon className="me-2 w-6 inline-block text-gray-400"></BriefcaseIcon>{" "}
                            On Site , FullTime
                        </p>
                        <p>
                            <BuildingOfficeIcon className="me-2 w-6 inline-block text-gray-400"></BuildingOfficeIcon>{" "}
                            20-50 Employee
                        </p>
                        <p>
                            <ClockIcon className="me-2 w-6 inline-block text-gray-400"></ClockIcon>{" "}
                            9.00am to 6.00pm
                        </p>
                        <p>
                            <CurrencyDollarIcon className="me-2 w-6 inline-block text-gray-400">
                            {" "}
                            </CurrencyDollarIcon>{" "}
                            10.000 $
                        </p>

                        <p>
                            <ListBulletIcon className="me-2 w-6 inline-block text-gray-400"></ListBulletIcon>{" "}
                            Skills: html , css , javascript , angular , ,net , .....
                        </p>

                        <h2 className="font-bold text-lg">About the Job </h2>
                        <p className="text-gray-600">
                            KnowledgeCity’s mission is to bring affordable, quality
                            education to a global audience through employee training
                            solutions, delivered via our convenient and accessible Learning
                            Management System. In doing so, we help organizations streamline
                            their business efforts and provide more efficient training for
                            their employees.
                        </p>

                        <h2 className="font-bold text-lg">Requirements </h2>
                        <ul className="list-disc text-gray-600 ps-12">
                            <li>requirement 1</li>
                            <li>requirement 2</li>
                            <li>requirement 3</li>
                        </ul>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
                        <button
                            data-modal-hide="static-modal"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Accept Job Post
                        </button>
                        <button
                            data-modal-hide="static-modal"
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                            onClick={handleModal}
                        >
                            Reject Job Post
                        </button>
                        </div>
                    </div>
                    </div>
                </div> 

                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                    </ul>
                </nav>
                </div>


            </div>
        </div>
    );
}

export default Jobs;
