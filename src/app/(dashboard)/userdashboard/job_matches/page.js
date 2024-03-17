"use client";
import Button from "@/components/Button";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import {
  BuildingOfficeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function JobMatch() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/userdashboard/job_matches/1/step1");
  };

  const [state, setState] = useState(false);
  const handleModal = () => {
    setState(!state);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl text-primary font-semibold p-5">Matches Jobs</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Job Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Years Of Experience
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              #
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2">
                <Button
                  className="flex gap-3 justify-center items-center"
                  onClick={handleModal}
                >
                  <span>Job Details</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2">
                <Button
                  className="flex gap-3 justify-center items-center"
                  onClick={handleModal}
                >
                  <span>Job Detales</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2">
                <Button
                  className="flex gap-3 justify-center items-center"
                  onClick={handleModal}
                >
                  <span>Job Detales</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2">
                <Button
                  className="flex gap-3 justify-center items-center"
                  onClick={handleModal}
                >
                  <span>Job Detales</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2">
                <Button
                  className="flex gap-3 justify-center items-center"
                  onClick={handleModal}
                >
                  <span>Job Detales</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Front End Developer
            </th>
            <td className="px-6 py-4  w-fit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              necessitatibus aliquam delectus assumenda magni adipisci
            </td>
            <td className="px-6 py-4">Full Time</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4  w-40">
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Hr Interview
              </span>
            </td>
            <td className="px-6 py-4  min-w-60">
              <div className="flex flex-col gap-2" onClick={handleModal}>
                <Button className="flex gap-3 justify-center items-center">
                  <span>Job Detales</span>
                  <NewspaperIcon className="size-6" />
                </Button>
                <Button
                  onClick={handleClick}
                  className=" !bg-green-700 !hover:bg-green-400 flex gap-3 justify-center items-center"
                >
                  <span> Enter Process</span>
                  <ArrowRightStartOnRectangleIcon className="size-6" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        id="static-modal"
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

              <h3 className="font-bold text-xl mt-0">
                Senior Full Stack .Net Core and Angular Expert
              </h3>
              <span className="text-sm"> Cairo, Egypt</span>
              <p>
                <BriefcaseIcon className="me-2 w-6 inline-block text-gray-400"></BriefcaseIcon>
                On Site , FullTime
              </p>
              <p>
                <BuildingOfficeIcon className="me-2 w-6 inline-block text-gray-400"></BuildingOfficeIcon>
                20-50 Employee
              </p>
              <p>
                <ClockIcon className="me-2 w-6 inline-block text-gray-400"></ClockIcon>
                9.00am to 6.00pm
              </p>
              <p>
                <CurrencyDollarIcon className="me-2 w-6 inline-block text-gray-400"></CurrencyDollarIcon>
                10.000 $
              </p>

              <p>
                <ListBulletIcon className="me-2 w-6 inline-block text-gray-400"></ListBulletIcon>
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
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Accept Job
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={handleModal}
              >
                Reject Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
