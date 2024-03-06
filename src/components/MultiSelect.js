"use client";

import { useState } from "react";
import Select from "./Select";

export default function MultiSelect(props) {
  const [skills, setSkills] = useState([]);
  return (
    <div>
      <div className="flex flex-wrap gap-2 ">
        {skills.map((skill) => (
          <div className="bg-primary-500 w-fit flex gap-2 p-2 rounded-md mb-1">
            <span className="text-white"> {skill}</span>
            <button
              className="text-white w-5 h-5 flex justify-center items-center bg-slate-200 rounded"
              onClick={() => {
                setSkills(skills.filter((e) => e !== skill));
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <Select
        onChange={(e) => {
          if (!skills.includes(e.target.value))
            setSkills([...skills, e.target.value]);
        }}
        {...props}
      >
        {props.children}
      </Select>
    </div>
  );
}
