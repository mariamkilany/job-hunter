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
import Select from "@/components/Select";

const schema = yup
  .object({
    yearsOfExperience: yup
      .string()
      .min(0, "min years of experience is 0")
      .required("Years of experience is required"),
    // university: yup.string().required("University is required"),
    graduationYear: yup.string().required("Graduation year is required"),
    grade: yup.string().required("Grade is required"),
    educationLevel: yup.string().required("Education level is required"),
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
      yearsOfExperience: "",
      graduationYear: "",
      educationLevel: "",
      grade: "",
      typeOfJob: "",
      // university:"",
      workPlaceType: "",
      links: [],
    },
    resolver: yupResolver(schema),
  });
  const linksNames = ["github", "linkedIn", "portfolio", "website"];
  const [links, setLinks] = useState({});
  const [link, setLink] = useState("github");
  const [linkUrl, setLinkUrl] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!step2) router.push("/register/personal_details");
  }, []);
  const addWebsite = (e) => {
    e.preventDefault();
    if (linkUrl && link) {
      setLinks({ ...links, [link]: linkUrl });
      setLinkUrl("");
      setLink("");
    }
  };
  const handleNavigate = (data) => {
    data.links = links;
    data.yearsOfExperience = +data.yearsOfExperience;
    data.graduationYear = +data.graduationYear;
    dispatch(setStep3(data));
    router.push("/register/experience_details");
  };

  const removeWebsite = (link) => {
    const newLinks = { ...links };
    delete newLinks[link];
    setLinks(newLinks);
  };

  return (
    <form className="p-8 my-12" onSubmit={handleSubmit(handleNavigate)}>
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
        {
          // <div>
          //   <Label htmlFor="university">University</Label>
          //   <Input
          //     type="text"
          //     name="university"
          //     id="university"
          //     {...register("university")}
          //     className={errors.university && errorStyle}
          //   />
          //   <ErrorMessage>{errors.university?.message}</ErrorMessage>
          // </div>
        }
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
                {linksNames.map(
                  (name) =>
                    !Object.keys(links).includes(name) && (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    )
                )}
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
                      maxWidth: "100px",
                      overflow: "hidden",
                      textOverflow: "clip",
                      whiteSpace: "nowrap",
                    }}
                    className="overflow-x-clip"
                  >
                    {links[link]}
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

            <Select
              name="graduationYear"
              id="graduationYear"
              {...register("graduationYear")}
            >
              <option value="" disabled>
                {" "}
                Select{" "}
              </option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
            </Select>
            <ErrorMessage>{errors.graduationYear?.message}</ErrorMessage>
          </div>
          <div className="w-1/2">
            <Label htmlFor="grade">Grade</Label>
            <Select name="grade" id="grade" {...register("grade")}>
              <option value="" disabled>
                Select your grade
              </option>
              <option value="excellent">Excellent</option>
              <option value="very good">Very Good</option>
              <option value="good">Good</option>
              <option value="pass">pass</option>
            </Select>
            <ErrorMessage>{errors.grade?.message}</ErrorMessage>
          </div>
        </div>
        <div>
          <Label htmlFor="educationLevel">Education level</Label>
          <Select
            name="educationLevel"
            id="educationLevel"
            {...register("educationLevel")}
          >
            <option value="high school">high school</option>
            <option value="bachelor">bachelor</option>
            <option value="master">master</option>
            <option value="phd">phd</option>
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
                name="typeOfJob"
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
                name="typeOfJob"
                className="w-4 h-4"
                value="part-Time"
                {...register("typeOfJob")}
              />
              <Label htmlFor="part_time">Part Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input
                type="radio"
                id="remote"
                name="typeOfJob"
                className="w-4 h-4"
                value="remote"
                {...register("typeOfJob")}
              />
              <Label htmlFor="remote">Remote</Label>
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
                value="hybird"
                {...register("workPlaceType")}
              />
              <Label htmlFor="hybrid">hybrid</Label>
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
      <div className="flex justify-end">
        <Button> Next Step: Experience Info</Button>
      </div>
    </form>
  );
}
