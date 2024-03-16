"use client";
import React from "react";
import {
  FireIcon,
  MapPinIcon,
  UsersIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const HeaderCompany = ({ company }) => {
  const router = useRouter();
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
              {new Date(company?.foundedIn).toLocaleDateString()}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon className="w-5" />
              {company?.address}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UsersIcon className="w-5" />
              {company?.employeesNumber}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BuildingOffice2Icon className="w-5" />

              {company?.industry}
            </div>
            <button
              type="button"
              className="h-10 inline-flex justify-center px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() =>
                router.push("/company_dashboard/company_profile/editProfile")
              }
            >
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompany;
