import Link from "next/link";
import React from "react";
import {
  ChartPieIcon,
  ClipboardDocumentListIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/features/auth/authSlice";
import Button from "./Button";
export default function UserUlList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    window.location.assign("http://localhost:3000/login");
    setTimeout(() => {
      dispatch(logout(true));
    }, 0);
  };
  return (
    <ul className="space-y-2 font-medium">

      <Link
        href="/userdashboard"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">

          <ChartPieIcon className="w-5" />
          <span className="ms-3">Dashboard</span>
        </li>
      </Link>
      <Link

        href="/userdashboard/profile"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <UserIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
        </li>
      </Link>
      <Link

        href="/userdashboard/job_matches"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <li className="flex items-center">
          <ClipboardDocumentListIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Job Match</span>
        </li>
      </Link>

      <li>
        <Button className="flex" onClick={handleLogout}>
          <ArrowLeftStartOnRectangleIcon className="w-5" />

          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </Button>
      </li>
    </ul>
  );
}
