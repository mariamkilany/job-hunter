"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import axios from "../../axiosConfig";

const Chart2 = () => {
  const user = useSelector((state) => state.auth.user);
  /* reviews, skills, applications */
  const options = { labels: ["Experiance", "Skills", "Applications"] };
  const [series, setseries] = useState([
    user.yearsOfExperience,
    user.skills.length,
  ]);

  const getUserApplication = async () => {
    await axios.get("/applications/employee/" + user._id).then((res) => {
      setseries((old) => {
        old.push(res.data.data.length);
        return [...old];
      });
    });
  };

  useEffect(() => {
    getUserApplication();
  }, []);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default Chart2;
