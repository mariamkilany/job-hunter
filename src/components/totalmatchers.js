"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalMatchers = () => {
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
    
        
        <div className="mt-4 text-center">
          <span className="text-5xl text-white mr-5">{totalMatchers}</span>
          <span className="text-white text-4xl">Total Matchers</span>
        </div>
      
    </div>
  );
};

export default TotalMatchers;
