"use client";
import React, { useState } from "react";
import Button from "./Button";
import {
  ChartPieIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserUlList from "./UserUlList";
import CompanyUlList from "./CompanyUlList";
import AdminUlList from "./AdminUlList";
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="fixed p-2 top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleMenu}
                className={` inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <Link href="/" className="flex ms-2 md:me-24">
                <img src="/Images/logo.png" className="h-8 me-3" alt=" Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Job Hunters
                </span>
              </Link>
            </div>
            <div className="flex items-center"></div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={` fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full md:translate-x-0 bg-white border-r border-gray-200  ${
          isMenuOpen && "translate-x-0"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          {pathname.includes("userdashboard") ? (
            <UserUlList />
          ) : pathname.includes("company_dashboard") ? (
            <CompanyUlList />
          ) : (
            <AdminUlList />
          )}
        </div>
      </aside>
    </>
  );
};

// <ul className="space-y-2 font-medium">
//   <li>
//     <Link
//       href="/company_dashboard"
//       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//     >
//       <ChartPieIcon className="w-5" />
//       <span className="ms-3">Dashboard</span>
//     </Link>
//   </li>
//   <li>
//     <Link
//       href="/company_dashboard/company_profile"
//       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//     >
//       <BuildingOffice2Icon className="w-5" />

//       <span className="flex-1 ms-3 whitespace-nowrap">Companies</span>
//     </Link>
//   </li>
//   <li>
//     <Link
//       href="/company_dashboard/joblisting"
//       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//     >
//       <ClipboardDocumentListIcon className="w-5" />

//       <span className="flex-1 ms-3 whitespace-nowrap">
//         Job Listing
//       </span>
//     </Link>
//   </li>
//   <li>
//     <a
//       href="#"
//       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
//     >
//       <ArrowLeftStartOnRectangleIcon className="w-5" />

//       <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
//     </a>
//   </li>
// </ul>
export default Sidebar;
