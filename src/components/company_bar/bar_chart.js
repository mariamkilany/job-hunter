"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
const BarChart = () => {
  const options = {
    xaxis: {
      show: true,
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
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
          return "$" + value;
        },
      },
    },
    series: [
      {
        name: "Developer Edition",
        data: [150, 141, 145, 152, 135, 125],
        color: "#1A56DB",
      },
      {
        name: "Designer Edition",
        data: [43, 13, 65, 12, 42, 73],
        color: "#7E3BF2",
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
    <div>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              $12,423
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Employee/state
            </p>
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
