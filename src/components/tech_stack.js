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
      
      <div className=" grid md:grid-cols-4 sm:grid-cols-1 text-center gap-y-8 mt-5">
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-5 py-4 rounded-full  text-center ">
            Html
          </span>
        </div>

        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-5 py-4 rounded-full  text-center ">
            CSS 3
          </span>
        </div>

        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-5 py-4 rounded-full  text-center ">
            Js
          </span>
        </div>
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-5 py-4 rounded-full  text-center ">
            Ruby
          </span>
        </div>
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-5 py-4 rounded-full  text-center  ">
            Mix panel
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
