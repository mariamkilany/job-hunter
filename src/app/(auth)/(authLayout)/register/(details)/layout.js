"use client";
import Stepper from "@/components/Stepper";

export default function layout({ children }) {
  return (
    <section className="p-5">
      <Stepper />
      {children}
    </section>
  );
}
