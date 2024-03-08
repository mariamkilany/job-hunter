import React from "react";
import {
  FireIcon,
  MapPinIcon,
  UsersIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
const HeaderCompany = () => {
  return (
    <div>
      <div className="lg:flex md:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="mt-14 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Nomad
          </h2>
          <div className="mt-2 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 ">
            <div className="mt-2 flex items-center text-sm text-gray-500 ">
              <FireIcon className="w-5" />
              Founded
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon className="w-5" />
              Location
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UsersIcon className="w-5" />
              Employees
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BuildingOffice2Icon className="w-5" />
              Industries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompany;
