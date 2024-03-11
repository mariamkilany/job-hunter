'use client'
import { getAllJobs } from '@/lib/features/jobs/jobsActions';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Jobs = () => {

    const allJobs =  useSelector((state)=>console.log(state.jobs.jobs))
     const dispatch = useDispatch();
     useEffect(()=>{
        dispatch(getAllJobs());
     },[])
     
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
                        <th scope="col" className="px-6 py-3">
                            Company name
                        </th>


                        <th scope="col" className="px-6 py-3">
                           Job Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Date Publishes
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Status
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                        Actions
                        </th> */}
                    </tr>
                    </thead>
                    <tbody>
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
                          <span className='block p-2 px-4 rounded-2xl border border-1 border-emerald-600	 text-emerald-600 '>
                          Accepted
                          </span>
                        </td>
                        {/* <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-5">Accept </a>
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>

                        </td> */}
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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

                        </td> */}
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

                        </td> */}
                    </tr>
                   
                    </tbody>
                </table>
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
