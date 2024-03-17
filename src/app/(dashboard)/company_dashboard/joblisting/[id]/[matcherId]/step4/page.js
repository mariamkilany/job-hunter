"use client";
import {
  getSingleApp,
  updateSingleApp,
} from "@/lib/features/application/applicationAction";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import Label from "@/components/Label";
import Input from "@/components/Input";

const schema = yup
  .object({
    feedback: yup.string().required("Feedback can't be empty"),
    status: yup.string().required("Status can't be empty"),
  })
  .required();

export default function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const applicationId = useParams().matcherId;
  const jobId = useParams().id;

  const router = useRouter();

  const handleFeedBack = (data) => {
    dispatch(
      updateSingleApp({
        id: applicationId,
        updateInfo: {
          status: data.status,
          process: {
            step4: {
              feedback: data.feedback,
            },
          },
        },
      })
    );
    router.push(`/company_dashboard/joblisting/${jobId}`);
  };

  useEffect(() => {
    dispatch(getSingleApp(applicationId));
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-wrap items-center justify-center   px-4 sm:px-6 lg:px-8">
        <div>
          <img src="https://png.pngtree.com/png-vector/20190929/ourlarge/pngtree-bad-feedback-and-review-concept-for-customer-satisfaction-png-image_1751236.jpg"></img>
        </div>
        <div className="max-w-lg border border-1 border-gray-400 rounded-2xl  py-6 px-12 w-full space-y-8">
          <h2 className="mt-2  text-2xl font-bold text-primary">
            Feedback
            <hr></hr>
          </h2>

          <form
            className=" space-y-5"
            style={{ marginTop: "15px" }}
            onSubmit={handleSubmit(handleFeedBack)}
          >
            <h2 className="  text-lg font-medium  ">Employee Status</h2>

            <div className="flex mt-2">
              <div className="flex items-center">
                <Input
                  id="accept"
                  name="status"
                  type="radio"
                  value="accepted"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  {...register("status")}
                />
                <Label htmlFor="accept" className="ml-2 me-8">
                  Accepted
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  id="reject"
                  name="status"
                  type="radio"
                  value="rejected"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  {...register("status")}
                />
                <Label htmlFor="reject" className="ml-2">
                  Rejected
                </Label>
              </div>
            </div>
            <ErrorMessage>{errors.status?.message}</ErrorMessage>
            <h4 className="mt-2 text-md font-medium ">Feedback Message</h4>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="feedback" className="sr-only ">
                  Feedback
                </Label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={5}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Please enter your feedback"
                  {...register("feedback")}
                />
                <ErrorMessage>{errors.status?.message}</ErrorMessage>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
