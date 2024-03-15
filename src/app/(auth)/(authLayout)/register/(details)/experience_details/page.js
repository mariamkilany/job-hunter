"use client";
import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import CloudinaryButton from "@/components/CloudinaryButton";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { reset, setStep4 } from "@/lib/features/register/registerSlice";
import axios from "@/axiosConfig";

const skillsArr = [
  {
    skillName: "HTML",
    skillLevel: "beginner",
  },
  {
    skillName: "CSS",
    skillLevel: "beginner",
  },
  {
    skillName: "JS",
    skillLevel: "beginner",
  },
  {
    skillName: "C++",
    skillLevel: "beginner",
  },
  {
    skillName: "C",
    skillLevel: "beginner",
  },
  {
    skillName: "React",
    skillLevel: "beginner",
  },
  {
    skillName: "Angular",
    skillLevel: "beginner",
  },
  {
    skillName: "MUI",
    skillLevel: "beginner",
  },
  {
    skillName: "Nodejs",
    skillLevel: "beginner",
  },
  {
    skillName: "Php",
    skillLevel: "beginner",
  },
  {
    skillName: "Python",
    skillLevel: "beginner",
  },
  {
    skillName: "Java",
    skillLevel: "beginner",
  },
  {
    skillName: "C#",
    skillLevel: "beginner",
  },
  {
    skillName: "XML",
    skillLevel: "beginner",
  },
  {
    skillName: "Bootstrap",
    skillLevel: "beginner",
  },
  {
    skillName: "angular material",
    skillLevel: "beginner",
  },
  {
    skillName: "tailwind",
    skillLevel: "beginner",
  },
  {
    skillName: "Nextjs",
    skillLevel: "beginner",
  },
  {
    skillName: "Nestjs",
    skillLevel: "beginner",
  },
  {
    skillName: "SQL",
    skillLevel: "beginner",
  },
  {
    skillName: "NOSQL",
    skillLevel: "beginner",
  },
  {
    skillName: "MongoDB",
    skillLevel: "beginner",
  },
  {
    skillName: "Oracle",
    skillLevel: "beginner",
  },
  {
    skillName: "DataBase",
    skillLevel: "beginner",
  },
  {
    skillName: "JQuery",
    skillLevel: "beginner",
  },
  {
    skillName: "Vuejs",
    skillLevel: "beginner",
  },
  {
    skillName: "firebase",
    skillLevel: "beginner",
  },
  {
    skillName: "Socket.io",
    skillLevel: "beginner",
  },
  {
    skillName: "Typescript",
    skillLevel: "beginner",
  },
  {
    skillName: "Sass",
    skillLevel: "beginner",
  },
  {
    skillName: "Scss",
    skillLevel: "beginner",
  },
];

const schema = yup
  .object({
    minimumSalary: yup.number().required(" Minimum salary is required"),
    jobTitle: yup.string().required(" Category is required"),
  })
  .required();
export default function ExperienceDetails() {
  const router = useRouter();
  const [skills, setSkills] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [hideToast, setHideToast] = useState(true);
  const handleImageUpload = (url) => {
    setImageUrl(url);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minimumSalary: 0,
      skills: [],
      jobTitle: "",
    },
    resolver: yupResolver(schema),
  });
  const { userData, step3 } = useSelector((store) => store.register);
  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  const dispatch = useDispatch();
  useEffect(() => {
    if (!step3) router.push("/register/account_details");
  }, []);

  const handleNavigate = async (data) => {
    data.skills = skills.map((skill) => {
      return {
        skillName: skill,
        skillLevel: "beginner",
      };
    });
    dispatch(setStep4(data));
    await axios.post("/employees", userData).then(() => {
      dispatch(reset());
      router.push("/login");
    });
  };
  return (
    <form className="p-8 my-5" onSubmit={handleSubmit(handleNavigate)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label>Minimun salary</Label>
          <Input
            type="number"
            placeholder="Salary"
            {...register("minimumSalary")}
            className={errors.minimumSalary && errorStyle}
          />
          <ErrorMessage>{errors.minimumSalary?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Skills</Label>
          <MultiSelect skills={user.skills} setSkills={setSkills}>
            <option disabled>Choose a Skill</option>
            {skillsArr.map((skill) => {
              return (
                <option key={skill.skillName} value={skill.skillName}>
                  {skill.skillName}
                </option>
              );
            })}
          </MultiSelect>
        </div>
        <div>
          <Label>Categories</Label>
          <Select {...register("jobTitle")}>
            <option selected>Choose a jobTitle</option>
            <option value="front-end">Front End</option>
            <option value="back-end">Back End</option>
            <option value="full-stack">Full Stack</option>
          </Select>
          <ErrorMessage>{errors.jobTitle?.message}</ErrorMessage>
        </div>
        <div className="flex justify-start items-end">
          <CloudinaryButton onImageUpload={handleImageUpload} />
        </div>
        <div>
          {!imageUrl ? (
            <UserCircleIcon className="w-24 h-24 text-primary-500" />
          ) : (
            <img src={imageUrl} className="w-24 h-24 shadow-md rounded-full" />
          )}
        </div>
      </div>

      <div className="flex px-5 justify-end">
        <Button type="submit">Submit</Button>
      </div>
      {!hideToast && (
        <div
          id="toast-success"
          className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow`}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Registered finished successfully.
          </div>
          <button
            type="button"
            onClick={() => setHideToast(true)}
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </form>
  );
}
