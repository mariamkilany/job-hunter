"use client";
import Button from "@/components/Button";
import CloudinaryButton from "@/components/CloudinaryButton";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { skillsArr } from "../experience_details/page";
import React, { useState } from "react";
import axios from "@/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { reset, setStep4 } from "@/lib/features/register/registerSlice";
import { useRouter } from "next/navigation";

export default function CompanyMoreInfo() {
  const [imageUrl, setImageUrl] = useState(null);
  const [techStack, setTechStsck] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.register.userData);
  const router = useRouter();

  const handleImageUpload = (url) => {
    setImageUrl(url);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setStep4({ image: imageUrl, techStack }));
    await axios.post("/companies", userData).then(() => {
      dispatch(reset());
      router.push("/login");
    });
  };
  return (
    <form className="p-8 my-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-20 sm:grid-cols-2">
        <div>
          <Label>Skills</Label>
          <MultiSelect skills={techStack} setSkills={setTechStsck}>
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
        <div className="flex flex-col-reverse gap-2  justify-center items-center">
          <div className="flex justify-start items-end">
            <CloudinaryButton onImageUpload={handleImageUpload} />
          </div>
          <div>
            {!imageUrl ? (
              <BuildingOffice2Icon className="w-24 h-24 text-primary-500" />
            ) : (
              <img src={imageUrl} className="w-24 h-24 shadow-md rounded-md" />
            )}
          </div>
        </div>
      </div>
      <div className="flex px-5 justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
