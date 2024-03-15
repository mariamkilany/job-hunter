"use client";
import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import { getAllEmployees } from "@/lib/features/employees/employeeActions";

const Admin = () => {
  // reading jobs and companies data 
  const allJobs =  useSelector((state)=>state.jobs.jobs)
  const allCompanies = useSelector((state)=>state.company.company)
  const allEmployees = useSelector((state)=>state.employee.employee)
   const dispatch = useDispatch();

  useEffect(()=>{
    //calling data
    dispatch(getAllJobs());
    dispatch(getAllCompaniesAction());
    dispatch(getAllEmployees());
  },[])

  useEffect(() => {
    var techValues=[] ; 
    allCompanies?.map((company)=> {
      techValues =  [... new Set ([...techValues,...company.techStack])]
    }) 

     const barValues= techValues.map((tech)=>{
      let counter = 0 ;
       allCompanies.map((c)=>{
        if( c.techStack.includes(tech)){
         counter++;
        }
           
       })

       return   { x:tech , y:counter};
     })

    // cloumn chart
    const options = {
      colors: ["#56cdad"],
      series: [
        {
          name: "Companies",
          color: "#56cdad",
          data: barValues,
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };
    let chart;
    let cloumnChart;

    if (
      document.getElementById("pie-chart") &&
      typeof ApexCharts !== "undefined" && allJobs
    ) {
   

      const fullStack = allJobs?.filter((c)=>c.category==="full-stack").length
      const frontEnd = allJobs?.filter((c)=>c.category==="front-end").length
      const backend = allJobs?.filter((c)=>c.category==="back-end").length
      const frequenciesSum =  fullStack + frontEnd + backend;
      
      const fullstackPercentage =  ((fullStack/ frequenciesSum )* 100) ;
      const frontEndPercentage = (frontEnd/ frequenciesSum )* 100 ;
      const BackendPercentage = (backend/ frequenciesSum )* 100 ;

      const chartOptions = {
        series: [fullstackPercentage, frontEndPercentage, BackendPercentage],
        colors: ["#1C64F2", "#16BDCA", "#9061F9"],
        chart: {
          height: 420,
          width: "100%",
          type: "pie",
        },
        stroke: {
          colors: ["white"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: "100%",
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: ["FullStack", "FrontEnd ", "BackEnd"],
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value?.toFixed(2) + "%";
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value?.toFixed(2) + "%";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      }
      chart = new ApexCharts(
        document.getElementById("pie-chart"),
        chartOptions
      );
      chart.render();
    }
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined" && allCompanies
    ) {
  
      // company.techStack

      cloumnChart = new ApexCharts(
        document.getElementById("column-chart"),
        options
      );
      cloumnChart.render();
    }

    return () => {
      chart?.destroy();
      cloumnChart?.destroy();
    };
  }, [allJobs]);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <div className=" p-8 border border-1 rounded shadow-xl bg-primary  ">
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">{allCompanies?.length}</h3>
            <span className=" font-medium text-white text-2xl ">
              {" "}
              No. of Companies
            </span>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#56CDAD" }}
        >
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">{allJobs?.length}</h3>
            <span className=" font-medium text-white text-2xl ">
              {" "}
              No. of Jobs
            </span>
          </div>
        </div>

        <div
          className=" p-8 border border-1 rounded shadow-xl "
          style={{ backgroundColor: "#26A4FF" }}
        >
          <div className="flex items-center justify-center h-full">
            <h3 className="font-bold text-white text-3xl me-6 ">{allEmployees?.length}</h3>
            <span className=" font-medium text-white text-2xl ">
              {" "}
              No. of Job Seekers
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 gap-24  lg:grid-cols-2">
        <div className=" bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between items-start w-full">
            <div className="flex-col items-center">
              <div className="flex items-center mb-1">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">
                 Categories Traffic
                 
                </h5>
                <hr></hr> 
              </div>
            </div>
          </div>
          {/* pie Chart */}
          <div className="py-6" id="pie-chart" />
        </div>

        <div className=" bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
           
              <div>
                <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
                 Technologies
                </h5>

              </div>
            </div>
          </div>
         
          <div id="column-chart" />
          {/* <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div className="flex justify-between items-center pt-5">
              {/* Button 
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="lastDaysdropdown"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                type="button"
              >
                Last 7 days
                <svg
                  className="w-2.5 m-2.5 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu 
              <div
                id="lastDaysdropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yesterday
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Today
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Last 7 days
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Last 30 days
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Last 90 days
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
              >
                Leads Report
                <svg
                  className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
