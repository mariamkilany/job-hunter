"use client";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { setStep3 } from "@/lib/features/register/registerSlice";
import { LinkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { industries } from "@/components/companies/Aside";

const schema = yup
  .object({
    description: yup.string().min(50).required("Discription is required"),
    workplace: yup.string().required("workplace is required"),
    industry: yup.string().required("industry is required"),
  })
  .required();

export default function CompanySccountDetails() {
  const router = useRouter();
  const { userData, step2 } = useSelector((store) => store.register);
  const linksNames = ["linkedIn", "facebook", "instagram"];
  const [links, setLinks] = useState({});
  const [link, setLink] = useState("linkedIn");
  const [linkUrl, setLinkUrl] = useState("");
  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      workplace: "",
      links: [],
      industry: "",
    },
    resolver: yupResolver(schema),
  });
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

  useEffect(() => {
    if (!step2) router.push("/register/company_personal");
  }, []);
  const handleNavigate = (data) => {
    data.links = links;
    dispatch(setStep3(data));
    router.push("/register/company_more");
  };
  return (
    <form className="p-8 my-5" onSubmit={handleSubmit(handleNavigate)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div className=" row-span-3">
          <Label htmlFor="description" {...register("description")}>
            Description
          </Label>
          <textarea
            rows={10}
            className={`border border-gray-300 text-gray-900 focus:gray-400 w-full text-sm rounded-lg block ${
              errors.description && errorStyle
            }`}
            {...register("description")}
          ></textarea>
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="workplace">Work place</Label>
          <Input
            type="text"
            name="workplace"
            id="workplace"
            className={errors.workplace && errorStyle}
            {...register("workplace")}
          />
          <ErrorMessage>{errors.workplace?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select
            type="text"
            name="industry"
            id="industry"
            {...register("industry")}
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </Select>
          <ErrorMessage>{errors.industry?.message}</ErrorMessage>
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
                      maxWidth: "200px",
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
      </div>
      <div className="flex justify-end">
        <Button>Next Step: More Info</Button>
      </div>
    </form>
  );
}
