"use client";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { setStep2 } from "@/lib/features/register/registerSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const schema = yup
  .object({
    phone: yup.string().required("Phone number is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    birthDate: yup.string().required("Birth date is required"),
    gender: yup.string().required("Please select a gender"),
  })
  .required();

export default function PersonalDetails() {
  const router = useRouter();
  const { userData, step1 } = useSelector((store) => store.register);
  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      birthDate: "",
      gender: "",
      city: "",
      country: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!step1) router.push("/register");
  }, []);
  const handleNavigate = (data) => {
    dispatch(
      setStep2({
        phone: data.phone,
        birthDate: data.birthDate,
        gender: data.gender,
        location: {
          city: data.city,
          country: data.country,
        },
      })
    );
    router.push("/register/account_details");
  };
  return (
    <form className="p-8 my-5" onSubmit={handleSubmit(handleNavigate)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={userData.userName}
            disabled
            className="bg-gray-100 border border-gray-300 text-gray-900 "
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            disabled
            className="bg-gray-100 border border-gray-300 text-gray-900 "
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            disabled
            className="bg-gray-100 border border-gray-300 text-gray-900 "
          />
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
              className={errors.country && errorStyle}
              {...register("country")}
            />
            <ErrorMessage>{errors.country?.message}</ErrorMessage>
          </div>
          <div className="w-1/2">
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              className={errors.city && errorStyle}
              {...register("city")}
            />
            <ErrorMessage>{errors.city?.message}</ErrorMessage>
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
              value="male"
              name="gender"
              className="w-4 h-4 text-primary"
              {...register("gender")}
            />
            <Label htmlFor="female">Female</Label>
          </div>
        </div>
      </div>
      <ErrorMessage>{errors.gender?.message}</ErrorMessage>

      <div className="flex justify-end">
        <Button>Next Step: Account Info</Button>
      </div>
    </form>
  );
}
