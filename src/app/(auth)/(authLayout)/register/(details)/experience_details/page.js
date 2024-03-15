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
import { setStep3 } from "@/lib/features/register/registerSlice";
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
    minmuin_salary: yup.number().required(" Minimum salary is required"),
    category: yup.string().required(" Category is required"),
  })
  .required();
export default function ExperienceDetails() {
  const router = useRouter();
  const [skills, setSkills] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const handleImageUpload = (url) => {
    setImageUrl(url);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minmuin_salary: 0,
      skills: [],
      category: "",
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
    data.skills = skills;
    data.imageUrl = imageUrl;
    dispatch(setStep3(data));
    await axios.post("/employees", userData);
  };
  return (
    <form className="p-8 my-5" onSubmit={handleSubmit(handleNavigate)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label>Minimun salary</Label>
          <Input
            type="number"
            placeholder="Salary"
            {...register("minmuin_salary")}
            className={errors.minmuin_salary && errorStyle}
          />
          <ErrorMessage>{errors.minmuin_salary?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Skills</Label>
          <MultiSelect skills={skills} setSkills={setSkills}>
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
          <Select {...register("category")}>
            <option selected>Choose a category</option>
            <option value="front-end">Front End</option>
            <option value="back-end">Back End</option>
            <option value="full-stack">Full Stack</option>
          </Select>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
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
    </form>
  );
}
