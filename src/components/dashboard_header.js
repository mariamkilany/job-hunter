import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const DashboardHeader = () => {
  const name = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  ).name;

  const data = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  )._id;

  const jobs = useSelector((state) => state.jobs.jobs);
  const TotalJobs = jobs?.filter((item) => item.company === data).length;

  const [totalMatchers, setTotalMatchers] = useState(null);
  const id = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  )._id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://job-hunter-server-1.onrender.com/api/applications/company/${id}`
      );
      setTotalMatchers(response.data.data.length);
      return response.data.data;
    };

    fetchData();
  }, []);


  return (
    <div>
      <header className="mb-7">
        <h2 className="text-2xl  font-bold ">Good Morning , {name}</h2>
      </header>

      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-6">
      <div className=" p-8 border border-1 rounded shadow-xl bg-primary  ">
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">{TotalJobs}</h3>
            <span className=" font-medium text-white text-2xl ">
              
            Total  No.Jobs
            </span>
          </div>
        </div>
        
        <div className=" p-8 border border-1 rounded shadow-xl  " style={{ backgroundColor: "#16BDCA" }}>
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">{totalMatchers}</h3>
            <span className=" font-medium text-white text-2xl ">
              
            Total Matchers
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
