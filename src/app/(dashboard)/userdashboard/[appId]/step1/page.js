'use client'
import React, { useState } from 'react';
import { CalendarDaysIcon , ClockIcon , PaperClipIcon, NewspaperIcon , RectangleStackIcon } from '@heroicons/react/24/solid';

const HR = () => {

   return (
       <div>            
            {/* <div>
                <h2 className='text-3xl text-primary text-center font-bold'>
                    Waiting for Interview date
                </h2>
                <div className='m-auto' style={{width:"800px"}}>
                <img src='https://static.vecteezy.com/system/resources/previews/008/518/119/non_2x/business-people-waiting-for-a-job-interview-vector.jpg' alt='waiting response'>
                </img>
                </div>
            </div>    */}

            <div>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    <div className='m-auto'>
                    <img src='https://www.vlaadco.com/wp-content/uploads/2023/04/Megaphone-illustration-High-Resolution-JPG-file-1-scaled.jpg' alt='waiting response'>
                    </img>
                    </div>
                   
                    <div className='bg-slate-50	 p-12'>
                        <h2 className='text-2xl text-primary  font-bold'>
                        Prepare your self for HR interview
                        </h2>
                        <p className='font-bold m-3' >
                                Interview Name : <span className=' ms-2 text-gray-500'> HR Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <NewspaperIcon className='w-5 inline me-2'></NewspaperIcon> :  <span className=' ms-2 text-gray-500'> HR Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <ClockIcon className='w-5 inline me-2'></ClockIcon>: <span className=' ms-2 text-gray-500'>  HR Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <CalendarDaysIcon className='w-5 inline me-2'></CalendarDaysIcon> : <span className=' ms-2 text-gray-500'>  HR Interview   </span>
                        </p>
                        <p className='font-bold m-3' >
                        <PaperClipIcon className='w-5 inline me-2'></PaperClipIcon> : <span className=' ms-2 text-gray-500'>  HR Interview   </span>
                        </p>
                    
                        <p className='font-bold m-3' >
                        <RectangleStackIcon className='w-5 inline me-2'></RectangleStackIcon> : <span className=' ms-2 text-gray-500'> HR Interview   </span>
                        </p>
                    </div>

                </div>

            </div>    
       </div>
    );
}

export default HR;
