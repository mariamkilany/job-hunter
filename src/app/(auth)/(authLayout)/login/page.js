"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { login, startLogoutTimer } from "@/lib/features/auth/authActions";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "@/components/ErrorMessage";
import AlertMessage from "@/components/AlertMessage";
import { resetCompleted } from "@/lib/features/register/registerSlice";
import { useState } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email can't be empty"),
    password: yup.string().required("Password can't be empty"),
    role: yup.string().required("You have to select your role"),
  })
  .required();

export const loadingSvg = (
  <svg
    aria-hidden="true"
    role="status"
    className="inline w-4 h-4 me-3 text-white animate-spin"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);
export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const Servererror = useSelector((store) => store.auth.error);
  const userData = useSelector((store) => store.auth.user);
  const [loading, setLoading] = useState(false);
  const registerCompleted = useSelector((store) => store.register.completed);

  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
    resolver: yupResolver(schema),
  });
  const handleLogin = (user) => {
    setLoading(true);
    dispatch(login(user)).then(() => {
      dispatch(startLogoutTimer());
      setLoading(false);
      if (userData) router.push("/landing");
      // if (userData) {
      //   const role = user.role;
      //   if (role === "employee") {
      //     router.push("/userdashboard");
      //   }
      //   if (role === "company") {
      //     router.push("/company_dashboard");
      //   }
      //   if (role === "admin") {
      //     router.push("/admindashboard");
      //   }
      // }
    });
  };

  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Login and start a journy of amazing job search process with JOBHUNTLY.
      </p>
      <form className="mt-10" onSubmit={handleSubmit(handleLogin)}>
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
          <Label htmlFor="password">Enter your password</Label>
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
          <div className="flex items-center p-3 w-1/3 border rounded border-gray-300">
            <Input
              id="company"
              type="radio"
              {...register("role")}
              value="company"
              name="role"
              className="text-primary w-4 h-4"
            />
            <Label
              htmlFor="company"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Company
            </Label>
          </div>
          <div className="flex items-center p-3 w-1/3 border rounded border-gray-300">
            <Input
              id="job_seeker"
              type="radio"
              {...register("role")}
              value="employee"
              name="role"
              className="text-primary w-4 h-4"
            />
            <Label
              htmlFor="job_seeker"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Job Seeker
            </Label>
          </div>
          <div className="flex items-center p-3 w-1/3 border rounded border-gray-300">
            <Input
              id="admin"
              type="radio"
              name="role"
              value="admin"
              className="text-primary w-4 h-4"
              {...register("role")}
            />
            <Label
              htmlFor="admin"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Admin
            </Label>
          </div>
        </div>
        <div>
          <ErrorMessage>{errors.role?.message}</ErrorMessage>
        </div>
        <div className="flex justify-end px-10">
          <Button
            className={`px-20 ${loading && " bg-slate-500"}`}
            type="submit"
            disabled={loading}
          >
            {loading && loadingSvg}
            Login
          </Button>
        </div>
        {Servererror && <AlertMessage>{Servererror}</AlertMessage>}
        {registerCompleted && (
          <div
            id="toast-success"
            className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow`}
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              Registered finished successfully.
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(resetCompleted());
              }}
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 "
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </form>
    </>
  );
}
