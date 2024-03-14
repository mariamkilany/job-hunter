"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function NotAuthPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-light">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-100 mb-4">
          Access Denied
        </h1>
        <p className="text-xl text-slate-50 mb-8">
          You do not have permission to view this page.
        </p>
        <Button onClick={() => router.push("/landing")}>Go Home</Button>
      </div>
    </div>
  );
}
