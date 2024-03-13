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
      <li>
        <Link
          href="/company_dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ChartPieIcon className="w-5" />
          <span className="ms-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          href="/company_dashboard/company_profile"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <BuildingOffice2Icon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Company Profile</span>
        </Link>
      </li>
      <li>
        <Link
          href="/company_dashboard/joblisting"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ClipboardDocumentListIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Job Listing</span>
        </Link>
      </li>
      <li>
        <Link
          href="/company_dashboard/newjob"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <BriefcaseIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">New Job</span>
        </Link>
      </li>
      <li>
        <Button onClick={handleLogout} className="flex">
          <ArrowLeftStartOnRectangleIcon className="w-5" />
          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </Button>
      </li>
    </ul>
  );
}
