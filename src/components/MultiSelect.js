"use client";

import Select from "./Select";

export default function MultiSelect({ skills, setSkills, children }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 ">
        {skills.map((skill) => (
          <div className="bg-primary-light min-w-16 flex items-center justify-between gap-2 p-2 px-3 rounded-full text-sm mb-1">
            <span className="text-white"> {skill}</span>
            <button
              className="text-white w-4 h-4 flex justify-center items-center bg-slate-200 rounded-full"
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
      >
        {children}
      </Select>
    </div>
  );

