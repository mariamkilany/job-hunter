"use client";
import React from "react";
import { useSelector } from "react-redux";

const TotalJobs = () => {
  const data = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  )._id;

  const jobs = useSelector((state) => state.jobs.jobs);
  const TotalJobs = jobs?.filter((item) => item.company === data).length;
  return (
    // <div className="w-60  p-8 rounded shadow-md">
    <>
    <div className="mt-4">
        <span className="text-5xl text-white  mr-4">{TotalJobs}</span>
        <span className=" text-4xl text-white "> Total Jobs</span>
      </div>
    </>
    // </div>
  );
};

export default TotalJobs;
