"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const active = "md:underline bg-primary text-white";

  return (
    <>
      <nav className="bg-transparent border-gray-200 absolute top-0  w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center rtl:space-x-reverse">
            <img src="/Images/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                pathname === "/" && "text-white"
              }`}
            >
              Job Hunters
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <Bars3Icon color="white" />
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex md:items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                    pathname === "/" && active
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                    pathname === "/about" && active
                  }`}
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                    pathname === "/companies" && active
                  }`}
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                    pathname === "/pricing" && active
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                    pathname === "/contactus" && active
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="md:!ml-44">
                <Button>Sign Up</Button>
              </li>
              <li>
                {" "}
                <Button className="bg-transparent !text-primary hover:!text-white ">
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
