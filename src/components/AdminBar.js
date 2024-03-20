"use client";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import { getAllEmployees } from "@/lib/features/employees/employeeActions";

const AdminBar = () => {
  const chartContainerRef = useRef(null); // Create a reference for the chart container

  // reading jobs and companies data
  const allJobs = useSelector((state) => state.jobs.jobs);
  const allCompanies = useSelector((state) => state.company.company);
  const allEmployees = useSelector((state) => state.employee.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    //calling data
    dispatch(getAllJobs());
    dispatch(getAllCompaniesAction());
    dispatch(getAllEmployees());
  }, []);

  useEffect(() => {
    if (allCompanies && allCompanies.length > 0) {
      var techValues = [];
      allCompanies?.map((company) => {
        techValues = [...new Set([...techValues, ...company.techStack])];
      });

      const barValues = techValues.map((tech) => {
        let counter = 0;
        allCompanies.map((c) => {
          if (c.techStack.includes(tech)) {
            counter++;
          }
        });

        return { x: tech, y: counter };
      });

      // column chart options
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

      const chart = new ApexCharts(chartContainerRef.current, options); // Use ref instead of getElementById

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [allJobs, allCompanies]);

  return (
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
      <div ref={chartContainerRef} /> {/* Use ref to create chart container */}
    </div>
  );
};

export default AdminBar;
