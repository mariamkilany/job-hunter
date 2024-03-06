"use client";
import Button from "@/components/Button";
import Switch from "@/components/Switch";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className=" gap-5 flex justify-center min-h-screen  align-items-center">
      <div className="w-2/5  min-h-screen hidden lg:block ">
        <img src="/images/cover_bg.png" className=" w-full h-full" />
      </div>
      <div className="flex flex-col justify-center align-items-center lg:w-3/5 ">
        <p className="text-center font-semibold text-green">
          Welcome to Job Huntly
        </p>
        <Switch />
        <form className="px-10" style={{ height: "500px" }}>
          {children}
        </form>
        <div className="flex justify-end px-10">
          <Button type="button" className="px-20">
            {pathname === "/login" ? "Login" : "Register"}
          </Button>
        </div>
      </div>
    </section>
  );
}
