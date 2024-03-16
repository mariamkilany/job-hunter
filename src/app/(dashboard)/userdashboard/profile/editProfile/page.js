"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@/components/ErrorMessage";
import * as yup from "yup";
import { LinkIcon } from "@heroicons/react/24/outline";
import { setUser } from "@/lib/features/auth/authSlice";
import axios from "../../../../../axiosConfig";
import Loading from "@/components/Loading";

const Edit = () => {
  // States
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  // Link Status
  const { _id, ...Userlinks } = user.links;
  const linksNames = ["github", "linkedIn", "portfolio", "website"];
  const [links, setLinks] = useState(Userlinks);
  const [link, setLink] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  // Extract skill names using map
  const skillNames = user.skills.map((skill) => skill.skillName);
  // skills status
  const [skills, setSkills] = useState(skillNames);
  const skillsArr = [
    {
      skillName: "HTML",
    },
    {
      skillName: "CSS",
    },
    {
      skillName: "JS",
    },
    {
      skillName: "C++",
    },
    {
      skillName: "C",
    },
    {
      skillName: "React",
    },
    {
      skillName: "Angular",
    },
    {
      skillName: "MUI",
    },
    {
      skillName: "Nodejs",
    },
    {
      skillName: "Php",
    },
    {
      skillName: "Python",
    },
    {
      skillName: "Java",
    },
    {
      skillName: "C#",
    },
    {
      skillName: "XML",
    },
    {
      skillName: "Bootstrap",
    },
    {
      skillName: "angular material",
    },
    {
      skillName: "tailwind",
    },
    {
      skillName: "Nextjs",
    },
    {
      skillName: "Nestjs",
    },
    {
      skillName: "SQL",
    },
    {
      skillName: "NOSQL",
    },
    {
      skillName: "MongoDB",
    },
    {
      skillName: "Oracle",
    },
    {
      skillName: "DataBase",
    },
    {
      skillName: "JQuery",
    },
    {
      skillName: "Vuejs",
    },
    {
      skillName: "firebase",
    },
    {
      skillName: "Socket.io",
    },
    {
      skillName: "Typescript",
    },
    {
      skillName: "Sass",
    },
    {
      skillName: "Scss",
    },
  ];

  const [submit, setSubmit] = useState(false);

  // Functions
  const addWebsite = (e) => {
    e.preventDefault();
    if (linkUrl && link) {
      setLinks({ ...links, [link]: linkUrl });
      setLinkUrl("");
      setLink("");
    }
  };

  const removeWebsite = (link) => {
    const newLinks = { ...links };
    delete newLinks[link];
    setLinks(newLinks);
  };

  const getFormattedDate = function (dateString) {
    // 1. Create a Date object from the string
    const dateObj = new Date(dateString);

    // 2. Handle potential parsing errors:
    if (isNaN(dateObj.getTime())) {
      console.error(`Invalid date string: ${dateString}`);
      return null; // Or return a default value (e.g., 'Invalid Date')
    }

    // 3. Format the date in the desired format (YYYY-MM-DD):
    const year = dateObj.getFullYear().toString().padStart(4, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = dateObj.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  // Form Schema
  const schema = yup
    .object({
      userName: yup.string().required("Name can't be empty"),
      yearsOfExperience: yup
        .string()
        .min(0, "min years of experience is 0")
        .required("Years of experience is required"),
      graduationYear: yup.string().required("Graduation year is required"),
      grade: yup.string().required("Grade is required"),
      educationLevel: yup.string().required("Education level is required"),
      minimumSalary: yup.number().required(" Minimum salary is required"),
      jobTitle: yup.string().required(" jobTitle is required"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^(\+?20)?\d{11}$/,
          "Phone number must be 10 digits and may include country code"
        ),
      location: yup.object({
        city: yup.string().required("City is required"),
        country: yup.string().required("Country is required"),
      }),
      birthDate: yup.string().required("Birth date is required"),
      gender: yup.string().required("Please select a gender"),
    })
    .required();

  // Form State
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: user.userName,
      yearsOfExperience: user.yearsOfExperience,
      graduationYear: user.graduationYear,
      educationLevel: user.educationLevel,
      grade: user.grade,
      typeOfJob: user.typeOfJob,
      workPlaceType: user.workPlaceType,
      links: Userlinks || {},
      minimumSalary: user.minimumSalary,
      skills: skills,
      jobTitle: user.jobTitle,
      phone: user.phone,
      birthDate: getFormattedDate(user.birthDate),
      gender: user.gender,
      location: {
        city: user.location.city,
        country: user.location.country,
      },
    },
    resolver: yupResolver(schema),
  });

  const hanndleEditProfile = async (data) => {
    setSubmit(true);
    data.skills = skills.map((skill) => {
      return {
        skillName: skill,
        // skillLevel: "beginner",
      };
    });
    // data.skills = skills;
    data.links = links;
    // console.log(data);
    console.log({ ...user, ...data });
    await axios
      .patch(`/employees/${user._id}`, data)
      .then((res) => {
        console.log(res);
        dispatch(setUser(data));
      })
      .finally(() => {
        console.log(user);
        router.push("/userdashboard/profile");
      });
  };

  useEffect(() => {
    console.log(user);
  }, []);

  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";

  return (
    <div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          submit ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <Loading />
      </div>
      {/* <Loading
        data-modal-backdrop="static"
        className={`${
          submit ? " " : "hidden"
        } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      /> */}
      {/* edit */}
      <form className="mt-10" onSubmit={handleSubmit(hanndleEditProfile)}>
        <div className="mb-6">
          <Label htmlFor="name"> User Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter Your User Name"
            className={errors.userName && errorStyle}
            {...register("userName")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="yearsOfExperience">Years of experience</Label>
            <Input
              type="number"
              name="yearsOfExperience"
              id="yearsOfExperience"
              {...register("yearsOfExperience")}
              className={errors.yearsOfExperience && errorStyle}
            />
            <ErrorMessage>{errors.yearsOfExperience?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1 items-end">
              <div className="w-2/6">
                <Label htmlFor="website">Website</Label>
                <Select
                  type="text"
                  name="website"
                  id="website"
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                >
                  <option value="" disabled>
                    Choose a Site
                  </option>
                  {linksNames
                    .filter((name) => !Object.keys(links).includes(name))
                    .map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                </Select>
              </div>
              <div className="w-4/6">
                <Label htmlFor="link" className="flex items-center mb-2 gap-2">
                  Link <LinkIcon className="w-4 h-4 text-primary" />
                </Label>
                <Input
                  type="text"
                  name="link"
                  id="link"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
              </div>
              <Button className="w-8 h-8 !p-0" onClick={addWebsite}>
                +
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {Object.keys(links).map((link) => (
                <div
                  key={link}
                  className="flex justify-between items-center gap-2 text-sm border p-2 text-center border-primary"
                >
                  <div className="flex gap-2">
                    <span className="font-bold">{link}</span>
                    <span
                      style={{
                        // maxWidth: "100px",
                        overflow: "hidden",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                      }}
                      className="overflow-x-clip"
                    >
                      {links[link].replace(/^https:\/\//, "")}
                    </span>
                  </div>
                  <Button
                    className="w-8 h-8 !p-0"
                    onClick={() => removeWebsite(link)}
                  >
                    -
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Input
                type="number"
                name="graduationYear"
                id="graduationYear"
                {...register("graduationYear")}
                className={errors.graduationYear && errorStyle}
              />
              <ErrorMessage>{errors.graduationYear?.message}</ErrorMessage>
            </div>
            <div className="w-1/2">
              <Label htmlFor="grade">Grade</Label>
              <Select id="grade" {...register("grade")}>
                <option disabled>Choose a Grade</option>
                <option value="excellent">Excellent</option>
                <option value="very good">Very Good</option>
                <option value="good">Good</option>
                <option value="pass">Pass</option>
              </Select>
              <ErrorMessage>{errors.grade?.message}</ErrorMessage>
            </div>
          </div>
          <div>
            <Label htmlFor="educationLevel">Education level</Label>
            <Select id="educationLevel" {...register("educationLevel")}>
              <option disabled>Choose an Education Level</option>
              <option value="high school">High School</option>
              <option value="bachelor">bachelor</option>
              <option value="master">Master</option>
              <option value="phd">PHD</option>
            </Select>
            <ErrorMessage>{errors.educationLevel?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col gap-4">
            <Label>Type of job</Label>
            <div className="flex">
              <div className="w-1/3 flex gap-4">
                <Input
                  type="radio"
                  id="full_time"
                  className="w-4 h-4"
                  value="full-Time"
                  {...register("typeOfJob")}
                />
                <Label htmlFor="full_time">Full Time</Label>
              </div>
              <div className="w-1/3 flex gap-4">
                <Input
                  type="radio"
                  id="part_time"
                  className="w-4 h-4"
                  value="part-Time"
                  {...register("typeOfJob")}
                />
                <Label htmlFor="part_time">Part Time</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Label>Work Place</Label>
            <div className="flex">
              <div className="w-1/3 flex gap-4">
                <Input
                  type="radio"
                  id="on_site"
                  className="w-4 h-4"
                  value="on-site"
                  {...register("workPlaceType")}
                />
                <Label htmlFor="on_site">On Site</Label>
              </div>
              <div className="w-1/3 flex gap-4">
                <Input
                  type="radio"
                  id="hybrid"
                  className="w-4 h-4"
                  value="hybrid"
                  {...register("workPlaceType")}
                />
                <Label htmlFor="hybrid">Hybrid</Label>
              </div>
              <div className="w-1/3 flex gap-4">
                <Input
                  type="radio"
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
        <div>
          <Label>Minimun salary</Label>
          <Input
            type="number"
            placeholder="Minimum Salary"
            {...register("minimumSalary")}
            className={errors.minimumSalary && errorStyle}
          />
          <ErrorMessage>{errors.minimumSalary?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Skills</Label>
          <MultiSelect skills={skills} setSkills={setSkills}>
            <option disabled value={""}>
              Choose a Skill
            </option>
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
          <Label>Job Title</Label>
          <Select {...register("jobTitle")}>
            <option disabled value="">
              Choose a Job Title
            </option>
            <option value="front-end">Front End</option>
            <option value="back-end">Back End</option>
            <option value="ui/ux">UI/UX</option>
          </Select>
          <ErrorMessage>{errors.jobTitle?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="mobile"
            name="phone"
            id="phone"
            className={errors.phone && errorStyle}
            {...register("phone")}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <Label htmlFor="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              className={errors.location && errorStyle}
              {...register("location.country")}
            />
            <ErrorMessage>{errors.location?.country.message}</ErrorMessage>
          </div>
          <div className="w-1/2">
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              className={errors.location && errorStyle}
              {...register("location.city")}
            />
            <ErrorMessage>{errors.location?.city.message}</ErrorMessage>
          </div>
        </div>
        <div>
          <Label htmlFor="birthDate">Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            id="birthDate"
            className={errors.birthDate && errorStyle}
            {...register("birthDate")}
          />
          <ErrorMessage>{errors.birthDate?.message}</ErrorMessage>
        </div>
        <div className="flex">
          <div className="w-1/2 flex gap-3">
            <Input
              id="male"
              type="radio"
              value="male"
              name="gender"
              className="w-4 h-4 text-primary"
              {...register("gender")}
            />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="w-1/2 flex gap-3">
            <Input
              id="female"
              type="radio"
              value="female"
              name="gender"
              className="w-4 h-4 text-primary"
              {...register("gender")}
            />
            <Label htmlFor="female">Female</Label>
          </div>
          <ErrorMessage>{errors.gender?.message}</ErrorMessage>
        </div>
        {/* Add Inputs Here */}
        <div className="flex justify-end px-10">
          <Button className="px-20">Update Profile</Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
