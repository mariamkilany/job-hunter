// "use client";
// import Button from "@/components/Button";
// import React, { useState } from "react";
// import {
//   PlusIcon,
//   TrashIcon,
//   PencilSquareIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/24/outline";
// const Price = () => {
//   // toggle of modal button
//   const [toggle, setToggle] = useState(false);
//   const [updateToggle, setUpdateToggle] = useState(false);

//   const handletoggle = () => {
//     setToggle(!toggle);
//   };
//   const handleUpdateToggle = () => {
//     setUpdateToggle(!updateToggle);
//   };
//   return (
//     <div>
//       {/*  header and button */}
//       <div className="flex justify-between ">
//         <h2 className="text-3xl my-6 font-bold text-primary">
//           Pricing for Recruiters
//         </h2>
//         <div className="text-right my-6">
//           {/* Modal toggle */}
//           <button
//             onClick={handletoggle}
//             data-modal-target="static-modal"
//             data-modal-toggle="static-modal"
//             className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             type="button"
//           >
//             <PlusIcon className="w-5 text-white inline me-2"> </PlusIcon>Add
//             Price
//           </button>
//         </div>
//       </div>
//       {/* pricing table */}
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-14">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="p-4">
//                 #
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Plan Name
//               </th>

//               <th scope="col" className="px-6 py-3">
//                 plan Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Plan Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Features
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//               <td className="w-4 p-4">1</td>
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//               >
//                 Standared
//               </th>
//               <td className="px-6 py-4">standaerd plan</td>
//               <td className="px-6 py-4">Free</td>
//               <td className="px-6 py-4">Free 3 jobs</td>
//               <td className="px-6 py-4 ">
//                 <div className="flex">
//                   <button
//                     onClick={handleUpdateToggle}
//                     data-modal-target="update-modal"
//                     data-modal-toggle="update-modal"
//                     className="block focus:outline-none f text-sm   text-center "
//                     type="button"
//                   >
//                     <PencilSquareIcon className="inline w-5 me-2 text-gray-700"></PencilSquareIcon>
//                   </button>
//                   <TrashIcon className="inline w-5 text-red-600 "></TrashIcon>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div>
//         {/* Add new price plan  modal */}
//         <div
//           id="static-modal"
//           data-modal-backdrop="static"
//           tabIndex={-1}
//           aria-hidden="true"
//           className={`${
//             toggle ? " " : "hidden"
//           } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
//         >
//           <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
//             {/* Modal content */}
//             <div className="relative bg-white rounded-lg shadow ">
//               {/* Modal header */}
//               <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
//                 <h3 className="text-xl font-semibold text-primary  ">
//                   Add New Price Plan
//                 </h3>
//                 <button
//                   type="button"
//                   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                   onClick={handletoggle}
//                   data-modal-hide="static-modal"
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     />
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>
//               {/* Modal body */}
//               <div className="p-4 md:p-5 space-y-4">
//                 <form className="max-w-md mx-auto">
//                   <div className="mb-4">
//                     <label
//                       htmlFor="planName"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Plan Name
//                     </label>
//                     <input
//                       type="text"
//                       id="planName"
//                       className="form-input w-full rounded-md border-gray-300"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="planDescription"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Plan Description
//                     </label>
//                     <textarea
//                       id="planDescription"
//                       className="form-textarea w-full rounded-md border-gray-300"
//                       rows="3"
//                       style={{ resize: "none" }}
//                     ></textarea>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="planPrice"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Plan Price
//                     </label>
//                     <div className="flex">
//                       <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           className="w-6 h-6"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                       </span>
//                       <input
//                         type="number"
//                         id="website-admin"
//                         className="rounded-none rounded-e-lg  border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
//                         placeholder="Bonnie Green"
//                       />
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="feature1"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Feature 1
//                     </label>
//                     <input
//                       type="text"
//                       id="feature1"
//                       className="form-input w-full rounded-md border-gray-300"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="feature2"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Feature 2
//                     </label>
//                     <input
//                       type="text"
//                       id="feature2"
//                       className="form-input w-full rounded-md border-gray-300"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="feature3"
//                       className="block text-gray-700 font-semibold mb-2"
//                     >
//                       Feature 3
//                     </label>
//                     <input
//                       type="text"
//                       id="feature3"
//                       className="form-input w-full rounded-md border-gray-300"
//                     />
//                   </div>
//                 </form>
//               </div>
//               {/* Modal footer */}
//               <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
//                 <button
//                   data-modal-hide="static-modal"
//                   type="button"
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                 >
//                   Add Plan
//                 </button>
//                 <button
//                   data-modal-hide="static-modal"
//                   type="button"
//                   className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
//                   onClick={handletoggle}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Update Button MOdal  */}
//       <div
//         id="update-modal"
//         data-modal-backdrop="static"
//         tabIndex={-1}
//         aria-hidden="true"
//         className={`${
//           updateToggle ? " " : "hidden"
//         } bg-gray-100/[0.7]		 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
//       >
//         <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
//           {/* Modal content */}
//           <div className="relative bg-white rounded-lg shadow ">
//             {/* Modal header */}
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
//               <h3 className="text-xl font-semibold text-primary  ">
//                 Update New Price Plan
//               </h3>
//               <button
//                 type="button"
//                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={handleUpdateToggle}
//                 data-modal-hide="static-modal"
//               >
//                 <svg
//                   className="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//             </div>
//             {/* Modal body */}
//             <div className="p-4 md:p-5 space-y-4">
//               <form className="max-w-md mx-auto">
//                 <div className="mb-4">
//                   <label
//                     htmlFor="planName"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Plan Name
//                   </label>
//                   <input
//                     type="text"
//                     id="planName"
//                     className="form-input w-full rounded-md border-gray-300"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="planDescription"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Plan Description
//                   </label>
//                   <textarea
//                     id="planDescription"
//                     className="form-textarea w-full rounded-md border-gray-300"
//                     rows="3"
//                     style={{ resize: "none" }}
//                   ></textarea>
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="planPrice"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Plan Price
//                   </label>
//                   <div className="flex">
//                     <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                         />
//                       </svg>
//                     </span>
//                     <input
//                       type="number"
//                       id="website-admin"
//                       className="rounded-none rounded-e-lg  border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
//                       placeholder="Bonnie Green"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="feature1"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Feature 1
//                   </label>
//                   <input
//                     type="text"
//                     id="feature1"
//                     className="form-input w-full rounded-md border-gray-300"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="feature2"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Feature 2
//                   </label>
//                   <input
//                     type="text"
//                     id="feature2"
//                     className="form-input w-full rounded-md border-gray-300"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="feature3"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Feature 3
//                   </label>
//                   <input
//                     type="text"
//                     id="feature3"
//                     className="form-input w-full rounded-md border-gray-300"
//                   />
//                 </div>
//               </form>
//             </div>
//             {/* Modal footer */}
//             <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
//               <button
//                 data-modal-hide="update-modal"
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//               >
//                 Update Plan
//               </button>
//               <button
//                 data-modal-hide="update-modal"
//                 type="button"
//                 className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600   rounded-lg border border-gray-200 hover:bg-red-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
//                 onClick={handleUpdateToggle}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Price;
