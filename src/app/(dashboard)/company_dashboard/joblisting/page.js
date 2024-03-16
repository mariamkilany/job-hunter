"use client";
import ApplicantsTable from "@/components/applicants_table";
import Table from "@/components/companyDashboard/Table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Page = () => {
	const [allJobs, setAllJobs] = useState([]);

	useEffect(() => {
		const id = JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).user)._id;
		fetch("https://job-hunter-server-1.onrender.com/api/jobs/company/" + id)
			.then(res => res.json())
			.then(data => setAllJobs(data.data));
	}, []);

	return (
		<div className="container px-4 mx-auto">
			<h1 className="mt-6 mb-4 text-3xl font-semibold tracking-wide">Job Listings</h1>
			{/* {console.log(allJobs)} */}
			<Table data={allJobs} />
			
		</div>
	);
};

export default Page;
