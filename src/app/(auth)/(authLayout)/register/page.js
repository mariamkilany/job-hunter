import Input from "@/components/Input";
import Label from "@/components/Label";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-10">
        <div className="mb-6">
          <Label for="email">Enter your email</Label>
          <Input type="text" id="email" placeholder="name@mail.com" />
        </div>
        <div className="mb-6">
          <Label for="name"> User / Company Name</Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
        <div className="mb-6">
          <Label for="password">Password</Label>
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
              for="company"
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
              for="job_seeker"
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
