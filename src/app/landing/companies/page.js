"use client";
import Company from "@/components/Company";
import Aside from "@/components/companies/Aside";
import Filter from "@/components/companies/Filter";
import Header from "@/components/companies/Header";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Compaines = () => {
	const company = useSelector(state => state.company.company);
	const [searchTerm, setSearchTerm] = useState("");
	const [checkedOptions, setCheckedOptions] = useState({
		technology: [],
		industry: [],
		companySize: [],
	});
	const dispatch = useDispatch();
	let filterdCompanies = company;

	if (checkedOptions.industry.length !== 0)
		filterdCompanies = filterdCompanies?.filter(company => checkedOptions.industry.includes(company.industry));

	if (checkedOptions.companySize.length !== 0)
		filterdCompanies = filterdCompanies?.filter(company => {
			if (checkedOptions.companySize.includes("1-10")) if (company.employeesNumber > 0 && company.employeesNumber < 11) return company;
			if (checkedOptions.companySize.includes("11-50"))
				if (company.employeesNumber > 10 && company.employeesNumber < 51) return company;
			if (checkedOptions.companySize.includes("51-200"))
				if (company.employeesNumber > 50 && company.employeesNumber < 201) return company;
		});

	if (checkedOptions.technology.length !== 0)
		filterdCompanies = filterdCompanies?.filter(company =>
			checkedOptions.technology.some(tech => company.techStack.includes(tech.toLowerCase()))
		);

	useEffect(() => {
		dispatch(getAllCompaniesAction());
	}, [dispatch]);

	const handelSearchChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			{company && (
				<div>
					<Header />
					<div className="flex flex-col p-6 md:flex-row">
						<Aside checkedOptions={checkedOptions} onCheck={setCheckedOptions} />
						<div className="flex flex-col gap-4 p-5 w-full ">
							<Filter onSearchChange={handelSearchChange} />
							<div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 h-fit">
								{filterdCompanies
									?.filter(item => {
										return searchTerm.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchTerm);
									})
									.map((companyItem, index) => (
											<Link key={companyItem._id} href={ `companies/${companyItem._id}`}>
												<Company key={companyItem._id} company={companyItem} />

											</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Compaines;
