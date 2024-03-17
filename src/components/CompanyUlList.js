import Link from "next/link";
import React from "react";
import {
  ChartPieIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ArrowLeftStartOnRectangleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/features/auth/authSlice";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function CompanyUlList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ul className="space-y-2 font-medium">
      <Link
        href="/company_dashboard"
        className="  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <ChartPieIcon className="w-5" />
          <span className="ms-3">Dashboard</span>
        </li>
      </Link>
      <Link
        href="/company_dashboard/company_profile"
        className=" p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <BuildingOffice2Icon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Company Profile</span>
        </li>
      </Link>
      <Link
        href="/company_dashboard/joblisting"
        className=" p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <ClipboardDocumentListIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Job Listing</span>
        </li>
      </Link>
      <Link
        href="/company_dashboard/newjob"
        className=" p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <BriefcaseIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">New Job</span>
        </li>
      </Link>
      <li className="flex items-center">
        <Button onClick={handleLogout} className="flex">
          <ArrowLeftStartOnRectangleIcon className="w-5" />
          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </Button>
      </li>
    </ul>
  );
}
