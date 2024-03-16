import React from "react";
import Input from "../Input";

const industries = [
	"Advertising",
	"Business Service",
	"Blockchain",
	"Cloud",
	"Consumer Tech",
	"Education",
	"Entertainment",
	"Finance",
	"Healthcare",
	"Insurance",
	"Technology",
];
const companySize = ["1-10", "11-50", "51-200"];
const technologies = [
	"HTML",
	"CSS",
	"Javascript",
	"React",
	"Redux",
	"Node.js",
	"Express.js",
	"MongoDB",
	"PostgreSQL",
	"AWS",
	"Firebase",
	"Angular",
	"Bootstrap",
	"PHP",
	"Laravel",
	"Wordpress",
	"Java",
	"C++",
	"C",
	"C#",
	"Python",
	"Go",
];

const Aside = ({ checkedOptions, onCheck }) => {
	return (
		<div className="flex flex-row gap-3 min-w-56 md:flex-col">
			<div className="hidden p-2 md:block">
				<h5 className="text-lg font-semibold  mb-5">Industry</h5>
				<div className="pl-3 ">
					{industries.map((industry, index) => (
						<div key={index} className="flex gap-3 pb-2 ">
							<Input
								type="checkbox"
								name={industry}
								id={industry}
								className="!w-4 !h-4 "
								onChange={e =>
									onCheck({
										...checkedOptions,
										industry: e.target.checked
											? [...checkedOptions.industry, e.target.name]
											: checkedOptions.industry.filter(item => item !== e.target.name),
									})
								}
							/>
							<label className="text-gray-700 " htmlFor={industry}>
								{industry}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="hidden p-2 md:block">
				<h5 className="text-lg font-semibold  mb-2 ">Company Size</h5>
				<div className="pl-3 ">
					{companySize.map((size, index) => (
						<div key={index} className="flex gap-3 pb-2 ">
							<Input
								type="checkbox"
								name={size}
								id={size}
								className="!w-4 !h-4 "
								onChange={e =>
									onCheck({
										...checkedOptions,
										companySize: e.target.checked
											? [...checkedOptions.companySize, e.target.name]
											: checkedOptions.companySize.filter(item => item !== e.target.name),
									})
								}
							/>
							<label className="text-gray-700 " htmlFor={size}>
								{size}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="hidden p-2 md:block">
				<h5 className="text-lg font-semibold ">Technologies</h5>
				<div className="pl-3 ">
					{technologies.map((technology, index) => (
						<div key={index} className="pb-2 ">
							<input
								type="checkbox"
								name={technology}
								id={technology}
								className="w-4 h-4 mr-2 "
								onChange={e =>
									onCheck({
										...checkedOptions,
										technology: e.target.checked
											? [...checkedOptions.technology, e.target.name]
											: checkedOptions.technology.filter(item => item !== e.target.name),
									})
								}
							/>
							<label className="text-gray-700 " htmlFor={technology}>
								{technology}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Aside;
