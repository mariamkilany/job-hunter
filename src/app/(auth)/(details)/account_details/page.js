"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";

export default function AccountInfo() {
  const router = useRouter();
  const handleNavigate = (e) => {
    e.preventDefault();
    router.push("/experience_details");
  };
  return (
    <form className="p-8 my-12">
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label for="years_of_experience">Years of experience</Label>
          <Input
            type="number"
            name="years_of_experience"
            id="years_of_experience"
            required=""
          />
        </div>
        <div>
          <Label for="university">University</Label>
          <Input type="text" name="university" id="university" required="" />
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label for="github">Github</Label>
            <Input type="text" name="github" id="github" required="" />
          </div>
          <div className="w-1/2">
            <Label for="github">LinkedIn</Label>
            <Input type="text" name="github" id="github" required="" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label for="graduation_pro">Graduation Year</Label>
            <Input
              type="text"
              name="graduation_pro"
              id="graduation_pro"
              required=""
            />
          </div>
          <div className="w-1/2">
            <Label for="grade">Grade</Label>
            <Input type="text" name="grade" id="grade" required="" />
          </div>
        </div>
        <div>
          <Label for="location">Location</Label>
          <Input type="text" name="location" id="location" required="" />
        </div>
        <div>
          <Label for="location">Birth Date</Label>
          <Input type="date" name="birth_date" id="birth_date" required="" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md">Type of job</p>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="full_time" className="w-4 h-4" />
              <Label htmlFor="full_time">Full Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="part_time" className="w-4 h-4" />
              <Label htmlFor="part_time">Part Time</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="part_time" className="w-4 h-4" />
              <Label htmlFor="part_time">Project</Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md">Work Place</p>
          <div className="flex">
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="on_site" className="w-4 h-4" />
              <Label htmlFor="on_site">On Site</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="hybird" className="w-4 h-4" />
              <Label htmlFor="hybird">Hybird</Label>
            </div>
            <div className="w-1/3 flex gap-4">
              <Input type="checkbox" id="remotly" className="w-4 h-4" />
              <Label htmlFor="remotly">Remotly</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        {" "}
        <Button onClick={handleNavigate}> Next Step: Experience Info</Button>
      </div>
    </form>
  );
}
