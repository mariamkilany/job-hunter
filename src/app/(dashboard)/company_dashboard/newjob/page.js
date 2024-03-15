"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NewJob() {
	const [job, setJob] = useState({
		company: "",
		title: "",
		info: {
			description: "",
			responsibilities: "",
		},
		salary: 0,
		experience: 0,
		skills: [],
		category: "",
		education: "",
		jobType: [],
		place: "",
		grade: "",
		image:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
	});
	return (
		<section>
			<div className="flex items-center justify-start gap-2">
				<ShoppingBagIcon className="w-8 h-8 text-primary" />
				<h2 className="text-2xl font-semibold">Request to add new job</h2>
			</div>
			<div className="grid gap-8 p-4 md:grid-cols-2">
				<div>
					<Label>Job Title</Label>
					<Input type="text" placeholder="Job title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} />
				</div>
				<div>
					<Label>Salary</Label>
					<Input type="text" placeholder="Salary" value={job.salary} onChange={e => setJob({ ...job, salary: e.target.value })} />
				</div>
				<div className="row-span-2 ">
					<Label>Job Description</Label>
					<textarea
						className="w-full h-full p-3 border-gray-300 rounded-lg border-1 focus:outline-none"
						value={job.info.description}
						onChange={e => setJob({ ...job, info: { ...job.info, description: e.target.value } })}
					></textarea>
				</div>
				<div className="row-span-2 ">
					<Label>Job Responsibilites</Label>
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
						onChange={e => setJob({ ...job, experience: e.target.value })}
					/>
				</div>
				<div>
					<Label>Skills</Label>
					<MultiSelect>
						<option selected>Choose a Skills</option>
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
					<Label>Categories</Label>
					<Select
						onChange={e => {
							setJob({ ...job, category: e.target.value });
						}}
						value={job.category}
					>
						<option selected>Choose a category</option>
						<option value="front-end" selected>
							Front-End
						</option>
						<option value="back-end">Back-End</option>
						<option value="full-stack">Full-Stack</option>
					</Select>
				</div>
				<div>
					<Label>Education</Label>
					<Select
						onChange={e => {
							setJob({ ...job, education: e.target.value });
						}}
						value={job.education}
					>
						<option selected>Choose an Education Level</option>
						<option value="high school">High School</option>
						<option value="bachelor">Bachelor</option>
						<option value="master">Master</option>
						<option value="phd">PhD</option>
					</Select>
				</div>
				<div>
					<Label>Job Type</Label>
					<Select
						onChange={e => {
							setJob({ ...job, jobType: e.target.value });
						}}
						value={job.jobType}
					>
						<option selected>Choose suitable job type</option>
						<option value="full-time">Full-Time</option>
						<option value="part-time">Part-Time</option>
						<option value="remote">Remote</option>
					</Select>
				</div>
				<div>
					<Label>Place</Label>
					<Select
						onChange={e => {
							setJob({ ...job, place: e.target.value });
						}}
						value={job.place}
					>
						<option selected>Choose suitable job place</option>
						<option value="on-site">On-Site</option>
						<option value="remote">Remote</option>
						<option value="hybrid">Hybrid</option>
					</Select>
				</div>
			</div>
			<div className="float-right p-4">
				<Button className="px-8">Add</Button>
			</div>
		</section>
	);
}
