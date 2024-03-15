"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Redirect to /landing on component mount
  useEffect(() => {
    router.push("/landing");
  }, [router]);

  return <></>;
}
