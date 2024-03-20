/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axiosConfig";

const Chart2 = dynamic(() => import("@/components/Dashboard/Chart2"), {
  ssr: false,
});

const UserHome = () => {
  const user = useSelector((state) => state.auth.user);
  const skillsArr = [
    "HTML",
    "CSS",
    "JS",
    "C++",
    "C",
    "React",
    "Angular",
    "MUI",
    "Nodejs",
    "Php",
    "Python",
    "Java",
    "C#",
    "XML",
    "Bootstrap",
    "angular material",
    "tailwind",
    "Nextjs",
    "Nestjs",
    "SQL",
    "NOSQL",
    "MongoDB",
    "Oracle",
    "DataBase",
    "JQuery",
    "Vuejs",
    "firebase",
    "Socket.io",
    "Typescript",
    "Sass",
    "Scss",
  ];

  const PopularSkills = {
    HTML: 10,
    CSS: 8,
    JS: 9,
    "C++": 7,
    C: 7,
    React: 9,
    Angular: 8,
    MUI: 8,
    Nodejs: 9,
    Php: 6,
    Python: 10,
    Java: 8,
    "C#": 8,
    XML: 5,
    Bootstrap: 8,
    "angular material": 8,
    tailwind: 7,
    Nextjs: 9,
    Nestjs: 8,
    SQL: 9,
    NOSQL: 8,
    MongoDB: 8,
    Oracle: 7,
    DataBase: 6,
    JQuery: 6,
    Vuejs: 8,
    firebase: 8,
    "Socket.io": 7,
    Typescript: 9,
    Sass: 8,
    Scss: 8,
  };

  const [skills, setSkills] = useState(false);
  const [reviews, setReviews] = useState(false);

  function getSkill() {
    const skillNames = user.skills.map((skill) => skill.skillName);
    const skillsYetToBeAquired = skillsArr.filter((skill) => {
      if (!skillNames.includes(skill)) {
        return skill;
      }
    });
    // console.log(skillsYetToBeAquired);
    setSkills(skillsYetToBeAquired);
  }

  const getFormatedDate = function (dateString) {
    // 1. Create a Date object from the string
    const dateObj = new Date(dateString);
    // 2. Format the date using Intl.DateTimeFormat (recommended)
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long", // Use 'short' for abbreviated month names
      day: "numeric",
      year: "numeric",
    });
    const formattedDate = formatter.format(dateObj);
    return formattedDate;
  };

  async function getEmployeeReviews(employeeId) {
    try {
      const reviewsResponse = await axios.get(
        `/reviews/employee/${employeeId}`
      );
      const reviews = reviewsResponse.data.data;

      // Fetch company name for each review (assuming company ID is in the review data)
      const reviewsWithCompany = await Promise.all(
        reviews.map(async (review) => {
          const companyResponse = await axios.get(
            `/companies/${review.company}`
          );
          const company = companyResponse.data.data;
          return { ...review, companyName: company.name }; // Combine review with company name
        })
      );

      // Update state or return the reviews with company names
      setReviews(reviewsWithCompany); // Assuming you have a state variable to store reviews
      console.log("reviewsWithCompany: ", reviewsWithCompany);
      return reviewsWithCompany; // Or return the reviews if not using state management
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(false); // Set reviews to an error indicator (optional)
      return []; // Return empty array to handle errors gracefully (optional)
    }
  }

  useEffect(() => {
    getSkill();
    getEmployeeReviews(user._id);
  }, []);

  return (
    <>
      <div className="flex overflow-hidden bg-white">
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto "
        >
          <main>
            <div className="px-4 pt-6">
              <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 2xl:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        {user.userName} Status
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        Balance Your Career
                      </h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 text-base font-bold text-green-500">
                      skills
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div id="main-chart">
                    <Chart2></Chart2>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        Latest Skills
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        This is a list of More Skills That Companies Look For
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex flex-col mt-8 overflow-hidden"
                    style={{ height: "350px" }}
                  >
                    <div className="overflow-x-auto rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  #
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  Skill Name
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                >
                                  Popularity
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {skills
                                ? skills.map((skill, idx) => (
                                    <tr key={idx} className="hover:bg-[#eee]">
                                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                        {idx + 1}
                                      </td>
                                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                                        <span className="font-semibold">
                                          {skill}
                                        </span>
                                      </td>
                                      <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                        {PopularSkills[skill] >= 7 ? (
                                          <div className="flex items-center justify-start flex-1 text-base font-bold text-green-500">
                                            {PopularSkills[skill]}
                                            <svg
                                              className="w-5 h-5"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </div>
                                        ) : (
                                          <div className="flex items-center justify-start flex-1 text-base font-bold text-red-500">
                                            {PopularSkills[skill]}
                                            <svg
                                              className="w-5 h-5"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  ))
                                : ""}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Latest Reviews
                </h3>
                <div className="grid w-full grid-cols-1 gap-4 mt-4 lg:grid-cols-2 xl:grid-cols-3">
                  {reviews
                    ? reviews.map((rev) => (
                        <div
                          key={rev._id}
                          className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 "
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <span className="text-xl font-bold leading-none text-gray-900 sm:text-xl">
                                {rev.companyName}
                              </span>
                              <h3 className="text-base font-normal text-gray-500">
                                {rev.comment}
                              </h3>
                              <h3 className="text-base font-normal text-gray-500">
                                {getFormatedDate(rev.createdAt)}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))
                    : "You Did not Post Any Reviews Yet"}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserHome;
