"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { login } from "@/lib/features/auth/authActions";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "", role: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((store) => store.auth.user);
  const handleLogin = () => {
    dispatch(login(user))
      .then(() => {
        const role =user.role;
        if (role === "employee") {
          router.push("/landing");
        }
        if (role === "company") {
          router.push("/company_dashboard");
        }
        if (role === "admin") {
          router.push("/admindashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Login and start a journy of amazing job search process with JOBHUNTLY.
      </p>
      <div className="mt-10">
        <div className="mb-6">
          <Label htmlFor="email">Enter your email</Label>
          <Input
            type="text"
            id="email"
            placeholder="name@mail.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Enter your password</Label>
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </div>
        <div className=" mb-6 flex gap-2">
          <div className="flex items-center p-3 w-1/3 border rounded border-gray-300">
            <Input
              id="company"
              type="radio"
              onChange={(e) => setUser({ ...user, role: "company" })}
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
              onChange={(e) => setUser({ ...user, role: "employee" })}
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
              onChange={(e) => setUser({ ...user, role: "admin" })}
              name="role"
              className="text-primary w-4 h-4"
            />
            <Label
              htmlFor="admin"
              className="ml-3 text-sm font-medium text-gray-900"
            >
              Admin
            </Label>
          </div>
        </div>
        <div className="flex  justify-between mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5 mr-3">
              <Input id="remember" type="checkbox" value="" required />
            </div>
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="text-sm">
            <Link href="" className="text-primary-light underline">
              Forget password?
            </Link>
          </div>
        </div>
        <div className="flex justify-end px-10">
          <Button type="button" className="px-20" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
