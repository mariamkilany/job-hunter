"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    years_of_experience: yup
      .number()
      .min(0, "min years of experience is 0")
      .required("Years of experience is required"),
    university: yup.string().required("University is required"),
    github: yup.string().required("Github is required"),
    linkedin: yup.string().required("LinkedIn is required"),
  })
  .required();

export default function AccountInfo() {
  const router = useRouter();
  const { userData, step2 } = useSelector((store) => store.register);
  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (!step2) router.push("/register/personal_details");
  }, []);
  const handleNavigate = (e) => {};
  return (
    <form className="p-8 my-12">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="years_of_experience">Years of experience</Label>
          <Input
            type="number"
            name="years_of_experience"
            id="years_of_experience"
            required=""
          />
        </div>
        <div>
          <Label htmlFor="university">University</Label>
          <Input type="text" name="university" id="university" required="" />
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label htmlFor="github">Github</Label>
            <Input type="text" name="github" id="github" required="" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="github">LinkedIn</Label>
            <Input type="text" name="github" id="github" required="" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label htmlFor="graduation_pro">Graduation Year</Label>
            <Input
              type="text"
              name="graduation_pro"
              id="graduation_pro"
              required=""
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="grade">Grade</Label>
            <Input type="text" name="grade" id="grade" required="" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md">Type of job</p>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="full_time" className="w-4 h-4" />
              <Label htmlFor="full_time">Full Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="part_time" className="w-4 h-4" />
              <Label htmlFor="part_time">Part Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="part_time" className="w-4 h-4" />
              <Label htmlFor="part_time">Project</Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md">Work Place</p>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="on_site" className="w-4 h-4" />
              <Label htmlFor="on_site">On Site</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="hybird" className="w-4 h-4" />
              <Label htmlFor="hybird">Hybird</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="remotly" className="w-4 h-4" />
              <Label htmlFor="remotly">Remotly</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        {" "}
        <Button onClick={handleNavigate}> Next Step: Experience Info</Button>
      </div>
    </form>
  );
}
