import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import React from "react";

export default function Company({ company }) {
	return (
		<div
			className="border-2 p-5 flex flex-col gap-2 justify-between  hover:translate-y-1.5 hover:transition-transform hover:ease-in-out hover:shadow-sm  cursor-pointer "
			style={{ minHeight: "320px" }}
		>
			<div className="flex flex-col items-start gap-2">
				<img src={company.image} alt="Stripe" className="w-20 h-20" />
				<h2 className="text-2xl font-bold text-gray-900 ">{company.name}</h2>
				<span className="text-gray-400 text-sm ps-1"> <BuildingOffice2Icon className="inline-block w-5"></BuildingOffice2Icon> {company.employeesNumber} employee</span>
			</div>
			<p className="text-gray-700  text-lg-start">{company.description?.slice(0,150)}...</p>
			<div className="flex flex-wrap items-center justify-start gap-2 ">
				<span className=" text-green-400 border-2 border-green-400 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
					{company.industry}
				</span>
				{company.techStack.map((skill, index)=>{
					return <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full">{skill}</span>

				})}
			</div>
		</div>
	);
}
