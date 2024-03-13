"use client";
import Input from "@/components/Input";
import Label from "@/components/Label";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Register() {
  const user = useSelector((store) => store.auth.user);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-10">
        <div className="mb-6">
          <Label htmlFor="email">Enter your email</Label>
          <Input type="text" id="email" placeholder="name@mail.com" />
        </div>
        <div className="mb-6">
          <Label htmlFor="name"> User / Company Name</Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className=" mb-6 flex gap-2">
          <div className="flex items-center p-3 w-1/2 border rounded border-gray-300">
            <Input
              id="company"
              type="radio"
              value=""
              name="bordered-radio"
              className="text-primary w-4 h-4"
            />

            <Label
              htmlFor="company"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Company
            </Label>
          </div>
          <div className="flex items-center p-3 w-1/2 border rounded border-gray-300">
            <Input
              id="job_seeker"
              type="radio"
              value=""
              name="bordered-radio"
              className="text-primary w-4 h-4"
            />

            <Label
              htmlFor="job_seeker"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Job Seeker
            </Label>
          </div>
        </div>
      </div>
    </>
  );
}
