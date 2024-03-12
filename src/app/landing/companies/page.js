"use client";
import Company from "@/components/Company";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { getAllCompaniesAction } from "@/lib/features/company/companyActions";
import {
  getCompanyByIndustry,
  getCompanyIndustry,
} from "@/lib/features/company/companySlice";

import style from "@/styles/Companies.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Compaines = () => {
  const company = useSelector((state) => state.company.filteredcompany);
  

  const [checkedOptions, setCheckedOptions] = useState({});
  // console.log(company.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompaniesAction());
  }, []);
  const handelChange = (event) => {
    setCheckedOptions({
      ...checkedOptions,
      [event.target.name]: event.target.checked,
    });
    console.log(event.target.name)
    dispatch(
      getCompanyByIndustry({
        ...checkedOptions,
        [event.target.name]: event.target.checked,
      })
    );
  };
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
  const companySize = [
    "1-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ];
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
  return (
    <div>
      <div className="bg-primary min-h-96  flex items-center justify-center">
        <div className="  px-6 pt-14 lg:px-8 heroSection h-full  text-center ">
          <div className=" py-2 sm:py-48 lg:py-2 ">
            <div className="text-center  ">
              <h1 className="text-4xl text-gray-100 font-bold tracking-tight  sm:text-6xl">
                Find your dream companies
              </h1>
              <p className="mt-6 text-lg leading-8  text-gray-100">
                Find the dream companies you dream work for
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row p-6">
        <div className=" min-w-56 flex flex-row md:flex-col gap-3">
          <div className=" p-2 hidden md:block">
            <h5 className=" font-semibold text-lg ">Industry</h5>
            <div className=" pl-3">

              {industries.map((industry, index) => (
                <div key={index} className=" pb-2 flex gap-3">
                  <Input
                    type="checkbox"
                    name={industry}
                    id={industry}
                    className="!w-4 !h-4 "
                    onChange={(e) => handelChange(e)}
                  />
                  <label className=" text-gray-700 " htmlFor={industry}>
                    {industry}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-2 hidden md:block">
            <h5 className=" font-semibold text-lg ">Company Size</h5>
            <div className=" pl-3">
              {companySize.map((size, index) => (
                <div key={index} className=" pb-2 flex gap-3  ">
                  <Input
                    type="checkbox"
                    name="industry"
                    id={size}
                    className="!w-4 !h-4 "
                    // onChange={(e)=>handelChange(e)}
                  />
                  <label className=" text-gray-700 " htmlFor={size}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-2 hidden md:block">
            <h5 className=" font-semibold text-lg ">Technologies</h5>
            <div className=" pl-3">
              {technologies.map((technology, index) => (
                <div key={index} className=" pb-2">
                  <input
                    type="checkbox"
                    name="industry"
                    id={technology}
                    className="mr-2 w-4 h-4 "
                    // onChange={(e)=>handelChange(e)}
                  />
                  <label className=" text-gray-700 " htmlFor={technology}>
                    {technology}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" p-5 flex flex-col gap-4">
          <div className="border p-4 flex flex-col gap-2">
            <Label className="text-lg text-gray-600">Company title </Label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </div>
              <Input className="ps-8" />
            </div>
          </div>
          {company?.map((companyItem, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 h-fit"
            >
              <Company company={companyItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compaines;
