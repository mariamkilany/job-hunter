// import Button from "@/components/Button";
// import style from "@/styles/Landing.module.css";
// import {
//   CodeBracketIcon,
//   CodeBracketSquareIcon,
//   ComputerDesktopIcon,
//   PaintBrushIcon,
// } from "@heroicons/react/24/solid";
export const metadata = {
  title: "Job Hunter",
};

export default function Home() {
  return <></>;
}
// <main>
//   <div className="h-screen bg-primary-500 ">
//     <div
//       className={`px-6 pt-14 lg:px-8 ${style.hero_section} h-full flex items-center`}
//     >
//       <div className=" max-w-2xl py-2 sm:py-48 lg:py-2 ">
//         <div className="">
//           <h1 className=" text-6xl font-bold tracking-tight pb-10  text-white">
//             Your Gateway to Talent:
//           </h1>

//           <h2 className="text-2xl tracking-tight text-white">
//             Find Top Candidates Hire with Confidence
//           </h2>

//           <div className="mt-10 flex items-center  gap-x-6">
//             <Button className="bg-white !text-primary hover:bg-primary-light hover:!text-white">
//               {" "}
//               Get started
//             </Button>
//             <a
//               href="#"
//               className="text-sm font-semibold leading-6 "
//               style={{ color: "white" }}
//             >
//               Learn more <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="container py-8 px-4 mx-auto">
//     <h2 className="text-3xl font-bold">
//       Explore our <span className="text-primary"> Compaines</span>
//     </h2>
//     <div className="grid gap-10 py-8 sm:auto-cols-auto md:grid-cols-5 ">
//       <div>
//         <img
//           src="/Images/logo/intel.png"
//           className="m-auto w-1/3 md:w-20 h-10"
//           alt="company logo"
//         ></img>
//       </div>
//       <div>
//         <img
//           src="/Images/logo/talkit.png"
//           className="m-auto w-1/3 md:w-20 h-10"
//           alt="company logo"
//         ></img>
//       </div>
//       <div>
//         <img
//           src="/Images/logo/tesla.png"
//           className="m-auto w-1/3 md:w-20 h-10"
//           alt="company logo"
//         ></img>
//       </div>
//       <div>
//         <img
//           src="/Images/logo/amnda.png"
//           className="m-auto w-1/3 md:w-20 h-10"
//           alt="company logo"
//         ></img>
//       </div>
//       <div>
//         <img
//           src="/Images/logo/vodafone.png"
//           className="m-auto w-1/3 md:w-20 h-10"
//           alt="company logo"
//         ></img>
//       </div>
//     </div>
//   </div>
//   <div className="container mx-auto">
//     <div className={`${style.rectangle_with_cut} h p-20`}>
//       <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
//         <div>
//           <h3 className="text-3xl font-bold text-captalize text-white capitalize">
//             Start posting jobs today
//           </h3>
//           <p className="text-2xl py-2 my-3 text-white">
//             Start posting jobs for only $10.
//           </p>

//           <a
//             href="#"
//             className="rounded-md  px-3.5 py-2.5  text-sm font-semibold text-primary bg-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign up now
//           </a>
//         </div>
//         <div>
//           <img src="/Images/posts.png" alt="dashboard Image"></img>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <div className="container py-12 mx-auto p-5">
//       <h2 className="text-3xl font-bold  ">
//         Explore our <span className="text-primary"> Categories</span>
//       </h2>
//       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 py-9 ">
//         <div className="p-6 m-5 shadow-md border group hover:bg-primary rounded">
//           <PaintBrushIcon className="text-primary w-14 h-14 group-hover:text-white" />
//           <h3 className="pt-5 font-bold pb-2 group-hover:text-white">
//             {" "}
//             UI/UX
//           </h3>
//           <a className="text-sm font-semibold leading-6  text-slate-400 group-hover:text-white	">
//             235 jobs avaliable <span aria-hidden="true">→</span>
//           </a>
//         </div>
//         <div className="p-6 m-5 shadow-md border group hover:bg-primary rounded">
//           <ComputerDesktopIcon className="text-primary w-14 h-14 group-hover:text-white" />
//           <h3 className="pt-5 font-bold pb-2 group-hover:text-white">
//             {" "}
//             FrontEnd
//           </h3>
//           <a className="text-sm font-semibold leading-6  text-slate-400 group-hover:text-white	">
//             235 jobs avaliable <span aria-hidden="true">→</span>
//           </a>
//         </div>
//         <div className="p-6 m-5 shadow-md border group hover:bg-primary rounded">
//           <CodeBracketIcon className="text-primary w-14 h-14 group-hover:text-white" />
//           <h3 className="pt-5 font-bold pb-2 group-hover:text-white">
//             {" "}
//             BackEnd
//           </h3>
//           <a className="text-sm font-semibold leading-6  text-slate-400 group-hover:text-white	">
//             235 jobs avaliable <span aria-hidden="true">→</span>
//           </a>
//         </div>

//         <div className="p-6 m-5 shadow-md border group hover:bg-primary rounded">
//           <CodeBracketSquareIcon className="text-primary w-14 h-14 group-hover:text-white" />
//           <h3 className="pt-5 font-bold pb-2 group-hover:text-white">
//             {" "}
//             FullStack
//           </h3>
//           <a className="text-sm font-semibold leading-6  text-slate-400 group-hover:text-white	">
//             235 jobs avaliable <span aria-hidden="true">→</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>
