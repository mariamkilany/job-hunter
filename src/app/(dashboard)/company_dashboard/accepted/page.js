"use client";
import AcceptedTabel from "@/components/companyDashboard/AcceptedTable";
import MatchersTable from "@/components/companyDashboard/MatchersTable";
import Table from "@/components/companyDashboard/Table";
import { useEffect, useState } from "react";

const Page = () => {
	const [allJobs, setAllJobs] = useState([]);
	const [selectedJob, setSelectedJob] = useState(null);
	const [showToast, setShowToast] = useState(false);

	const handleSelect = job => setSelectedJob(job);

	const handleInvite = employeeId => {
		const companyId = JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).user)._id;
		const application = {
			company: companyId,
			job: selectedJob._id,
			employee: employeeId,
		};
		fetch("https://job-hunter-server-1.onrender.com/api/applications", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(application),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === "Application created successfully") {
					setShowToast(true);
					setTimeout(() => {
						setShowToast(false);
					}, 1000);
				} else alert("Failed to send invitation");
			});
		const newMatchers = selectedJob.mathcings.filter(matcher => matcher.id !== employeeId);
		setSelectedJob({ ...selectedJob, mathcings: newMatchers });
		fetch("https://job-hunter-server-1.onrender.com/api/jobs/" + selectedJob._id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({ mathcings: newMatchers }),
		})
			.then(res => res.json())
			.then(data => console.log(data));
	};

	useEffect(() => {
		const id = JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).user)._id;
		fetch("https://job-hunter-server-1.onrender.com/api/jobs/company/" + id)
			.then(res => res.json())
			.then(data => setAllJobs(data.data.filter(job => job.status === "accepted")));
	}, []);

	return (
		<div className="container px-4 mx-auto">
			{!selectedJob && <h1 className="mt-6 mb-4 text-3xl font-semibold tracking-wide">Accepted Jobs</h1>}
			{!selectedJob && <AcceptedTabel data={allJobs} onSelect={handleSelect} />}
			{selectedJob && (
				<>
					<h1 className="mt-6 mb-8 text-3xl font-semibold tracking-wide">
						Avilable Matchers
						<button
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-right"
							onClick={() => setSelectedJob(null)}
						>
							Back to Jobs ➡️
						</button>
					</h1>
					{showToast && (
						<div style={{ position: "fixed", right: "30px", top: "5%", zIndex: 100 }}>
							<div
								id="toast-success"
								className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
								role="alert"
							>
								<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
									<svg
										className="w-5 h-5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>
									<span className="sr-only">Check icon</span>
								</div>
								<div className="text-sm font-normal ms-3">Employee Invitated successfully.</div>
								<button
									type="button"
									className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
									data-dismiss-target="#toast-success"
									aria-label="Close"
									onClick={() => setShowToast(false)}
								>
									<span className="sr-only">Close</span>
									<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					<MatchersTable data={selectedJob.mathcings} onInvite={handleInvite} />
				</>
			)}
		</div>
	);
};

export default Page;
