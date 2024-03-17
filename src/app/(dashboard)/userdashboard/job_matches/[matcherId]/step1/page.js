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
  const router = useRouter();

  const appId = useParams().matcherId;
  const stepName = usePathname();

  useEffect(() => {
    dispatch(getSingleApp(appId)).then( (response)=>{
      if( response.payload.data.status!=="step1"){
        router.push(`/userdashboard/job_matches/${appId}/${response.payload.data.status}`)

      }else if(!stepName.includes("step1")) {
        router.push(`/userdashboard/job_matches`)
    }
    }
    )
 
   
  }, []);


  return (
    <div className="p-10 pt-20">
      {!singleApp?.process?.step1?.MeetingName ? (
        <div>
          <h2 className="text-3xl text-primary text-center font-bold">
            Waiting for Interview date
          </h2>
          <div className="m-auto" style={{ width: "800px" }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/518/119/non_2x/business-people-waiting-for-a-job-interview-vector.jpg"
              alt="waiting response"
            ></img>
          </div>
        </div>
      ) : (
        <div>
          <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-6 ">
            <div className="m-auto">
              <img
                src="https://www.vlaadco.com/wp-content/uploads/2023/04/Megaphone-illustration-High-Resolution-JPG-file-1-scaled.jpg"
                alt="waiting response"
              ></img>
            </div>

            <div className="bg-slate-50	 p-12">
              <h2 className="text-2xl text-primary  font-bold">
                Prepare your self for HR interview
              </h2>
              <p className="font-bold m-3">
                Interview Name :
                <span className=" ms-2 text-gray-500 font-medium">
                  {" "}
                  {singleApp.process.step1.MeetingName}{" "}
                </span>
              </p>
              <p className="font-bold m-3">
                <NewspaperIcon className="w-5 inline me-2"></NewspaperIcon> :
                <span className=" ms-2 text-gray-500 font-medium">
                  {singleApp.process.step1.MettingDescription}
                </span>
              </p>
              <p className="font-bold m-3">
                <ClockIcon className="w-5 inline me-2"></ClockIcon>:
                <span className=" ms-2 text-gray-500 font-medium">
                  {singleApp.process.step1.meetingTime}
                </span>
              </p>
              <p className="font-bold m-3">
                <CalendarDaysIcon className="w-5 inline me-2"></CalendarDaysIcon>
                :{" "}
                <span className=" ms-2 text-gray-500 font-medium">
                  {singleApp.process.step1.meetingDate}
                </span>
              </p>
              <p className="font-bold m-3">
                <PaperClipIcon className="w-5 inline me-2"></PaperClipIcon> :
                <span className=" ms-2 text-gray-500 font-medium">
                  {singleApp.process.step1.meetingLink}
                </span>
              </p>

              <p className="font-bold m-3">
                <RectangleStackIcon className="w-5 inline me-2"></RectangleStackIcon>
                :{" "}
                <span className=" ms-2 text-gray-500 font-medium">
                  {singleApp.process.step1.instructions}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HR;
