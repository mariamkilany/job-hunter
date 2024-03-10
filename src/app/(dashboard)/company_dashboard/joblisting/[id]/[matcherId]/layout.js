import Stepper from "@/components/Stepper";
import ApplicationStepper from "@/components/ApplicationStepper";

import React from "react";

const RecruitingLayout = ({ children }) => {
  return (
    <div>
      <ApplicationStepper></ApplicationStepper>
      {children}
    </div>
  );
};

export default RecruitingLayout;
