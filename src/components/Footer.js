import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src="/Images/logo.png"
              className="w-10 h-10"
              alt="Flowbite Logo"
            />
            <span className=" text-xl font-semibold whitespace-nowrap text-white">
              Job Hunters
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
           
          <Link href="landing/pricing" className="hover:underline me-4 md:me-6 hover:text-white">
             <li>
               Pricing
           
            </li>
            </Link>
            <li>
              <Link href="landing/companies" className="hover:underline me-4 md:me-6 hover:text-white">
                Companies
              </Link>
            </li>
            <Link href="landing/contactus" className="hover:underline me-4 md:me-6 hover:text-white">

            <li>
                Contact Us
             
            </li>
            </Link>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a href="https://flowbite.com/" className="hover:underline">
            Job Hunters™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
