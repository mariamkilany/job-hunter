import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import React from "react";

const Page = () => {
  return (
    <div>
      <header className="p-10 pt-40 bg-primary">
        <h1 className="text-6xl text-gray-100 font-semibold   text-center">
          Contact with Us...
        </h1>
      </header>
      <div className="p-10 ">
        <div className="md:w-1/2 p-6 m-auto flex flex-col gap-4 shadow-md rounded-md ">
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Your email here.." />
          </div>
          <div>
            <Label>Subject</Label>
            <Input type="text" placeholder="Email subject.." />
          </div>
          <div>
            <Label>Message</Label>
            <textarea className="border border-gray-300 rounded-md w-full h-60"></textarea>
          </div>
          <div className="flex justify-center items-center">
            <Button className="px-10">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
