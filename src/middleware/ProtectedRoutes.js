"use client";
import { redirect, usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoutes({ children }) {
  const role = useSelector((store) => store.auth.user)?.role;
  const path = usePathname();
  const companyRoute = role === "company" && path.includes("company_dashboard");
  const empolyeeRoute = role === "employee" && path.includes("userdashboard");
  const adminRoute = role === "admin" && path.includes("admindashboard");
  const commonRoute =
    path.includes("landing") ||
    path.includes("login") ||
    path.includes("register") ||
    path.includes("not-found") ||
    path.includes("not-auth");

  if (role && (path.includes("login") || path.includes("register")))
    redirect("/landing");
  if (
    !(
      path.includes("company_dashboard") ||
      path.includes("userdashboard") ||
      path.includes("admindashboard") ||
      commonRoute
    )
  )
    redirect("/landing");
  if (commonRoute) return <>{children}</>;
  if (
    !(companyRoute || empolyeeRoute || adminRoute) &&
    (path.includes("company_dashboard") ||
      path.includes("userdashboard") ||
      path.includes("admindashboard"))
  ) {
    redirect("/landing");
  } else return <>{children}</>;
}
