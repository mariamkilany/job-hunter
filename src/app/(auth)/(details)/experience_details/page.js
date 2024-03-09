import Input from "@/components/Input";
import Label from "@/components/Label";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";

export default function ExperienceDetails() {
  return (
    <section className="p-8 my-12">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <Label>Minimun salary</Label>
          <Input type="number" placeholder="Salary" />
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
      </div>
    </section>
  );
}
