"use client";

import Select from "./Select";

export default function MultiSelect({ skills, setSkills, children }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 ">
        {skills?.map((skill, index) => (
          <div
            className="flex items-center justify-between gap-2 p-2 px-3 mb-1 text-sm rounded-full bg-primary-light min-w-16"
            key={index}
          >
            <span className="text-white"> {skill}</span>
            <button
              className="flex items-center justify-center w-4 h-4 text-white rounded-full bg-slate-200"
              onClick={(e) => {
                e.preventDefault();
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
}
