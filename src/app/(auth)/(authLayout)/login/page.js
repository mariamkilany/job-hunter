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

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const Servererror = useSelector((store) => store.auth.error);
  const userData = useSelector((store) => store.auth.user);

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
    dispatch(login(user)).then(() => {
      dispatch(startLogoutTimer());
      if (userData) {
        const role = user.role;
        if (role === "employee") {
          router.push("/userdashboard");
        }
        if (role === "company") {
          router.push("/company_dashboard");
        }
        if (role === "admin") {
          router.push("/admindashboard");
        }
      }
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
          <Button className="px-20">Login</Button>
        </div>
        {Servererror && <AlertMessage>{Servererror}</AlertMessage>}
      </form>
    </>
  );
}
