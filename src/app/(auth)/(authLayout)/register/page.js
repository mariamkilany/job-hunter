"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import { setStep1 } from "@/lib/features/register/registerSlice";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email can't be empty"),
    password: yup
      .string()
      .min(8, "Password should be more than 7 characters")
      .matches(/\d/, "Password must include a number")
      .matches(/[a-z]/, "Password must include a lowercase letter")
      .matches(/[A-Z]/, "Password must include an uppercase letter")
      .required("Password can't be empty"),
    userName: yup.string().required("Name can't be empty"),
    role: yup.string().required("You have to select your role"),
  })
  .required();

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
      role: "",
    },
    resolver: yupResolver(schema),
  });

  const hanndleLogin = (data) => {
    dispatch(setStep1(data));
    router.push("/register/personal_details");
  };

  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Register and join us to quickly reach the dream job or the right
        empolyee with JOBHUNYLY.
      </p>
      <form className="mt-10" onSubmit={handleSubmit(hanndleLogin)}>
        <div className="mb-6">
          <Label htmlFor="email">Enter your email</Label>
          <Input
            type="text"
            id="email"
            placeholder="name@mail.com"
            className={errors.email && errorStyle}
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div className="mb-6">
          <Label htmlFor="name"> User / Company Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className={errors.name && errorStyle}
            {...register("userName")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
            className={errors.password && errorStyle}
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className=" mb-6 flex gap-2">
          <div className="flex items-center p-3 w-1/2 border rounded border-gray-300">
            <Input
              id="company"
              type="radio"
              value="company"
              name="bordered-radio"
              className="text-primary w-4 h-4"
              {...register("role")}
            />

            <Label
              htmlFor="company"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Company
            </Label>
          </div>
          <div className="flex items-center p-3 w-1/2 border rounded border-gray-300">
            <Input
              id="job_seeker"
              type="radio"
              value="employee"
              name="bordered-radio"
              {...register("role")}
              className="text-primary w-4 h-4"
            />

            <Label
              htmlFor="job_seeker"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Job Seeker
            </Label>
          </div>
        </div>
        <div>
          <ErrorMessage>{errors.role?.message}</ErrorMessage>
        </div>
        <div className="flex justify-end px-10">
          <Button className="px-20">Register</Button>
        </div>
      </form>
    </>
  );
}
