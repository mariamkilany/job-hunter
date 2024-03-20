"use client";
import React, { useEffect, useState } from "react";
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import {
  getSingleApp,
  updateSingleApp,
} from "@/lib/features/application/applicationAction";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import Label from "@/components/Label";
import Input from "@/components/Input";

const schema = yup
  .object({
    taskName: yup.string().required("Task Name can't be empty"),
    taskDescription: yup.string().required("Task Description can't be empty"),
    taskDeadline: yup.string().required("Task Deadline  can't be empty"),

    // taskDay: yup.date().required("Task Deadline Day  can't be empty"),
    taskInstructions: yup

      .string()
      .required("Task Instructions  can't be empty"),
    taskLink: yup.string(),
  })
  .required();

const Task = () => {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const applicationId = useParams().matcherId;
  const jobId = useParams().id;
  const router = useRouter();

  const [updateToggle, setUpdateToggle] = useState(false);

  const defaultValues = {
    taskName: "",
    taskDescription: "",
    taskDeadline: "",
    // taskDay:"",
    taskInstructions: "",
    taskLink: "",
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
    if (singleApp?.process?.step3?.taskName) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, singleApp.process.step3[key]);
      });
    }
  }, [singleApp, setValue]);

  const handleUpdateInfo = (data) => {
    const obj = {
      process: {
        step3: data,
      },
    };
    event.preventDefault();
    console.log(data);
    console.log(obj);

    dispatch(updateSingleApp({ id: applicationId, updateInfo: obj })).then(
      () => {
        handleUpdateToggle();
      }
    );
  };
  const handleNext = async () => {
    dispatch(
      updateSingleApp({ id: applicationId, updateInfo: { status: "step4" } })
    ).then(() => {
      router.push(
        `/company_dashboard/joblisting/${jobId}/${applicationId}/step4`
      );
    });
  };

  const handleReject = () => {
    dispatch(
      updateSingleApp({
        id: applicationId,
        updateInfo: { status: "rejected" },
      })
    ).then(() => {
      router.push(`/company_dashboard/joblisting/${jobId}`);
    });
  };

  return (
    <div>
      {/*  header and button */}
      <div className="flex justify-between ">
        <h2 className="text-3xl my-6 font-bold text-primary">Task</h2>
      </div>
      {/* task Card */}

      <div className="grid sm:grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
        <div>
          <img
            src="https://www.prosoftly.com/wp-content/uploads/2020/01/task.png"
            alt="background"
          ></img>
        </div>
        <div className="mt-8  w-full relative">
          <div className="bg-white rounded-lg shadow-xl p-10">
            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Name:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskName}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Description:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskDescription}
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Deadline:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskDeadline}
                </span>
              </p>
            </div>
            {/* <div className="mb-4">
              <p>
                <span className="font-semibold">Task Deadline Day:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskDay}
                </span>
              </p>
            </div> */}
            <div className="mb-4">
              <p>
                <span className="font-semibold">Instructions:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskInstrcutions}
                </span>
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Task Link:</span>
                <span className=" font-medium text-gray-600 ">
                  {" "}
                  {singleApp?.process?.step3?.taskLink}
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

      {/* Edit task MOdal  */}
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
            onSubmit={handleSubmit(handleUpdateInfo)}
            className="relative bg-white rounded-lg shadow "
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-primary  ">
                Update Task
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
              <div className="mb-4">
                <Label htmlFor="taskName" className="block font-medium mb-1">
                  Task Name
                </Label>
                <Input
                  type="text"
                  id="taskName"
                  name="taskName"
                  className="form-input w-full"
                  {...register("taskName")}
                />
                <ErrorMessage>{errors.taskName?.message}</ErrorMessage>
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="taskDescription"
                  className="block font-medium mb-1"
                >
                  Task Description
                </Label>
                <textarea
                  id="taskDescription"
                  name="taskDescription"
                  className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block w-full `}
                  style={{ resize: "none" }}
                  {...register("taskDescription")}
                ></textarea>
                <ErrorMessage>{errors.taskDescription?.message}</ErrorMessage>
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="taskDeadline"
                  className="block font-medium mb-1"
                >
                  Task Deadline
                </Label>
                <Input
                  type="time"
                  id="taskDeadline"
                  name="taskDeadline"
                  className="form-input w-full"
                  {...register("taskDeadline")}
                />
                <ErrorMessage>{errors.taskDeadline?.message}</ErrorMessage>
              </div>

              {/* <div className="mb-4">
                <Label
                  htmlFor="taskDay"
                  className="block font-medium mb-1"
                >
                  Task Deadline Day
                </Label>
                <Input
                  type="date"
                  id="taskDay"
                  name="taskDay"
                  className="form-input w-full"
                  {...register("taskDay")}
                />
                <ErrorMessage>{errors.taskDay?.message}</ErrorMessage>
              </div> */}

              <div className="mb-4">
                <Label
                  htmlFor="taskInstructions"
                  className="block font-medium mb-1"
                >
                  Instructions
                </Label>
                <textarea
                  id="taskInstructions"
                  name="taskInstructions"
                  className={`border border-gray-300 text-gray-900 focus:gray-400 text-sm rounded-lg block w-full `}
                  style={{ resize: "none" }}
                  {...register("taskInstructions")}
                ></textarea>
                <ErrorMessage>{errors.taskInstructions?.message}</ErrorMessage>
              </div>
              <div className="mb-4">
                <Label htmlFor="taskLink" className="block font-medium mb-1">
                  Task Link
                </Label>
                <Input
                  type="text"
                  id="taskLink"
                  name="taskLink"
                  className="form-input w-full"
                  {...register("taskLink")}
                />
                <ErrorMessage>{errors.taskLink?.message}</ErrorMessage>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
              <button
                data-modal-hide="update-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Task
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

export default Task;
