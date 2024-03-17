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
import { useParams } from "next/navigation";

const HR = () => {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const appId = useParams().matcherId;
  console.log(singleApp);
  useEffect(() => {
    dispatch(getSingleApp(appId));
  }, []);

  return (
    <div className="p-8">
      {!singleApp?.process?.step2?.MeetingName ? (
        <div>
          <h2 className="text-3xl text-primary text-center font-bold">
            Waiting for technical Interview date
          </h2>
          <div className="m-auto" style={{ width: "800px" }}>
            <img
              src="https://cdn2.hubspot.net/hubfs/1877165/shutterstock_1451395859.jpg"
              alt="waiting response"
            ></img>
          </div>
        </div>
      ) : (
        <div>
          <div className=" grid md:grid-cols-2 items-center sm:grid-cols-1 gap-6">
            <div className="m-auto">
              <img
                src="https://media.istockphoto.com/id/1312120473/vector/interview-concept-professional-job-interview-business-people-work-man-businessman-design.jpg?s=612x612&w=0&k=20&c=EjW-KEkdAwCi_i393dBrWAkRpj2jXEAKNT7BMdjIXDk="
                alt="waiting response"
              ></img>
            </div>

            <div className="bg-slate-50 h-fit	 p-12">
              <h2 className="text-2xl text-primary  font-bold">
                Prepare your self for Technical interview
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
                  {" "}
                  {singleApp.process.step1.MettingDescription}{" "}
                </span>{" "}
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
