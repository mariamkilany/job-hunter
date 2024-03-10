import Link from "next/link";
import React from "react";
import {
  ChartPieIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
  UserIcon,
  BriefcaseIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function AdminUlList() {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Link
          href="/admindashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ChartPieIcon className="w-5" />
          <span className="ms-3">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link
          href="/admindashboard/jobs"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ClipboardDocumentListIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Jobs</span>
        </Link>
      </li>
      <li>
        <Link
          href="/admindashboard/prices"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <BanknotesIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Pricing</span>
        </Link>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
        >
          <ArrowLeftStartOnRectangleIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </a>
      </li>
    </ul>
  );
}
