import React from "react";

const DashboardHeader = () => {
  return (
    <div>
      <header>
        <h2 className="text-4xl mb-3 ">Good Morning , Maria</h2>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-6">
        <div className=" p-8 border border-1 rounded shadow-xl bg-primary  ">
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-white text-5xl me-6 ">72</h3>
            <span className=" font-medium text-white text-2xl ">
              {" "}
              No. of Companies
            </span>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#16BDCA" }}
        >
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-white text-5xl me-6 ">23</h3>
            <span className=" font-medium text-white text-2xl ">
              {" "}
              New Accepted Jobs
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
