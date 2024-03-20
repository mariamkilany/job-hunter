"use client";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import { getAllEmployees } from "@/lib/features/employees/employeeActions";

const AdminPie = () => {
  const chartContainerRef = useRef(null); // Create a reference for the chart container

  // reading jobs and companies data
  const allJobs = useSelector((state) => state.jobs.jobs);
  const allCompanies = useSelector((state) => state.company.company);
  const dispatch = useDispatch();

  useEffect(() => {
    //calling data
    dispatch(getAllJobs());
    dispatch(getAllCompaniesAction());
    dispatch(getAllEmployees());
  }, []);

  useEffect(() => {
    if (allJobs && allJobs.length > 0) {
      var techValues = [];
      allCompanies?.map((company) => {
        techValues = [...new Set([...techValues, ...company.techStack])];
      });

      const fullStack = allJobs?.filter(
        (c) => c.category === "full-stack"
      ).length;
      const frontEnd = allJobs?.filter(
        (c) => c.category === "front-end"
      ).length;
      const backend = allJobs?.filter((c) => c.category === "back-end").length;
      const frequenciesSum = fullStack + frontEnd + backend;

      const fullStackPercentage = (fullStack / frequenciesSum) * 100;
      const frontEndPercentage = (frontEnd / frequenciesSum) * 100;
      const backendPercentage = (backend / frequenciesSum) * 100;

      const chartOptions = {
        series: [fullStackPercentage, frontEndPercentage, backendPercentage],
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
        labels: ["Full-stack", "FrontEnd ", "BackEnd"],
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
              return value + "%";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };

      const chart = new ApexCharts(chartContainerRef.current, chartOptions); // Use ref instead of getElementById

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [allJobs]);

  return (
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
      <div className="py-6" ref={chartContainerRef} />{" "}
      {/* Use ref to create chart container */}
    </div>
  );
};

export default AdminPie;
