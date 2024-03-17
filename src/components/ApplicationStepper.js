"use client";
import { getSingleApp } from "@/lib/features/application/applicationAction";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Stepper() {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const applicationId = useParams().matcherId;

  console.log(singleApp);
  useEffect(() => {
    dispatch(getSingleApp(applicationId));
  }, []);

  const pathname = usePathname();
  const done = (
    <svg
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );

  const active = "text-primary after:border-primary-500 ";

  const condition1 = true;

  const condition2 =
    singleApp?.status === "step2" ||
    singleApp?.status === "step3" ||
    singleApp?.status === "step4" ||
    singleApp?.status === "accepted" ||
    singleApp?.status === "rejected";

  const condition3 =
    singleApp?.status === "step3" ||
    singleApp?.status === "step4" ||
    singleApp?.status === "accepted" ||
    singleApp?.status === "rejected";

  const condition4 =
    singleApp?.status === "step4" ||
    singleApp?.status === "accepted" ||
    singleApp?.status === "rejected";

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
      <li
        className={`flex md:w-full items-center ${
          condition1 && active
        }  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:border-gray-200 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
          {condition1 ? done : <span className="me-2">1</span>}
          HR<span className="hidden md:inline-flex sm:ms-2">Interview</span>
        </span>
      </li>
      <li
        className={`flex md:w-full items-center ${
          condition2 && active
        } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
          {condition2 ? done : <span className="me-2">2</span>}
          Technical
          <span className="hidden md:inline-flex sm:ms-2">Interview</span>
        </span>
      </li>

      <li
        className={`flex md:w-full items-center ${
          condition3 && active
        } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
          {condition3 ? done : <span className="me-2">3</span>}
          Task <span className="hidden md:inline-flex sm:ms-2"></span>
        </span>
      </li>

      <li className={`flex items-center ${condition4 && active}`}>
        {condition4 ? done : <span className="me-2">4</span>}
        Feedback
      </li>
    </ol>
  );
}
