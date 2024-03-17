"use client";
import React from "react";
import ApplicationStepper from "@/components/ApplicationStepper";
const Page = ({ children }) => {
  return (
    <div>
      <ApplicationStepper />
      {children}
    </div>
  );
};

export default Page;
