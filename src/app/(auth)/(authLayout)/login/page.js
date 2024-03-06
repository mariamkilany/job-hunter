import Input from "@/components/Input";
import Label from "@/components/Label";
import Switch from "@/components/Switch";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <p className="text-gray-600 text-sm my-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-10">
        <div className="mb-6">
          <Label htmlFor="email">Enter your email</Label>
          <Input type="text" id="email" placeholder="name@mail.com" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Enter your password</Label>
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
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
      </div>
    </>
  );
}
