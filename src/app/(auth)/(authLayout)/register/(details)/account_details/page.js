"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LinkIcon } from "@heroicons/react/24/outline";
import ErrorMessage from "@/components/ErrorMessage";
import { setStep3 } from "@/lib/features/register/registerSlice";

const schema = yup
  .object({
    years_of_experience: yup
      .string()
      .min(0, "min years of experience is 0")
      .required("Years of experience is required"),
    university: yup.string().required("University is required"),
    graduation_year: yup.string().required("Graduation year is required"),
    grade: yup.string().required("Grade is required"),
    education_level: yup.string().required("Education level is required"),
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
    defaultValues: {
      years_of_experience: "",
      university: "",
      graduation_year: "",
      education_level: "",
      grade: "",
      typeOfJob: [],
      workPlaceType: [],
      links: [],
    },
    resolver: yupResolver(schema),
  });
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState({ link: "", name: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!step2) router.push("/register/account_details");
  }, []);
  const addWebsite = (e) => {
    if (link.name && link.link) {
      setLinks([...links, link]);
      setLink({
        link: "",
        name: "",
      });
    }
  };
  const removeWebsite = (name) => {
    setLinks(links.filter((item) => item.name !== name));
  };
  const handleNavigate = (data) => {
    let transformedLinks = {};
    const linksArr = links.map((linkObj) => {
      transformedLinks[linkObj.name] = linkObj.link;
      return transformedLinks;
    });

    data.links = linksArr;
    dispatch(setStep3(data));
    router.push("/register/experience_details");
  };
  return (
    <form className="p-8 my-12" onSubmit={handleSubmit(handleNavigate)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="years_of_experience">Years of experience</Label>
          <Input
            type="number"
            name="years_of_experience"
            id="years_of_experience"
            {...register("years_of_experience")}
            className={errors.years_of_experience && errorStyle}
          />
          <ErrorMessage>{errors.years_of_experience?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="university">University</Label>
          <Input
            type="text"
            name="university"
            id="university"
            {...register("university")}
            className={errors.university && errorStyle}
          />
          <ErrorMessage>{errors.university?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 items-end">
            <div className="w-1/6">
              <Label htmlFor="website">Website</Label>
              <Input
                type="text"
                name="website"
                id="website"
                value={link.name}
                onChange={(e) => setLink({ ...link, name: e.target.value })}
              />
            </div>
            <div className="w-4/6">
              <Label htmlFor="link" className="flex items-center mb-2 gap-2">
                Link <LinkIcon className="w-4 h-4 text-primary" />
              </Label>
              <Input
                type="text"
                name="link"
                id="link"
                value={link.link}
                onChange={(e) => setLink({ ...link, link: e.target.value })}
              />
            </div>
            <Button className="w-8 h-8 !p-0" onClick={addWebsite}>
              +
            </Button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {links.map(({ link, name }) => (
              <div
                key={name}
                className="flex justify-between items-center gap-2 text-sm border p-2 text-center border-primary"
              >
                <div className="flex gap-2">
                  <span className="font-bold">{name}</span>
                  <span className="w-60 overflow-x-clip">{link}</span>
                </div>
                <Button
                  className="w-8 h-8 p-0"
                  onClick={() => removeWebsite(name)}
                >
                  -
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label htmlFor="graduation_year">Graduation Year</Label>
            <Input
              type="month"
              name="graduation_year"
              id="graduation_year"
              {...register("graduation_year")}
              className={errors.graduation_year && errorStyle}
            />
            <ErrorMessage>{errors.graduation_year?.message}</ErrorMessage>
          </div>
          <div className="w-1/2">
            <Label htmlFor="grade">Grade</Label>
            <Input
              type="text"
              name="grade"
              id="grade"
              {...register("grade")}
              className={errors.grade && errorStyle}
            />
            <ErrorMessage>{errors.grade?.message}</ErrorMessage>
          </div>
        </div>
        <div>
          <Label htmlFor="education_level">Education level</Label>
          <Input
            type="text"
            name="education_level"
            id="education_level"
            {...register("education_level")}
            className={errors.education_level && errorStyle}
          />
          <ErrorMessage>{errors.education_level?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-4">
          <Label>Type of job</Label>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="full_time"
                className="w-4 h-4"
                value="full-time"
                {...register("typeOfJob")}
              />
              <Label htmlFor="full_time">Full Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="part_time"
                className="w-4 h-4"
                value="part-time"
                {...register("typeOfJob")}
              />
              <Label htmlFor="part_time">Part Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="project"
                className="w-4 h-4"
                value="project"
                {...register("typeOfJob")}
              />
              <Label htmlFor="project">Project</Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Label>Work Place</Label>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="on_site"
                className="w-4 h-4"
                value="on site"
                {...register("workPlaceType")}
              />
              <Label htmlFor="on_site">On Site</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="hybird"
                className="w-4 h-4"
                value="hybird"
                {...register("workPlaceType")}
              />
              <Label htmlFor="hybird">Hybird</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input
                type="checkbox"
                id="remotly"
                className="w-4 h-4"
                value="remote"
                {...register("workPlaceType")}
              />
              <Label htmlFor="remotly">Remotly</Label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={handleNavigate}> Next Step: Experience Info</Button>
      </div>
    </form>
  );
}
