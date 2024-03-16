// import React from "react";

// const DashboardASide = () => {
//   return (
//     <aside
//       id="sidebar"
//       className="fixed top-0 left-0 z-20 flex-col flex-shrink-0 hidden w-64 h-full pt-16 duration-75 lg:flex transition-width"
//       aria-label="Sidebar"
//     >
//       <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
//         <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
//           <div className="flex-1 px-3 space-y-1 bg-white divide-y">
//             <ul className="pb-2 space-y-2">
//               <li>
//                 <form action="#" method="GET" className="lg:hidden">
//                   <label htmlFor="mobile-search" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                       <svg
//                         className="w-5 h-5 text-gray-500"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                       </svg>
//                     </div>
//                     <input
//                       type="text"
//                       name="email"
//                       id="mobile-search"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
//                       placeholder="Search"
//                     />
//                   </div>
//                 </form>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_299_18353)">
//                       <path
//                         d="M5 12H3L12 3L21 12H19"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_299_18353">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <span className="ml-3">Dashboard</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   target="_blank"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_299_18361)">
//                       <path
//                         d="M12.0004 21L8.40039 17.4H6.00039C5.04561 17.4 4.12994 17.0207 3.45481 16.3456C2.77968 15.6705 2.40039 14.7548 2.40039 13.8V6.6C2.40039 5.64522 2.77968 4.72955 3.45481 4.05442C4.12994 3.37928 5.04561 3 6.00039 3H18.0004C18.9552 3 19.8708 3.37928 20.546 4.05442C21.2211 4.72955 21.6004 5.64522 21.6004 6.6V13.8C21.6004 14.7548 21.2211 15.6705 20.546 16.3456C19.8708 17.0207 18.9552 17.4 18.0004 17.4H15.6004L12.0004 21Z"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M7.2002 7.7998H16.8002"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M7.2002 12.5996H14.4002"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_299_18361">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>

//                   <span className="flex-1 ml-3 whitespace-nowrap">
//                     Messages
//                   </span>
//                   <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
//                     1
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   target="_blank"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19L18 9.41421L12.5859 4.00011L7 4ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H12.586C13.1163 2.00011 13.6251 2.21086 14.0001 2.58589M14.0001 2.58589L19.414 7.99979C19.414 7.99975 19.414 7.99982 19.414 7.99979C19.789 8.37476 19.9999 8.88345 20 9.41379V19C20 19.7957 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7957 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM8 16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16Z"
//                       fill="#7C8493"
//                     />
//                     <rect
//                       x="8"
//                       y="11"
//                       width="8"
//                       height="2"
//                       rx="1"
//                       fill="#7C8493"
//                     />
//                     <rect
//                       x="8"
//                       y="15"
//                       width="8"
//                       height="2"
//                       rx="1"
//                       fill="#7C8493"
//                     />
//                   </svg>

//                   <span className="flex-1 ml-3 whitespace-nowrap">
//                     My Applications
//                   </span>
//                   {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
//                     Pro
//                   </span> */}
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx="11.7669"
//                       cy="11.7669"
//                       r="8.98856"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M18.0186 18.4854L21.5426 22.0002"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <span className="flex-1 ml-3 whitespace-nowrap">
//                     Find Jobs
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_299_18383)">
//                       <path
//                         d="M3 21H21"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M5 21V7L13 3V21"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M19 21V11L13 7"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M9 9V9.01"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M9 12V12.01"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M9 15V15.01"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M9 18V18.01"
//                         stroke="#7C8493"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_299_18383">
//                         <rect width="24" height="24" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>

//                   <span className="flex-1 ml-3 whitespace-nowrap">
//                     Browse Companies
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/dashboard/profile"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>

//                   <span className="flex-1 ml-3 whitespace-nowrap">
//                     My Public Profile
//                   </span>
//                 </a>
//               </li>
//               {/* <li>
//                 <a
//                   href="#"
//                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
//                 >
//                   <svg
//                     className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
//                 </a>
//               </li> */}
//             </ul>
//             <div className="pt-2 space-y-2">
//               <a
//                 href="#"
//                 className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z"
//                     stroke="#7C8493"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12V12Z"
//                     stroke="#7C8493"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="ml-3">Settings</span>
//               </a>
//               <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clipPath="url(#clip0_299_18410)">
//                     <path
//                       d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M12 17V17.01"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M12 13.5002C11.9816 13.1755 12.0692 12.8537 12.2495 12.5832C12.4299 12.3126 12.6933 12.108 13 12.0002C13.3759 11.8564 13.7132 11.6274 13.9856 11.3311C14.2579 11.0348 14.4577 10.6794 14.5693 10.2928C14.6809 9.90612 14.7013 9.49886 14.6287 9.10303C14.5562 8.7072 14.3928 8.33362 14.1513 8.01168C13.9099 7.68974 13.597 7.42825 13.2373 7.24778C12.8776 7.06732 12.4809 6.97281 12.0785 6.97169C11.6761 6.97057 11.2789 7.06288 10.9182 7.24135C10.5576 7.41982 10.2432 7.67957 10 8.00017"
//                       stroke="#7C8493"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_299_18410">
//                       <rect width="24" height="24" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>

//                 <span className="ml-3">Help Center</span>
//               </a>
//               {/* <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
//               >
//                 <svg
//                   className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
//                 </svg>
//                 <span className="ml-3">Components</span>
//               </a>
//               <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
//               >
//                 <svg
//                   className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="ml-3">Help</span>
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default DashboardASide;
