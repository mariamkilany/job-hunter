"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Switch() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center text-white p-2 gap-5">
      <div className=" w-1/2 text-center bg-primary-light rounded p-2">
        <Link
          className={`inline-block rounded ${
            pathname.includes("login") && "bg-primary"
          } p-2 w-3/6`}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={`inline-block rounded ${
            pathname.includes("register") && "bg-primary"
          } p-2 w-3/6`}
          href="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
