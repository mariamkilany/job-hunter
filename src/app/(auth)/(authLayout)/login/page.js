"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { login } from "@/lib/features/auth/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = () => {
    dispatch(login(user)).then(() => {
      router.push("/landing");
    });
  };
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
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
        <div className="flex  justify-between mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5 mr-3">
              <Input id="remember" type="checkbox" value="" required />
            </div>
            <Label for="remember">Remember me</Label>
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
