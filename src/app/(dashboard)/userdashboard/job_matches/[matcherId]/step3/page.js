"use client";
import React, { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  PaperClipIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

import { useDispatch, useSelector } from "react-redux";
import { getSingleApp } from "@/lib/features/application/applicationAction";
import { useParams, usePathname, useRouter } from "next/navigation";

const HR = () => {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const appId = useParams().matcherId;
  const router =  useRouter();
  const stepName = usePathname();

  console.log(singleApp)
  useEffect(() => {
    dispatch(getSingleApp(appId)).then( (response)=>{
      console.log(response.payload.data.status)
      console.log(singleApp)
      if(response.payload.data.status!=="step3"){
        router.push(`/userdashboard/job_matches/${appId}/${response.payload.data.status}`)

      }else if(!stepName.includes("step3")) {
        router.push(`/userdashboard/job_matches`)
    }
    }
    )
  }, []);

  return (
    <div className="p-10 pt-20">
      {!singleApp?.process?.step3?.taskName ? (
        <div>
          <h2 className="text-3xl text-primary text-center font-bold">
            Waiting for task to be assigned
          </h2>
          <div className="m-auto mt-6" style={{ width: "300px" }}>
            <img
              src="https://www.yippeecode.com/wp-content/uploads/2021/10/task_managerment_512.png"
              alt="waiting response"
            ></img>
          </div>
        </div>
      ) : (
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="m-auto">
            <img
              src="https://t4.ftcdn.net/jpg/05/15/17/75/360_F_515177527_E6MsyK5ta0uZlxTpWhol7ZqF5vDTtO4d.jpg"
              alt="waiting response"
            />
          </div>

          <div className="bg-slate-50	 p-12">
            <h2 className="text-2xl text-primary  font-bold">Task Info</h2>
            <p className="font-bold m-3">
              Task Name:
              <span className=" ms-2 text-gray-500">
                {" "}
                {singleApp?.process?.step3?.taskName}{" "}
              </span>
            </p>

            <p className="font-bold m-3">
              <NewspaperIcon className="w-5 inline me-2"></NewspaperIcon> :{" "}
              <span className=" ms-2 text-gray-500">
                {" "}
                {singleApp?.process?.step3?.taskDescription}{" "}
              </span>
            </p>
            <p className="font-bold m-3">
              <ClockIcon className="w-5 inline me-2"></ClockIcon>:{" "}
              <span className=" ms-2 text-gray-500">
                {" "}
                {singleApp?.process?.step3?.taskDeadline}{" "}
              </span>
            </p>
            {/* <p className="font-bold m-3">
              <CalendarDaysIcon className="w-5 inline me-2"></CalendarDaysIcon>{" "}
              : <span className=" ms-2 text-gray-500">  {singleApp?.process?.step3?.taskDay}</span>
            </p> */}
            <p className="font-bold m-3">
              <PaperClipIcon className="w-5 inline me-2"></PaperClipIcon> :{" "}
              <span className=" ms-2 text-gray-500">
                {singleApp?.process?.step3?.taskLink}{" "}
              </span>
            </p>

            <p className="font-bold m-3">
              <RectangleStackIcon className="w-5 inline me-2"></RectangleStackIcon>{" "}
              :{" "}
              <span className=" ms-2 text-gray-500">
                {" "}
                {singleApp?.process?.step3?.taskInstrcutions}{" "}
              </span>
            </p>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default HR;
