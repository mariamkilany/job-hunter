import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
const CompanyProfile = ({company}) => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
        <PencilSquareIcon className="w-5 "color="#4640DE" />
      </div>
      <div className="">
        <div>
         {company.description}
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
