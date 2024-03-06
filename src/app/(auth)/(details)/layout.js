import Stepper from "@/components/Stepper";

export default function layout({ children }) {
  return (
    <section className="p-10">
      <Stepper />
      {children}
    </section>
  );
}
