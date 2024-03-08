import React from "react";

const JobUpdatesCard = () => {
  return (
    <>
      <div className="mt-5">
       
        <div className="w-80 shadow-lg p-10 mt-2">
          <div className="grid sm:grid-cols-2 gap-2 justify-center">
            <img src="/Images/Company Logo.png " width={50} />
            <div className="mt-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium me-1 px-2.5 py-2.5 rounded-full text-center ">
                Full-time
              </span>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl text-gray-800">Social Media Assistant</p>
          </div>
          <div className="flex items-center  text-gray-500">
            <span className="mr-2 text-sm">Nomad</span>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle cx="2" cy="2" r="2" fill="#A8ADB7" />
            </svg>
            <span className="text-sm">Paris , France</span>
          </div>

          <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-1 px-2.5 py-2.5 rounded-full text-center ">
              Categories
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-1 px-2.5 py-2.5 rounded-full  text-center ">
              Categories
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded h-2.5 mb-4 dark:bg-gray-700 mt-3">
            <div
              className="bg-green-400 h-2.5 rounded"
              style={{ width: "35%" }}
            />
          </div>
          <div className="mt-1 text-xs font-medium text-green-400 dark:text-green-300">
            5 matches of 10 capacity
          </div>
        </div>
      </div>
    </>
  );
};

export default JobUpdatesCard;
