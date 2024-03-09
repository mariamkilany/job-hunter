import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "./Button";

export default function Review() {
  return (
    <div className="flex flex-col gap-3 border-b-2 p-3 pb-4">
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-3">
          <img
            src="/Images/avatar.png"
            alt="Avatar"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h6 className=" font-medium text-lg ">Célestin Gardinier</h6>
            <span className=" text-slate-500 text-sm">CEO & Co-Founder</span>
          </div>
        </div>
        <Button className="w-fit h-fit p-1 bg-primary-500">
          <PencilSquareIcon className="w-4 h-4 text-white" />
        </Button>
      </div>
      <textarea
        type="text"
        disabled
        className=" p-1 focus:!outline-slate-100 text-slate-500 bg-transparent resize-none"
        value="You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.You know how you perform your best. Work from home, coffee shop or anywhere when you f"
      ></textarea>
    </div>
  );
}
