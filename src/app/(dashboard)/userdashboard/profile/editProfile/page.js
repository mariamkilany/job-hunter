"use client";
import React, { useState } from "react";
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

const Edit = () => {
  // States
  const user = useSelector((state) => state.auth.user);
  const { _id, ...Userlinks } = user.links;
  const [links, setLinks] = useState([]);
  // const [link, setLink] = useState({ link: "", name: "" });
  const [skills, setSkills] = useState(user.skills);
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

  // Functions
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

  // Function to add a new link type (optional)
  const addLinkType = (type) => {
    setValue("links", { ...formState.values.links, [type]: "" }); // Add new type with empty URL
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
      links: yup.object({
        linkedIn: yup.string().url("Invalid LinkedIn URL").optional(),
        github: yup.string().url("Invalid GitHub URL").optional(),
        portfolio: yup.string().url("Invalid Portfolio URL").optional(),
        // website: yup.string().url("Invalid website URL").optional(),
        // Add other optional link properties if needed
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

  const hanndleEditProfile = (data) => {
    // console.log(data);
    data.skills = skills;
    console.log({ ...user, ...data });
  };

  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";

  return (
    <div>
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
            <div className="flex gap-5 items-end">
              {Object.keys(Userlinks || {}).length > 0 && ( // Check for any link properties
                <div>
                  <h2>Links</h2>
                  {Object.entries(Userlinks || {}).map(
                    (
                      [type, url],
                      index // Iterate over link properties
                    ) => (
                      <div key={index}>
                        <label htmlFor={`links[${type}]`}>{type}:</label>
                        <input
                          type="url"
                          {...register(`links[${type}]`, { required: false })} // Make URL optional
                          id={`links[${type}]`}
                          defaultValue={url} // Set default value from user data
                        />
                        <button
                          type="button"
                          onClick={() => setValue(`links.${type}`, "")}
                        >
                          Remove
                        </button>
                        <ErrorMessage>
                          {errors.links?.[type]?.message}
                        </ErrorMessage>
                      </div>
                    )
                  )}
                  {/* Optional button to add new link types */}
                  <button type="button" onClick={() => addLinkType("website")}>
                    Add Website Link
                  </button>
                </div>
              )}
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
                  selected
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
          <Button className="px-20">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
