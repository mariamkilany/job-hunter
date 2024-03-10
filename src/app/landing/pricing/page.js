import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const Price = () => {
  return (
    <div>
      <div className="  h-full  text-center">
        <header className=" bg-primary p-20 pt-44 flex flex-col gap-5">
          <h1
            className="text-5xl font-bold  text-gray-100"
            style={{ textTransform: "capitalize" }}
          >
            Pricing plans for Recruiters Company
          </h1>
          <p className="text-gray-300">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience,
          </p>
        </header>
        <div className="flex justify-center gap-5">
          <div className=" p-2  px-4  mt-6 text-center border-2 rounded-3xl  ">
            <button className=" text-primary hover:text-white hover:bg-primary  p-1 px-3 me-2  rounded-3xl ">
              Monthly
            </button>
            <button className=" text-primary hover:text-white hover:bg-primary  p-1 px-3  rounded-3xl ">
              Anually
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-16  text-left mt-10 mb-10 px-10">
          <div
            className="p-8 pb-14 pt-10 border-2 rounded-2xl border-stone-300  group  hover:border-primary  shadow "
            style={{ cursor: "pointer" }}
          >
            <h2 className="font-bold text-2xl">Free Trial</h2>
            <p className="text-gray-400 py-5 text-1xl">
              A plan that scales with your rapidly growing business.
            </p>

            <span className="font-bold text-4xl">Free</span>
            <span>/month</span>
            <button className="my-6 text-primary border border-primary  group-hover:text-white  group-hover:bg-primary hover:bg-primary-500 p-3 hover:shadow-xl hover:translate-y-0.5 transition rounded w-full">
              Start
            </button>
            <div className="flex flex-col">
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
            </div>
          </div>
          <div
            className="p-8 pb-14  pt-10 border-2 rounded-2xl border-stone-300  group  hover:border-primary  shadow "
            style={{ cursor: "pointer" }}
          >
            <h2 className="font-bold text-2xl">Startup</h2>
            <p className="text-gray-400 py-5 text-1xl">
              A plan that scales with your rapidly growing business.
            </p>

            <span className="font-bold text-4xl">$60</span>
            <span>/month</span>
            <button className="my-6 text-primary border border-primary  group-hover:text-white  group-hover:bg-primary hover:bg-primary-500 p-3 hover:shadow-xl hover:translate-y-0.5 transition rounded w-full">
              Buy Plan
            </button>
            <div className="flex flex-col">
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
            </div>
          </div>
          <div
            className="p-8 pb-14  pt-10 border-2 rounded-2xl border-stone-300  group  hover:border-primary  shadow "
            style={{ cursor: "pointer" }}
          >
            <h2 className="font-bold text-2xl">Startup</h2>
            <p className="text-gray-400 py-5 text-1xl">
              A plan that scales with your rapidly growing business.
            </p>

            <span className="font-bold text-4xl">$60</span>
            <span>/month</span>
            <button className="my-6 text-primary border border-primary  group-hover:text-white  group-hover:bg-primary hover:bg-primary-500 p-3 hover:shadow-xl hover:translate-y-0.5 transition rounded w-full">
              Buy Plan
            </button>

            <div className="flex flex-col">
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
              <span
                className="text-gray-500 mb-4"
                style={{ display: "inline-block" }}
              >
                <CheckIcon
                  className="me-4"
                  style={{ width: "25px", display: "inline-block" }}
                ></CheckIcon>
                Up to 3000 post
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
