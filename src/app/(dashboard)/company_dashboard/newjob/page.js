import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function NewJob() {
  return (
    <section>
      <div className="flex gap-2  justify-start items-center">
        <ShoppingBagIcon className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-semibold">Request to add new job</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 p-4">
        <div>
          <Label>Job Title</Label>
          <Input type="text" vlaue="" placeholder="Job title" />
        </div>
        <div>
          <Label>Salary</Label>
          <Input type="number" vlaue="" placeholder="Job salary" />
        </div>
        <div className=" row-span-2">
          <Label>Job Description</Label>
          <textarea className=" border-1 border-gray-300 rounded-lg w-full h-full focus:outline-none p-3"></textarea>
        </div>
        <div className=" row-span-2">
          <Label>Job Responsibilites</Label>
          <textarea className=" border-1 border-gray-300 rounded-lg w-full h-full focus:outline-none p-3"></textarea>
        </div>
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
          <Label>Skills</Label>
          <MultiSelect>
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </MultiSelect>
        </div>
        <div>
          <Label>Categories</Label>
          <Select>
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </Select>
        </div>
        <div>
          <Label>Education</Label>
          <Select>
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </Select>
        </div>
        <div>
          <Label>Job Type</Label>
          <Select>
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </Select>
        </div>
      </div>
      <div className="p-4">
        <Button className="px-8">Add</Button>
      </div>
    </section>
  );
}
