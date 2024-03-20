"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "@/lib/features/jobs/jobsActions";

const CompanyPiechart = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  useEffect(() => {
    let chart;

    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined" &&
      jobs
    ) {
      let fullStack = jobs.filter((j) => j.category === "full-stack").length;
      let frontEnd = jobs.filter((j) => j.category === "front-end").length;
      let backEnd = jobs.filter((j) => j.category === "back-end").length;
      let sum = fullStack + frontEnd + backEnd;
      let fullstackPercentage = (fullStack / sum) * 100;
      let frontEndPercentage = (frontEnd / sum) * 100;
      let backEndPercentage = (backEnd / sum) * 100;

      const chartOptions = {
        series: [fullstackPercentage, frontEndPercentage, backEndPercentage],
        colors: ["#1C64F2", "#16BDCA", "#E74694"],
        chart: {
          height: 330,
          width: "100%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "Job Categories",
                  offsetY: 30,
                  fontFamily: "Inter, sans-serif",
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value) {
                    return value;
                  },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: ["Full Stack", "Front-end", "Back-end"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toFixed(2) + "%";
            },
          },
        },
        xaxis: {
          labels: {},
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };

      chart = new ApexCharts(
        document.getElementById("donut-chart"),
        chartOptions
      );
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [jobs]);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 ">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-500 dark:text-white pe-1">
            Job Statistics according to Category
          </h5>
        </div>
      </div>
      <div className="py-6" id="donut-chart" />
    </div>
  );
};

export default CompanyPiechart;
