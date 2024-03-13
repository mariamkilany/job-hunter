"use client";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Profile() {
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
                    Youssef Adly
                  </h1>
                  <h6 className="font-light text-gray-500">
                    Product Designer at <b>Twitter</b>
                    {/* <h6>Manchester, UK</h6> */}
                  </h6>
                </div>
                <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex justify-center px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
              <h1 className="text-2xl font-bold text-blue-300 truncate">
                Youssef Adly
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
              <p className="text-gray-500">
                Iam a product designer + filmmaker currently working remotely at
                Twitter from beautiful Manchester, United Kingdom. Iam
                passionate about designing digital products that have a positive
                impact on the world.
              </p>
            </div>
            <div className="flex justify-between p-4 text-gray-500">
              <p>
                For 10 years, I have specialised in interface, experience &
                interaction design as well as working in user research and
                product strategy for product agencies, big tech companies &
                start-ups.
              </p>
            </div>
          </div>
          {/* Experiances */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Experiences</h6>

              <PlusIcon
                className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
              />
            </div>
            {/* 1st Experiences */}
            <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden md:block">
                <img src="/Images/Twitter.png" className="w-52" alt="" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between my-1">
                  <h6 className="text-gray-950 font-semibold">
                    Product Designer
                  </h6>
                  <PencilSquareIcon className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 hover:bg-blue-200 cursor-pointer" />
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                  <span className="text-gray-700 font-semibold">Twitter</span>
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
                  <span>Jun 2019 - Present (1y 1m)</span>
                </div>
                <div className="text-center sm:text-left">Manchester, UK</div>
                <div className="flex justify-between py-4 text-gray-700">
                  <p>
                    Created and executed social media plan for 10 brands
                    utilizing multiple features and content types to increase
                    brand outreach, engagement, and leads.
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* 2st Experiences */}
            <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
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
            </div>
            <hr></hr>
            <div className="text-violet-900 text-center py-3">
              Show 3 more experiences
            </div>
          </div>
          {/* Educations */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
            <div className="flex justify-between items-center font-semibold text-xl p-1">
              <h6 className="text-gray-900">Educations</h6>
              <PlusIcon
                className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
              />
            </div>
            {/* 1st Educations */}
            <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
              <div className="hidden md:block">
                <img src="/Images/Harvard.png" className="w-52" alt="" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between my-1">
                  <h6 className="text-gray-950 font-semibold">
                    Harvard University
                  </h6>
                  <PencilSquareIcon
                    className="w-8 border border-1 rounded p-1 border-teal-200 text-blue-900 
              hover:bg-blue-200 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                  <span>Postgraduate degree, Applied Psychology</span>
                </div>
                <div className="text-center sm:text-left">2010 - 2012</div>
                <div className="flex justify-between py-4 text-gray-700">
                  <p>
                    As an Applied Psychologist in the field of Consumer and
                    Society, I am specialized in creating business opportunities
                    by observing, analysing, researching and changing behaviour.
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* 2st Experiences */}
            <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
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
            </div>
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
              <a
                type="button"
                className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
              >
                Communication
              </a>
              <a
                type="button"
                className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
              >
                Analytics
              </a>
              <a
                type="button"
                className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
              >
                Facebook Ads
              </a>
              <a
                type="button"
                className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
              >
                Content Planning
              </a>
              <a
                type="button"
                className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
              >
                Community Manager
              </a>
            </div>
          </div>
          {/* Portfolios */}
          <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
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
            {/* Portfolios Cards */}
            <div className="flex flex-nowrap flex-col sm:flex-row gap-3">
              <a
                className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                href="#"
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
                    Card title
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </a>
              <a
                className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                href="#"
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
                    Card title
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </a>
              <a
                className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                href="#"
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
                    Card title
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </a>
              {/* Repeat the above card structure for additional cards */}
            </div>
          </div>

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
                  <div className="text-sm">jakegyll@email.com</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <DevicePhoneMobileIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Phone</div>
                  <div className="text-sm">+44 1245 572 135</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <LanguageIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Languages</div>
                  <div className="text-sm">English, French</div>
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
                <img src="/Images/icons/Instagram.png" className="w-5" alt="" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Instagram</div>
                  <div className="text-sm text-blue-600">
                    instagram.com/jakegyll
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <img src="/Images/icons/Twitter.png" className="w-5" alt="" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Twitter</div>
                  <div className="text-sm text-blue-600">
                    twitter.com/jakegyll
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                <GlobeAltIcon className="w-5 text-slate-500" />
                <div className="flex flex-col justify-center">
                  <div className="font-light text-zinc-500">Website</div>
                  <div className="text-sm text-blue-600">www.jakegyll.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
