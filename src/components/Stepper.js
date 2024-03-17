"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Stepper() {
  const pathname = usePathname();

  const done = (
    <CheckCircleIcon className="w-5 h-5 sm:w-4 sm:h-4 me-2.5 text-primary" />
  );

  const active = "text-primary after:border-primary-500 ";

  const { step1, step2, step3, step4, userData } = useSelector(
    (store) => store.register
  );

  const condition1 =
    (pathname.includes("personal_details") ||
      pathname.includes("account_details") ||
      pathname.includes("experience_details") ||
      pathname.includes("company_personal") ||
      pathname.includes("company_account") ||
      pathname.includes("company_more")) &&
    step1;
  const condition2 =
    (pathname.includes("account_details") ||
      pathname.includes("experience_details") ||
      pathname.includes("company_account") ||
      pathname.includes("company_more")) &&
    step2;
  const condition3 =
    (pathname.includes("experience_details") ||
      pathname.includes("company_more")) &&
    step3;

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
      <li
        className={`flex md:w-full items-center ${
          condition1 && active
        }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:border-gray-200 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
          {condition1 ? done : <span className="me-2">1</span>}
          {userData.role === "company" ? (
            <>
              Company{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Personal</span>
            </>
          ) : (
            <>
              Personal{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </>
          )}
        </span>
      </li>
      <li
        className={`flex md:w-full items-center ${
          condition2 && active
        } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
          {condition2 ? done : <span className="me-2">2</span>}
          {userData.role === "company" ? (
            <>
              Company{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Account</span>
            </>
          ) : (
            <>
              Account{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </>
          )}
        </span>
      </li>
      <li className={`flex items-center ${condition3 && active}`}>
        {condition3 ? done : <span className="me-2">3</span>}
        {userData.role === "company" ? (
          <>
            Company <span className="hidden sm:inline-flex sm:ms-2">More</span>
          </>
        ) : (
          <>Experience</>
        )}
      </li>
    </ol>
  );
}
