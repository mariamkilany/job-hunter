/* eslint-disable @next/next/no-img-element */
"use client";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { v4 as uuid } from "uuid";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../../axiosConfig";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

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

  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleModal = () => {
    setStatus(!status);
  };
  const [userData, setUserData] = useState({});
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.put(`/api/users/${userId}`, userData);
      console.log("User updated successfully:", response.data);
      // Handle successful update (e.g., show success message, redirect)
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
      id="main-content"
      className="relative w-full h-full p-5 overflow-y-auto  "
    >
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-8">
          <div>
            <img
              className="object-cover w-full h-32 lg:h-48"
              src="/Images/cover.png"
              alt="cover"
            />
          </div>
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="w-24 h-24 rounded-full ring-4 ring-blue-300 sm:h-32 sm:w-32"
                  src="/Images/Avatar.png"
                  alt="Avatar"
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
                  <h1 className="text-2xl font-bold text-blue-300 truncate">
                    {/* Youssef Adly */}
                    {user.userName}
                  </h1>
                  <h6 className="font-light text-gray-500">
                    {/* Product Designer at <b>Twitter</b> */}
                    <b>{user.jobTitle}</b>
                  </h6>
                </div>
                <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex justify-center px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={handleModal}
                  >
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
              <h1 className="text-2xl font-bold text-blue-300 truncate">
                {/* Youssef Adly */}
                {user.userName}
              </h1>
            </div>
          </div>
          {/* About Me */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">About Me</h6>
              <PencilSquareIcon
                className="w-8 border border-1 rounded p-1 border-blue-500 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
              />
            </div>
            <div className="flex justify-between p-4 text-gray-500">
              <p className="text-gray-700">
                <b>Date Of Birth: {"  "} </b> {getFormatedDate(user.birthDate)}
                <br />
                <b>Gender: {"  "}</b> {user.gender}
                <br />
                <b>Location: {"  "}</b> {user.location.city} -{" "}
                {user.location.country}
                <br />
                <b>Minimum Salary: {"  "}</b> {user.minimumSalary}
              </p>
            </div>
            {/* <div className="flex justify-between p-4 text-gray-500">
              <p>
                For 10 years, I have specialised in interface, experience &
                interaction design as well as working in user research and
                product strategy for product agencies, big tech companies &
                start-ups.
              </p>
            </div> */}
          </div>
          {/* Experiances */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Experiences</h6>

              <PencilSquareIcon
                className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
              />
            </div>
            {/* 1st Experiences */}
            <div className="flex items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden sm:block">
                <img src="/Images/icons/work.svg" className="w-20" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start">
                <div className="flex items-center justify-between my-1">
                  <h6 className="text-gray-950 font-semibold">
                    {user.jobTitle[0].toUpperCase() + user.jobTitle.slice(1)}{" "}
                  </h6>
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                  <span>
                    {user.typeOfJob[0].toUpperCase() +
                      user.typeOfJob.slice(1) +
                      "  .  "}{" "}
                    {user.workPlaceType[0].toUpperCase() +
                      user.workPlaceType.slice(1)}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  {user.yearsOfExperience} Years of Experience
                </div>
              </div>
            </div>
            {/* <hr></hr> */}
            {/* 2st Experiences */}
            {/* <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden md:block">
                <img src="/Images/GoDaddy.png" className="w-36" alt="" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h6 className="text-gray-950 font-semibold">
                    Growth Marketing Designer
                  </h6>
                  <PencilSquareIcon className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 hover:bg-blue-200 cursor-pointer" />
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2  my-1">
                  <span className="text-gray-700 font-semibold">GoDaddy</span>
                  <span>
                    <svg
                      width="4"
                      height="5"
                      viewBox="0 0 4 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                    </svg>
                  </span>
                  <span>Full-Time</span>
                  <span>
                    <svg
                      width="4"
                      height="5"
                      viewBox="0 0 4 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                    </svg>
                  </span>
                  <span>Jun 2011 - May 2019 (8y)</span>
                </div>
                <div className="text-center sm:text-left">Manchester, UK</div>
                <div className="flex justify-between py-4 text-gray-700">
                  <p>
                    Developed digital marketing strategies, activation plans,
                    proposals, contests and promotions for client initiatives
                  </p>
                </div>
              </div>
            </div> */}
            {/* <hr></hr>
            <div className="text-violet-900 text-center py-3">
              Show 3 more experiences
            </div> */}
          </div>
          {/* Educations */}
          <div className="flex flex-col justify-center p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Educations</h6>
              <PencilSquareIcon
                className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
              />
            </div>
            {/* 1st Educations */}
            <div className="flex items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden sm:block">
                <img
                  src="/Images/icons/university.svg"
                  className="w-20"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start">
                <div className="flex items-center justify-between my-1">
                  <h6 className="text-gray-950 font-semibold">
                    {user.educationLevel[0].toUpperCase() +
                      user.educationLevel.slice(1)}{" "}
                    Degree
                  </h6>
                  {/* <PencilSquareIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  /> */}
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                  <span>
                    Grade: {user.grade[0].toUpperCase() + user.grade.slice(1)}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  Graduation Year: {user.graduationYear}
                </div>
                {/* <div className="flex justify-between py-4 text-gray-700">
                  <p>
                    Grade: {user.grade[0].toUpperCase() + user.grade.slice(1)}
                    As an Applied Psychologist in the field of Consumer and
                    Society, I am specialized in creating business opportunities
                    by observing, analysing, researching and changing behaviour.
                  </p>
                </div> */}
              </div>
            </div>
            {/* <hr></hr> */}
            {/* 2st Experiences */}
            {/* <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden md:block">
                <img src="/Images/Toronto.png" className="w-36" alt="" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h6 className="text-gray-950 font-semibold">
                    University of Toronto
                  </h6>
                  <PencilSquareIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2  my-1">
                  <span>Bachelor of Arts, Visual Communication</span>
                </div>
                <div className="text-center sm:text-left">2005 - 2009</div>
                <div className="flex justify-between py-4 text-gray-700">
                  <p>
                    Developed digital marketing strategies, activation plans,
                    proposals, contests and promotions for client initiatives
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="text-violet-900 text-center py-3">
              Show 2 more educations
            </div> */}
          </div>
          {/* Skills */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Skills</h6>
              <div>
                <div className="flex gap-x-2">
                  <PlusIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  />
                  <PencilSquareIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              {user.skills.map((skill) => (
                <a
                  key={uuid()}
                  type="button"
                  className="cursor-pointer my-2 mx-1 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  {skill.skillName}
                </a>
              ))}
            </div>
          </div>
          {/* Portfolios */}
          {/* <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Portfolios</h6>
              <div>
                <div className="flex gap-x-2">
                  <PlusIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            Portfolios Cards
            <div className="flex flex-nowrap flex-col md:flex-row gap-3">
              <a
                className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                href={user.links.portfolio}
                target="_blank"
              >
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {user.links.portfolio}
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </a>
            </div>
          </div> */}
          {/* End Of Profile */}
        </div>
        {/* Cards */}
        <div className="col-span-12 lg:col-span-4">
          {/* Card 1 */}
          <div className="relative p-5 mb-4 overflow-hidden bg-white border border-gray-200 group rounded-xl dark:border-gray-800 dark:bg-gray-900">
            <div
              aria-hidden="true"
              className="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
            />
            <div className="relative">
              <div className="flex flex-row-reverse items-center justify-between font-bold">
                <PencilSquareIcon
                  className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                />
                Additional Details
              </div>
              <div className="flex items-start gap-2 mt-2 pb-6 rounded-b-[--card-border-radius]">
                <EnvelopeIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Email</div>
                  <div className="text-sm">{user.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <DevicePhoneMobileIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Phone</div>
                  <div className="text-sm">+0{user.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <LanguageIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Languages</div>
                  <div className="text-sm">English, Arabic</div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative p-5 mb-4 overflow-hidden bg-white border border-gray-200 group rounded-xl dark:border-gray-800 dark:bg-gray-900">
            <div
              aria-hidden="true"
              className="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
            />
            <div className="relative">
              <div className="flex flex-row-reverse items-center justify-between font-bold">
                <PencilSquareIcon
                  className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                />
                Social Links
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                {/* <img src="/Images/icons/Instagram.png" className="w-5" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  id="linkedin"
                >
                  <path
                    d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                    fill="#64748b"
                    className="color000000 svgShape"
                  />
                </svg>

                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">LinkedIn</div>
                  <div className="text-sm text-blue-600">
                    <a href={user.links.linkedIn} target="_blank">
                      {user.links.linkedIn.replace(/^https:\/\//, "")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                {/* <img src="/Images/icons/Twitter.png" className="w-5" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={20}
                  height={20}
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#64748b"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDasharray
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z" />
                    </g>
                  </g>
                </svg>
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Github</div>
                  <div className="text-sm text-blue-600">
                    <a href={user.links.github} target="_blank">
                      {user.links.github.replace(/^https:\/\//, "")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <GlobeAltIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">portfolio</div>
                  <div className="text-sm text-blue-600">
                    <a href={user.links.portfolio} target="_blank">
                      {user.links.portfolio.replace(/^https:\/\//, "")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          status ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal body */}
            <div className="p-4 md:p-10 space-y-4 md:pt-4 relative">
              <div className="absolute top-7 right-6">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleModal}
                  data-modal-hide="static-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex items-center   sm:direction-columns">
                {/* <img
                  src={company.image}
                  alt="logo company "
                  className=" inline rounded-full w-12 me-4"
                ></img> */}
                {/* <div>
                  <h3 className="font-bold text-xl mt-0">aaaaaa</h3>
                  <span className="text-sm"> aaaa ,</span>
                  <span className="text-sm"> aaaaaaa</span>
                </div> */}
              </div>
              <div className=" space-y-4 ps-8">
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          defaultValue
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                // onClick={handleAcceptance}
              >
                Accept Job Post
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                // onClick={handleReject}
              >
                Reject Job Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
