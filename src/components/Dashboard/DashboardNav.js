import React from "react";
import Notification from "@/components/Dashboard/Notification";

const DashboardNav = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_299_18342)">
                  <circle cx="16" cy="16" r="16" fill="#4640DE" />
                  <mask id="path-2-inside-1_299_18342" fill="white">
                    <path d="M16 27C18.6652 27 21.3304 24.8953 23.0607 23.179C23.4599 22.7831 22.9792 22.2122 22.4822 22.4749C20.6013 23.469 18.0181 24.6 16 24.6C13.9819 24.6 11.3987 23.469 9.5178 22.4749C9.02076 22.2122 8.54012 22.7831 8.93926 23.179C10.6696 24.8953 13.3348 27 16 27Z" />
                  </mask>
                  <path
                    d="M23.0607 23.179L25.1734 25.3089V25.3089L23.0607 23.179ZM8.93926 23.179L6.82658 25.3089H6.82658L8.93926 23.179ZM9.5178 22.4749L10.9197 19.8226L10.9197 19.8226L9.5178 22.4749ZM22.4822 22.4749L21.0803 19.8226L21.0803 19.8226L22.4822 22.4749ZM20.948 21.0491C20.1783 21.8126 19.2652 22.5953 18.3201 23.1712C17.3491 23.7627 16.5672 24 16 24V30C18.098 30 19.9813 29.1849 21.4419 28.2951C22.9282 27.3895 24.2129 26.2616 25.1734 25.3089L20.948 21.0491ZM16 24C15.4328 24 14.6509 23.7627 13.6799 23.1712C12.7348 22.5953 11.8217 21.8126 11.052 21.0491L6.82658 25.3089C7.78708 26.2616 9.07177 27.3895 10.5581 28.2951C12.0187 29.1849 13.902 30 16 30V24ZM8.11593 25.1272C9.1314 25.6639 10.3827 26.2629 11.6934 26.7336C12.967 27.1911 14.4921 27.6 16 27.6V21.6C15.4899 21.6 14.7143 21.4434 13.7216 21.0868C12.7658 20.7436 11.7851 20.28 10.9197 19.8226L8.11593 25.1272ZM16 27.6C17.5079 27.6 19.033 27.1911 20.3066 26.7336C21.6173 26.2629 22.8686 25.6639 23.8841 25.1272L21.0803 19.8226C20.2149 20.28 19.2342 20.7436 18.2785 21.0868C17.2857 21.4434 16.5101 21.6 16 21.6V27.6ZM25.1734 25.3089C25.7674 24.7197 26.1776 23.8995 26.2071 22.9593C26.2356 22.0551 25.905 21.2526 25.4152 20.663C24.4114 19.4547 22.6321 19.0024 21.0803 19.8226L23.8841 25.1272C22.8293 25.6847 21.5389 25.3865 20.7999 24.4969C20.4425 24.0667 20.1883 23.4648 20.2101 22.7708C20.2331 22.0407 20.5536 21.4403 20.948 21.0491L25.1734 25.3089ZM11.052 21.0491C11.4464 21.4403 11.7669 22.0407 11.7899 22.7708C11.8117 23.4648 11.5575 24.0667 11.2001 24.4969C10.4611 25.3865 9.17068 25.6847 8.11593 25.1272L10.9197 19.8226C9.36787 19.0024 7.5886 19.4547 6.58483 20.663C6.09504 21.2526 5.76443 22.0551 5.79286 22.9593C5.82241 23.8995 6.23259 24.7197 6.82658 25.3089L11.052 21.0491Z"
                    fill="white"
                    mask="url(#path-2-inside-1_299_18342)"
                  />
                  <path
                    d="M21.7122 9.31575C21.3923 8.99365 21.3923 8.47732 21.7122 8.15521L23.4307 6.02632L23.4307 5.98937C23.866 5.55866 24.5718 5.55866 25.0072 5.98937C25.4425 6.42007 25.4425 7.11837 25.0072 7.54907L22.9824 9.31575L22.9067 9.38279C22.7487 9.50768 22.5516 9.57665 22.3473 9.57665C22.109 9.57665 21.8805 9.48277 21.7122 9.31575ZM8.66699 15.185C8.66699 13.2892 9.42819 11.4711 10.7831 10.1306C12.1381 8.79004 13.9758 8.03694 15.8919 8.03694C19.8822 8.03694 23.1169 11.2372 23.1169 15.185C23.1169 19.1327 19.8822 22.333 15.8919 22.333C11.9017 22.333 8.66699 19.1327 8.66699 15.185Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_299_18342">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="self-center whitespace-nowrap ms-2">
                JobHuntly
              </span>
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-32">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="items-center hidden lg:flex">
              <Notification />
            </div>
            <a
              href="/"
              className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
            >
              Back To Home Page
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
