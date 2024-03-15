import React from "react";
import TotalJobs from "./total_jobs";
import TotalMatchers from "./totalmatchers";

const DashboardHeader = () => {
  const name = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  ).name;
  return (
    <div>
      <header className="mb-7">
        <h2 className="text-3xl  ">Good Morning , {name}</h2>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-6">
        <div className=" p-8 border border-1 rounded shadow-xl bg-primary  ">
          <div className="flex items-center justify-center">
            <TotalJobs/>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#16BDCA" }}
        >
          <div className="flex items-center justify-center">
           <TotalMatchers/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
