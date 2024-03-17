"use client";
import Button from "@/components/Button";
import Switch from "@/components/Switch";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({ children }) {
	return (
		<section className="flex justify-center max-h-screen gap-5 align-items-center">
			<div className="hidden w-2/5 min-h-screen lg:block ">
				<img src="/images/cover_bg.png" className="w-full h-full" />
			</div>
			<div className="flex flex-col justify-center align-items-center lg:w-3/5 sm:mt-20 lg:mt-0">
				<p className="font-semibold text-center text-green">Welcome to Job Huntly</p>
				<Switch />
				<div className="px-10 " style={{ height: "500px" }}>
					{children}
				</div>
			</div>
		</section>
	);
}
