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
    phoneNumber: yup.string().required("Phone number is required"),
    foundedIn: yup.string().required("Date is required"),
    employeesNumber: yup.string().required("Number Of Emp is required"),
    website: yup.string().required("Please enter company website"),
    address: yup.string().required("Please enter company address"),
  })
  .required();

export default function CompanyPersonalDetails() {
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
      phoneNumber: "",
      employeesNumber: "",
      foundedIn: "",
      website: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!step1) router.push("/register");
  }, []);
  const handleNavigate = (data) => {
    data.contactInfo = {
      phoneNumber: data.phoneNumber,
      website: data.website,
    };
    delete data.phoneNumber;
    delete data.website;

    data.employeesNumber = +data.employeesNumber;

    dispatch(setStep2(data));
    if (data.role === "employee") router.push("/register/account_details");
    else router.push("/register/company_account");
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
            value={userData.name}
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
          <Label htmlFor="phoneNumber">Phone</Label>
          <Input
            type="mobile"
            name="phoneNumber"
            id="phoneNumber"
            className={errors.phoneNumber && errorStyle}
            {...register("phoneNumber")}
          />
          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            type="mobile"
            name="website"
            id="website"
            className={errors.website && errorStyle}
            {...register("website")}
          />
          <ErrorMessage>{errors.website?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor="address">Company Address</Label>
          <Input
            type="mobile"
            name="address"
            id="address"
            className={errors.address && errorStyle}
            {...register("address")}
          />
          <ErrorMessage>{errors.address?.message}</ErrorMessage>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <Label htmlFor="foundedIn">FoundedIn</Label>
            <Input
              type="date"
              name="foundedIn"
              id="foundedIn"
              className={errors.foundedIn && errorStyle}
              {...register("foundedIn")}
            />
            <ErrorMessage>{errors.foundedIn?.message}</ErrorMessage>
          </div>
          <div className="w-1/2">
            <Label htmlFor="employeesNumber">Employees Number</Label>
            <Input
              type="number"
              name="employeesNumber"
              id="employeesNumber"
              className={errors.employeesNumber && errorStyle}
              {...register("employeesNumber")}
            />
            <ErrorMessage>{errors.employeesNumber?.message}</ErrorMessage>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Next Step: Account Info</Button>
      </div>
    </form>
  );
}
