"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/lib/features/auth/authSlice";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const active = "md:underline bg-primary text-white";

  return (
    <>
      <nav className="bg-transparent border-gray-200 absolute top-0  w-full z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/landing"
            className="flex items-center rtl:space-x-reverse"
          >
            <img src="/Images/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap text-white`}
            >
              Job Hunters
            </span>
          </Link>
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
              <Link
                href="/landing"
                className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                  pathname === "/landing" && active
                }`}
              >
                <li>Home</li>
              </Link>
              <Link
                href="/landing/companies"
                className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                  pathname.includes("/landing/companies") && active
                }`}
              >
                <li>Companies</li>
              </Link>
              <Link
                href="/landing/pricing"
                className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                  pathname.includes("/landing/pricing") && active
                }`}
              >
                <li>Pricing</li>
              </Link>
              <Link
                href="/landing/contactus"
                className={`block py-2 px-3 text-primary rounded md:bg-transparent md:text-white md:p-0 hover:underline ${
                  pathname.includes("/landing/contactus") && active
                }`}
              >
                <li>Contact Us</li>
              </Link>
              {user ? (
                <>
                  <li className="md:!ml-80 w-10 h-10 ">
                    {
                      // <Link
                      //   href={
                      // user?.role === "employee"
                      //   ? "/userdashboard"
                      //   : user.role === "company"
                      //   ? "/company_dashboard"
                      //   : "/admindashboard"
                      //   }
                      // >
                    }
                    <button
                      onClick={() =>
                        router.push(
                          user?.role === "employee"
                            ? "/userdashboard"
                            : user.role === "company"
                            ? "/company_dashboard"
                            : "/admindashboard"
                        )
                      }
                    >
                      <img
                        src={user.image}
                        alt="Logo"
                        className="w-8 h-8 mr-2"
                      />
                    </button>
                    {/* <UserCircleIcon className="w-8 h-8 text-primary hover:text-primary-light" /> */}
                    {
                      // </Link>
                    }
                  </li>
                  <li>
                    <Button className="!p-2" onClick={() => dispatch(logout())}>
                      SignOut
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className="md:!ml-44">
                    <Button
                      className={` ${
                        (pathname.includes("/landing/companies") ||
                          pathname.includes("/landing/pricing") ||
                          pathname.includes("/landing/contactus")) &&
                        "bg-white !text-primary hover:bg-primary-light hover:!text-white"
                      }`}
                      onClick={() => router.push("/register")}
                    >
                      Sign Up
                    </Button>
                  </li>
                  <li>
                    <Button
                      className={`bg-transparent !text-primary hover:!text-white  ${
                        (pathname.includes("/landing/companies") ||
                          pathname.includes("/landing/pricing") ||
                          pathname.includes("/landing/contactus")) &&
                        "bg-white !text-primary hover:bg-primary-light hover:!text-white"
                      }`}
                      onClick={() => router.push("/login")}
                    >
                      Login
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// <li className="md:!ml-80 w-10 h-10 relative">
//   <Button
//     className="!p-1"
//     onClick={() => setIsSmallMenuOpen(!isSmallMenuOpen)}
//   >
//     <UserCircleIcon className="w-8 h-8 text-white" />
//   </Button>
//   <div
//     id="dropdownNavbar"
//     className={`!z-10 ${
//       !isSmallMenuOpen && "hidden"
//     } font-normal bg-white divide-y absolute right-0 top-12 divide-gray-100 rounded-lg shadow w-44 `}
//   >
//     <ul className="p-2 text-sm bg-gray-100 shadow-md ">
//       <li className="mb-2">
//         <Link
//           href={
//             user?.role === "employee"
//               ? "/userdashboard"
//               : user.role === "company"
//               ? "/company_dashboard"
//               : "/admindashboard"
//           }
//           className="block px-4 py-2 hover:bg-primary-light hover:text-white"
//         >
//           Dashboard
//         </Link>
//       </li>
// <li>
//   <Button onClick={() => dispatch(logout())}>
//     SignOut
//   </Button>
// </li>
//     </ul>
//   </div>
// </li>
