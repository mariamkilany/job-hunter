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
  const Userlinks = Object.fromEntries(
    Object.entries(user.links).filter(([key, value]) => value)
  );
  const linksNames = ["linkedIn", "facebook", "instagram"];
  const [links, setLinks] = useState(Userlinks);
  const [link, setLink] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  // skills status
  const [skills, setSkills] = useState(user.techStack);
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
    console.log("links: ", links);
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
      name: yup.string().required("Company name can't be empty"),
      email: yup.string().required("Company Email is required"),
      employeesNumber: yup
        .string()
        .min(0, "min Employees Number is 0")
        .required("Employees Number is required"),
      // links: yup
      //   .object({
      //     linkedIn: yup.string().required("City is required"),
      //     facebook: yup.string().required("facebook is required"),
      //     instagram: yup.string().required("Country is required"),
      //   })
      //   .required("Links can't be empty"),
      techStack: yup.array().required("Company Tech Stack can't be empty"),
      address: yup.string().required("Company Address is required"),
      industry: yup.string().required("Company Industry is required"),
      description: yup.string().required("Company Description is required"),
      workplace: yup.string().required("Company Workplace is required"),
      foundedIn: yup.string().required("Company Founding Year is required"),
      industry: yup.string().required("Company Industry is required"),
      contactInfo: yup.object({
        phoneNumber: yup
          .string()
          .required("Phone Number is required")
          .matches(
            /^(\+?20)?\d{11}$/,
            "Phone number must be 11 digits and may include country code"
          ),
        website: yup.string().required("Company Website is required"),
      }),
    })
    .required();

  // Form State
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      employeesNumber: user.employeesNumber,
      links: Userlinks || {},
      techStack: skills,
      address: user.address,
      industry: user.industry,
      description: user.description,
      workplace: user.workplace,
      industry: user.industry,
      foundedIn: getFormattedDate(user.foundedIn),
      contactInfo: {
        phoneNumber: user.contactInfo.phoneNumber,
        website: user.contactInfo.website,
      },
    },
    resolver: yupResolver(schema),
  });

  const hanndleEditProfile = async (data) => {
    setSubmit(true);
    data.techStack = skills;
    const deletedLinks = {
      linkedIn: "",
      facebook: "",
      instagram: "",
    };
    data.links = { ...deletedLinks, ...links };
    // console.log("Company: ", { ...user, ...data });
    // console.log("Form Data: ", data);
    await axios
      .patch(`/companies/${user._id}`, data)
      .then((res) => {
        console.log(res);
        dispatch(setUser(data));
      })
      .finally(() => {
        console.log(user);
        router.push("/company_dashboard/company_profile");
      });
  };

  useEffect(() => {
    // console.log(user);
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
      <form className="mt-10" onSubmit={handleSubmit(hanndleEditProfile)}>
        {/* Row 1 */}
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          {/* Name */}
          <div className="mb-6">
            <Label htmlFor="name">Company Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter Your User Name"
              className={errors.name && errorStyle}
              {...register("name")}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          {/* Email */}
          <div className="mb-6">
            <Label htmlFor="email">Company Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="Enter Your Company Email"
              className={errors.email && errorStyle}
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid gap-4 mb-4 xl:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-2">
            <h4>Contact Info</h4>
            {/* Phone Number */}
            <div className="w-12/12">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className={errors.contactInfo && errorStyle}
                {...register("contactInfo.phoneNumber")}
              />
              <ErrorMessage>
                {errors.contactInfo?.phoneNumber?.message}
              </ErrorMessage>
            </div>
            {/* Website */}
            <div className="w-12/12">
              <Label htmlFor="website">website</Label>
              <Input
                type="text"
                name="website"
                id="website"
                className={errors.contactInfo && errorStyle}
                {...register("contactInfo.website")}
              />
              <ErrorMessage>
                {errors.contactInfo?.website?.message}
              </ErrorMessage>
            </div>
            {/* Address */}
            <div>
              <Label htmlFor="address">Company Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="Enter Company address"
                className={errors.address && errorStyle}
                {...register("address")}
              />
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex gap-1 items-end">
              <div className="w-4/12">
                <Label htmlFor="websiteSelect">Website</Label>
                <Select
                  type="text"
                  name="websiteSelect"
                  id="websiteSelect"
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
              <div className="w-7/12">
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
              <Button className="w-9 h-8 !p-0" onClick={addWebsite}>
                +
              </Button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {Object.keys(links).map((link) => {
                if (links[link] !== "") {
                  return (
                    <div
                      key={link}
                      className="w-12/12 flex justify-between items-center gap-2 text-sm border p-2 text-center border-primary"
                    >
                      <div className="flex gap-2">
                        <span className="font-bold">{link}</span>
                        <span
                          style={{
                            textAlign: "start",
                            // minWidth: "350px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                          // className="overflow-x-clip"
                        >
                          {links[link].replace(/^http(s?):\/\/(www.)?/, "")}
                        </span>
                      </div>
                      <Button
                        className="w-8 h-8 !p-0"
                        onClick={() => removeWebsite(link)}
                      >
                        -
                      </Button>
                    </div>
                  );
                }
              })}
            </div>
            <ErrorMessage>{errors.links?.message}</ErrorMessage>
          </div>
        </div>
        {/* Row 3 */}
        <div className="mb-10">
          <Label>Tech Stack</Label>
          <MultiSelect skills={skills} setSkills={setSkills} className="my-5">
            <option disabled value={""}>
              Choose a Tech Stack
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
        {/* Row 4 */}
        <div className="grid gap-4 mb-4 lg:grid-cols-3">
          <div>
            <Label htmlFor="description">Company Description</Label>
            <Input
              type="text"
              id="description"
              placeholder="Enter Company description"
              className={errors.description && errorStyle}
              {...register("description")}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor="industry">Company Industry</Label>
            <Input
              type="text"
              id="industry"
              placeholder="Enter Company industry"
              className={errors.industry && errorStyle}
              {...register("industry")}
            />
            <ErrorMessage>{errors.industry?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor="foundedIn">Founded Date</Label>
            <Input
              type="date"
              name="foundedIn"
              id="foundedIn"
              className={errors.foundedIn && errorStyle}
              {...register("foundedIn")}
            />
            <ErrorMessage>{errors.foundedIn?.message}</ErrorMessage>
          </div>
        </div>
        {/* Row 5 */}
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <Label htmlFor="workplace">Company Workplace</Label>
            <Input
              type="text"
              id="workplace"
              placeholder="Enter Company workplace"
              className={errors.workplace && errorStyle}
              {...register("workplace")}
            />
            <ErrorMessage>{errors.workplace?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor="employeesNumber">Employees Number</Label>
            <Input
              type="number"
              name="employeesNumber"
              id="employeesNumber"
              {...register("employeesNumber")}
              className={errors.employeesNumber && errorStyle}
            />
            <ErrorMessage>{errors.employeesNumber?.message}</ErrorMessage>
          </div>
        </div>
        {/* Add Inputs Here */}
        {/* Submit Button */}
        <div className="flex justify-end px-10">
          <Button className="px-20">Update Profile</Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
