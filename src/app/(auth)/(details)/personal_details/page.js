"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";

export default function PersonalDetails() {
  const router = useRouter();
  const handleNavigate = (e) => {
    e.preventDefault();
    router.push("/account_details");
  };
  return (
    <form className="p-8 my-12">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username.example"
            required=""
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="•••••••••"
            required=""
          />
        </div>{" "}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input type="mobile" name="phone" id="phone" required="" />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input type="text" name="location" id="location" required="" />
        </div>
        <div>
          <Label htmlFor="location">Birth Date</Label>
          <Input type="date" name="birth_date" id="birth_date" required="" />
        </div>
        <div className="flex">
          <div className="w-1/2 flex gap-3">
            <Input
              id="male"
              type="radio"
              value="male"
              name="gender"
              className="w-4 h-4 text-primary"
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
            />
            <Label htmlFor="female">Female</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        {" "}
        <Button onClick={handleNavigate}>Next Step: Account Info</Button>
      </div>
    </form>
  );
}
