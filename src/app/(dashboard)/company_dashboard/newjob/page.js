"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const requiredFields = [
	{ field: "title", message: "*Title is required" },
	{ field: "info.description", message: "*Description is required" },
	{ field: "info.responsibilities", message: "*Responsibilities is required" },
	{ field: "skills", message: "*Skills is required" },
	{ field: "category", message: "*Category is required" },
	{ field: "education", message: "*Education is required" },
	{ field: "jobType", message: "*Job Type is required" },
	{ field: "place", message: "*Place is required" },
	{ field: "grade", message: "*Grade is required" },
];

export default function NewJob() {
	const router = useRouter();
	const [job, setJob] = useState({
		company: JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).user)._id,
		title: "",
		info: {
			description: "",
			responsibilities: "",
		},
		experience: 0,
		salary: 0,
		skills: [],
		category: "",
		education: "",
		jobType: "",
		place: "",
		grade: "",
		image:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
	});
	const [error, setError] = useState({});

	const [avilableJobs, setAvilableJobs] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(job);

		for (let { field, message } of requiredFields) {
			const value = field.split(".").reduce((o, k) => o && o[k], job);
			console.log(value, field, message);
			if (!value || (Array.isArray(value) && value.length === 0)) {
				setError({ [field]: message });
				return;
			}
		}
		setError({});

		fetch("https://job-hunter-server-1.onrender.com/api/jobs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify(job),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.error) {
					setError(data.error);
				} else {
					router.push("/company_dashboard/joblisting");
				}
			})
			.catch(err => {
				console.error(err);
			});
	};

	useEffect(() => {
		fetch(
			"https://job-hunter-server-1.onrender.com/api/companies/" + JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).user)._id
		)
			.then(res => res.json())
			.then(data => setAvilableJobs(data.data.avilableJobs))
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<>
			{avilableJobs > 0 ? (
				<section>
					<div className="flex items-center justify-start gap-2">
						<ShoppingBagIcon className="w-8 h-8 text-primary" />
						<h2 className="text-2xl font-semibold">Request to add new job</h2>
					</div>
					<form className="grid gap-8 p-4 md:grid-cols-2" onSubmit={handleSubmit}>
						<div>
							<Label>Job Title {error.title && <span className="text-sm text-red-500">{error.title}</span>}</Label>
							<Input type="text" placeholder="Job title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} />
						</div>
						<div>
							<Label>Salary</Label>
							<Input type="number" value={job.salary} onChange={e => setJob({ ...job, salary: +e.target.value })} />
						</div>
						<div className="row-span-2 ">
							<Label>
								Job Description
								{error["info.description"] && <span className="text-sm text-red-500">{error["info.description"]}</span>}
							</Label>
							<textarea
								className="w-full h-full p-3 border-gray-300 rounded-lg border-1 focus:outline-none"
								value={job.info.description}
								onChange={e => setJob({ ...job, info: { ...job.info, description: e.target.value } })}
							></textarea>
						</div>
						<div className="row-span-2 ">
							<Label>
								Job Responsibilites
								{error["info.responsibilities"] && <span className="text-sm text-red-500">{error["info.responsibilities"]}</span>}
							</Label>
							<textarea
								className="w-full h-full p-3 border-gray-300 rounded-lg border-1 focus:outline-none"
								value={job.info.responsibilities}
								onChange={e => setJob({ ...job, info: { ...job.info, responsibilities: e.target.value } })}
							></textarea>
						</div>
						<div>
							<Label htmlFor="years_of_experience">Years of experience</Label>
							<Input
								type="number"
								name="years_of_experience"
								id="years_of_experience"
								required=""
								value={job.experience}
								onChange={e => setJob({ ...job, experience: +e.target.value })}
							/>
						</div>
						<div>
							<Label>Skills {error.skills && <span className="text-sm text-red-500">{error.skills}</span>}</Label>
							<MultiSelect skills={job.skills} setSkills={skills => setJob({ ...job, skills })}>
								<option value="">Choose a Skills</option>
								<option value="html">HTML</option>
								<option value="css">CSS</option>
								<option value="javascript">JavaScript</option>
								<option value="react">React</option>
								<option value="vue">Vue</option>
								<option value="angular">Angular</option>
								<option value="node">Node</option>
								<option value="express">Express</option>
								<option value="mongodb">MongoDB</option>
								<option value="mui">Material-UI</option>
								<option value="tailwind">Tailwind</option>
								<option value="bootstrap">Bootstrap</option>
								<option value="sass">Sass</option>
								<option value="next">Next</option>
								<option value="nest">Nest</option>
								<option value="graphql">GraphQL</option>
								<option value="apollo">Apollo</option>
								<option value="redux">Redux</option>
							</MultiSelect>
						</div>
						<div>
							<Label>Categories {error.category && <span className="text-sm text-red-500">{error.category}</span>}</Label>
							<Select
								onChange={e => {
									setJob({ ...job, category: e.target.value });
								}}
								value={job.category}
							>
								<option value="">Choose a category</option>
								<option value="front-end">Front-End</option>
								<option value="back-end">Back-End</option>
								<option value="full-stack">Full-Stack</option>
							</Select>
						</div>
						<div>
							<Label>Education {error.education && <span className="text-sm text-red-500">{error.education}</span>}</Label>
							<Select
								onChange={e => {
									setJob({ ...job, education: e.target.value });
								}}
								value={job.education}
							>
								<option value="">Choose an Education Level</option>
								<option value="high school">High School</option>
								<option value="bachelor">Bachelor</option>
								<option value="master">Master</option>
								<option value="phd">PhD</option>
							</Select>
						</div>
						<div>
							<Label>Job Type {error.jobType && <span className="text-sm text-red-500">{error.jobType}</span>}</Label>
							<Select
								onChange={e => {
									setJob({ ...job, jobType: e.target.value });
									console.log(job.jobType);
									console.log(e.target.value);
								}}
								value={job.jobType}
							>
								<option value="">Choose suitable job type</option>
								<option value="full-Time">Full-Time</option>
								<option value="part-Time">Part-Time</option>
								<option value="remote">Remote</option>
							</Select>
						</div>
						<div>
							<Label>Place {error.place && <span className="text-sm text-red-500">{error.place}</span>}</Label>
							<Select
								onChange={e => {
									setJob({ ...job, place: e.target.value });
								}}
								value={job.place}
							>
								<option value="">Choose suitable job place</option>
								<option value="on-site">On-Site</option>
								<option value="remote">Remote</option>
								<option value="hybrid">Hybrid</option>
							</Select>
						</div>
						<div>
							<Label>Grade {error.grade && <span className="text-sm text-red-500">{error.grade}</span>}</Label>
							<Select
								onChange={e => {
									setJob({ ...job, grade: e.target.value });
								}}
								value={job.grade}
							>
								<option value="">Choose suitable job place</option>
								<option value="excellent">Excellent</option>
								<option value="very good">Very Good</option>
								<option value="good">Good</option>
								<option value="pass">Pass</option>
							</Select>
						</div>
						<div className="float-right p-4 text-end">
							<Button className="px-8">Add</Button>
						</div>
					</form>
				</section>
			) : (
				<section>
					<div className="flex items-center justify-start gap-2">
						<ShoppingBagIcon className="w-8 h-8 text-primary" />
						<h2 className="text-2xl font-semibold">Request to add new job</h2>
					</div>
					<div className="p-4 m-5">
						<p className="text-lg font-normal ">You have no available jobs to add new job. Please upgrade your plan.</p>
						<Link
							href="/landing/pricing"
							className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
						>
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Upgrade Plan
							</span>
						</Link>
					</div>
				</section>
			)}
		</>
	);
}
