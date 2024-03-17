"use client";
import React, { useEffect, useState } from "react";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import {
  getSingleApp,
  updateSingleApp,
} from "@/lib/features/application/applicationAction";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import Label from "@/components/Label";
import Input from "@/components/Input";

const schema = yup
  .object({
    MeetingName: yup.string().required("Meeting Name can't be empty"),
    MettingDescription: yup
      .string()
      .required("Meeting Description can't be empty"),
    meetingDate: yup.string().required("Meeting date  can't be empty"),
    meetingTime: yup.string().required("Meeting Time  can't be empty"),
    instructions: yup.string().required("Instructions  can't be empty"),
    meetingLink: yup.string().required("Meeting Link  can't be empty"),
  })
  .required();

const Technical = () => {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const applicationId = useParams().matcherId;
  const jobId = useParams().id;

  const [updateToggle, setUpdateToggle] = useState(false);

  // console.log(applicationId)
  const router = useRouter();

  const defaultValues = {
    MeetingName: "",
    MettingDescription: "",
    meetingDate: "",
    meetingTime: "",
    instructions: "",
    meetingLink: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  useEffect(() => {
    dispatch(getSingleApp(applicationId));
  }, []);

  useEffect(() => {
    // Set default values after singleApp is updated
    if (singleApp?.process?.step2?.MeetingName) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, singleApp.process.step2[key]);
      });
    }
  }, [singleApp, setValue]);

  const handleUpdateInfo = (data) => {
    const obj = {
      process: {
        step2: data,
      },
    };
    event.preventDefault();
    dispatch(updateSingleApp({ id: applicationId, updateInfo: obj }));
    handleUpdateToggle();
  };
  const handleNext = async () => {
    dispatch(
      updateSingleApp({ id: applicationId, updateInfo: { status: "step3" } })
    ).then(() => {
      router.push(
        `/company_dashboard/joblisting/${jobId}/${applicationId}/step3`
      );
    });
  };
  const handleReject = () => {
    dispatch(
      updateSingleApp({
        id: applicationId,
        updateInfo: { status: "rejected" },
      })
    );
    router.push(`/company_dashboard/joblisting/${jobId}`);
  };

  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";

  return (
    <div>
      {/*  header and button */}
      <div className="flex justify-between ">
        <h2 className="text-3xl my-6 font-bold text-primary">
          Technical Interview
        </h2>
      </div>
      {/* Meeting Card */}

      <div className="grid sm:grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
        <div className="m-auto w-4/5">
          <img
            src="https://images.shiksha.com/mediadata/images/articles/1581572466phprJQE2s.jpeg"
            alt="background"
          ></img>
        </div>
        <div className="mt-8  w-full relative">
          <div className="bg-white rounded-lg shadow-xl p-10">
            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4">
                  Meeting Name:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.MeetingName}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4">
                  Meeting Description:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.MettingDescription}
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4">
                  Meeting Date:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.meetingDate}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4 text-primary-500 pe-4">
                  Meeting Time:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.meetingTime}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4">
                  Instructions:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.instructions}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-primary-500 pe-4">
                  Meeting Link:
                </span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step2?.meetingLink}
                </span>
              </p>
            </div>
            <div className="absolute top-0 right-5">
              <button
                onClick={handleUpdateToggle}
                data-modal-target="update-modal"
                data-modal-toggle="update-modal"
                className="block focus:outline-none f text-sm   text-center "
                type="button"
              >
                <PencilSquareIcon className="inline w-5 me-2 text-gray-700"></PencilSquareIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end items-center flex-wrap">
          <Button className="px-10" onClick={handleNext}>
            Next
          </Button>
          <Button className="bg-red-500  px-8" onClick={handleReject}>
            Reject
          </Button>
        </div>
      </div>

      {/* Edit Meeting MOdal  */}
      <div
        id="update-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          updateToggle ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
          {/* Modal content */}
          <form
            className="relative bg-white rounded-lg shadow "
            onSubmit={handleSubmit(handleUpdateInfo)}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-primary  ">
                Update Meeting
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleUpdateToggle}
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
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <div className="mb-4">
                  <Label
                    htmlFor="MeetingName"
                    className="block font-medium mb-1"
                  >
                    Meeting Name
                  </Label>
                  <Input
                    type="text"
                    id="MeetingName"
                    name="MeetingName"
                    className="form-input w-full"
                    {...register("MeetingName")}
                  />
                  <ErrorMessage>{errors.MeetingName?.message}</ErrorMessage>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="MettingDescription"
                    className="block font-medium mb-1"
                  >
                    Meeting Description
                  </Label>
                  <textarea
                    id="MettingDescription"
                    name="MettingDescription"
                    className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block w-full `}
                    style={{ resize: "none" }}
                    {...register("MettingDescription")}
                  ></textarea>
                  <ErrorMessage>
                    {errors.MettingDescription?.message}
                  </ErrorMessage>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="meetingDate"
                    className="block font-medium mb-1"
                  >
                    Meeting Date
                  </Label>
                  <Input
                    type="date"
                    id="meetingDate"
                    name="meetingDate"
                    className="form-input w-full"
                    {...register("meetingDate")}
                  />
                  <ErrorMessage>{errors.meetingDate?.message}</ErrorMessage>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="meetingTime"
                    className="block font-medium mb-1"
                  >
                    Meeting Time
                  </Label>
                  <Input
                    type="time"
                    id="meetingTime"
                    name="meetingTime"
                    className="form-input w-full"
                    {...register("meetingTime")}
                  />
                  <ErrorMessage>{errors.meetingTime?.message}</ErrorMessage>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="instructions"
                    className="block font-medium mb-1"
                  >
                    Instructions
                  </Label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block w-full `}
                    style={{ resize: "none" }}
                    {...register("instructions")}
                  ></textarea>
                  <ErrorMessage>{errors.instructions?.message}</ErrorMessage>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="meetingLink"
                    className="block font-medium mb-1"
                  >
                    Meeting Link
                  </Label>
                  <Input
                    type="text"
                    id="meetingLink"
                    name="meetingLink"
                    className="form-input w-full"
                    {...register("meetingLink")}
                  />
                  <ErrorMessage>{errors.meetingLink?.message}</ErrorMessage>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="update-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Meeting
              </button>
              <button
                data-modal-hide="update-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                onClick={handleUpdateToggle}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Technical;
