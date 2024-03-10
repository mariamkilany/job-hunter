"use client";
import React, { useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  PaperClipIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

const HR = () => {
  return (
    <div className="p-10 pt-20">
      <div>
        <h2 className="text-3xl text-primary text-center font-bold">
          Waiting for task to be assigned
        </h2>
        <div className="m-auto mt-6" style={{ width: "300px" }}>
          <img
            src="https://www.yippeecode.com/wp-content/uploads/2021/10/task_managerment_512.png"
            alt="waiting response"
          ></img>
        </div>
      </div>

      {/* <div>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    <div className='m-auto'>
                <img src='https://t4.ftcdn.net/jpg/05/15/17/75/360_F_515177527_E6MsyK5ta0uZlxTpWhol7ZqF5vDTtO4d.jpg' alt='waiting response'>
                    </img>
                    </div>
                   
                    <div className='bg-slate-50	 p-12'>
                        <h2 className='text-2xl text-primary  font-bold'>
                        Task Info 
                        </h2>
                         
                        <p className='font-bold m-3' >
                        <NewspaperIcon className='w-5 inline me-2'></NewspaperIcon> :  <span className=' ms-2 text-gray-500'> Tech. Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <ClockIcon className='w-5 inline me-2'></ClockIcon>: <span className=' ms-2 text-gray-500'>  Tech. Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <CalendarDaysIcon className='w-5 inline me-2'></CalendarDaysIcon> : <span className=' ms-2 text-gray-500'>  Tech. Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <PaperClipIcon className='w-5 inline me-2'></PaperClipIcon> : <span className=' ms-2 text-gray-500'>  Tech. Interview   </span>
                        </p>
                    
                        <p className='font-bold m-3' >
                        <RectangleStackIcon className='w-5 inline me-2'></RectangleStackIcon> : <span className=' ms-2 text-gray-500'> Tech. Interview   </span>
                        </p>
                    </div>

                </div>

            </div>  */}
    </div>
  );
};

export default HR;
