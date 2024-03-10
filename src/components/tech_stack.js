import React from "react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/solid";
const TechStack = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold">Tech Stack</h3>
        <div className="flex gap-2">
          <PencilSquareIcon className="w-5 " color="#4640DE" />
          <PlusIcon className="w-5 " color="#4640DE" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-4">
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          Html
        </span>{" "}
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          css
        </span>{" "}
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          JS
        </span>{" "}
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          MUI
        </span>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          MUI
        </span>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          MUI
        </span>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 p-2 px-4 rounded-full">
          MUI
        </span>
      </div>
    </div>
  );
};

export default TechStack;
