"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Switch() {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname.includes("login") ? "login" : "register");

	useEffect(() => {
		setActiveLink(pathname.includes("login") ? "login" : "register");
	}, [pathname]);

	return (
		<div className="flex justify-center gap-5 p-2 text-white">
			<div className="relative w-1/2 p-2 text-center rounded bg-primary-light">
				<Link className={`inline-block rounded p-2 w-3/6 z-10 relative`} href="/login" onClick={() => setActiveLink("login")}>
					Login
				</Link>
				<span
					className={`absolute top-0 left-0 h-full transition-all duration-500 transform ${
						activeLink === "login" ? "translate-x-0" : "translate-x-full"
					} bg-primary rounded z-0`}
					style={{ width: "50%" }}
				></span>
				<Link className={`inline-block rounded p-2 w-3/6 z-10 relative`} href="/register" onClick={() => setActiveLink("register")}>
					Register
				</Link>
			</div>
		</div>
	);
}
