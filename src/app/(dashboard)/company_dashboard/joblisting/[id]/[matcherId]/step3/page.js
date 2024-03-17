"use client";

import React, { useEffect, useState } from "react";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { getSingleApp } from "@/lib/features/application/applicationAction";

const Task = () => {
  const singleApp = useSelector((state)=>state.applications.singleApplication)
  const dispatch =  useDispatch();
  const applicationId = useParams().matcherId;
  const jobId = useParams().id;

  // console.log(applicationId)
  const router = useRouter();

  const [toggle, setToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };
  const handleUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  useEffect(()=>{
    if(singleApp?.status!=="step3"){
      // router.push(`/company_dashboard/joblisting/${jobId}`);
    }
    dispatch(getSingleApp(applicationId));

  },[])


  return (
    <div>
      {/*  header and button */}
      <div className="flex justify-between ">
        <h2 className="text-3xl my-6 font-bold text-primary">Task</h2>
        <div className="text-right my-6 ">
          {/* Modal toggle */}
          <button
            onClick={handletoggle}
            data-modal-target="static-modal"
            data-modal-toggle="static-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <PlusIcon className="w-5 text-white inline me-2"> </PlusIcon> Set
            Task
          </button>
        </div>
      </div>
      {/* task Card */}

      <div className="grid sm:grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
        <div>
          <img
            src="https://www.prosoftly.com/wp-content/uploads/2020/01/task.png"
            alt="background"
          ></img>
        </div>
        <div className="mt-8  w-full relative">
          <div className="bg-white rounded-lg shadow-xl p-10">
            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Name:</span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Description:</span>
              </p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Deadline:</span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Instructions:</span>
              </p>
            </div>

            <div className="absolute top-0 right-5">
              <button
                onClick={handleUpdateToggle}
                data-modal-target="update-modal"
                data-modal-toggle="update-modal"
                className="block focus:outline-none f text-sm   text-center "
                type="button"
              >
                <PencilSquareIcon className="inline w-5 me-2 text-gray-700"></PencilSquareIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end items-center flex-wrap">
          <Button className="px-10">Next</Button>
          <Button className="bg-red-500  px-8">Reject</Button>
        </div>
      </div>

      <div></div>
      {/* set task  modal */}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          toggle ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-primary  ">Add Task</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handletoggle}
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
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="task-name" className="block font-medium mb-1">
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="task-name"
                    name="task-name"
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="task-description"
                    className="block font-medium mb-1"
                  >
                    Task Description
                  </label>
                  <textarea
                    id="task-description"
                    name="task-description"
                    className="form-textarea w-full"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="task-duration"
                    className="block font-medium mb-1"
                  >
                    Task Deadline
                  </label>
                  <input
                    type="time"
                    id="task-duration"
                    name="task-duration"
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="instructions"
                    className="block font-medium mb-1"
                  >
                    Instructions
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    className="form-textarea w-full"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="task-link" className="block font-medium mb-1">
                    upload Image
                  </label>
                  <input
                    type="file"
                    id="task-link"
                    name="task-link"
                    className="form-input w-full"
                  />
                </div>
              </form>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Set Task
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={handletoggle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit task MOdal  */}
      <div
        id="update-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          updateToggle ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-primary  ">
                Update Task
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleUpdateToggle}
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
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="task-name" className="block font-medium mb-1">
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="task-name"
                    name="task-name"
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="task-description"
                    className="block font-medium mb-1"
                  >
                    Task Description
                  </label>
                  <textarea
                    id="task-description"
                    name="task-description"
                    className="form-textarea w-full"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="task-duration"
                    className="block font-medium mb-1"
                  >
                    Task Deadline
                  </label>
                  <input
                    type="time"
                    id="task-duration"
                    name="task-duration"
                    className="form-input w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="instructions"
                    className="block font-medium mb-1"
                  >
                    Instructions
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    className="form-textarea w-full"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="task-link" className="block font-medium mb-1">
                    upload Image
                  </label>
                  <input
                    type="file"
                    id="task-link"
                    name="task-link"
                    className="form-input w-full"
                  />
                </div>
              </form>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="update-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Task
              </button>
              <button
                data-modal-hide="update-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={handleUpdateToggle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
