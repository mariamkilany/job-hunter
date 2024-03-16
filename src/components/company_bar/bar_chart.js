"use client";
import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import axios from "axios";
const BarChart = () => {
  const [data, setdata] = useState([]);

  const id = JSON.parse(
    JSON.parse(localStorage.getItem("persist:auth")).user
  )._id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://job-hunter-server-1.onrender.com/api/applications/company/${id}`
      );
      setdata(response.data.data);
      return response.data.data;
    };

    fetchData();
  }, []);
  const chartdata = [
    data?.filter((d) => d.status === "pending").length || 0,
    data?.filter((d) => d.status === "step1").length || 0,
    data?.filter((d) => d.status === "step2").length || 0,
    data?.filter((d) => d.status === "step3").length || 0,
    data?.filter((d) => d.status === "step4").length || 0,
    data?.filter((d) => d.status === "accepted").length || 0,
    data?.filter((d) => d.status === "rejected").length || 0,
  ];

  const options = {
    xaxis: {
      show: true,
      categories: [
        "pending",
        "step1",
        "step2",
        "step3",
        "step4",
        "accepted",
        "rejected",
      ],
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
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return value;
        },
      },
    },
    series: [
      {
        name: "Employee/Status",
        data: chartdata,
        color: "#4640DE",
      },
    ],
    chart: {
      height: "100%",
      width: "100%",
      type: "bar",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };
  useEffect(() => {
    let chart;
    if (
      document.getElementById("labels-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      chart = new ApexCharts(document.getElementById("labels-chart"), options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [options]);

  return (
    <div className="flex-grow ">
      <div className="w-full h-full bg-white rounded-lg shadow dark:bg-gray-800 ">
        <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
          <div>
          <h5 className="text-xl font-bold leading-none text-gray-500 dark:text-white pe-1">
            Employee Status
          </h5>
          
          </div>
        </div>
        <div id="labels-chart" className="px-2.5" />
        <div className="grid grid-cols-1 items-center border-gray-200  justify-between mt-5 p-4 md:p-6 pt-0 md:pt-0">
          <div className="flex justify-between items-center pt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
