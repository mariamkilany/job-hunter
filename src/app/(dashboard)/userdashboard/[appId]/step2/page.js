'use client'
import React, { useState } from 'react';
import { CalendarDaysIcon , ClockIcon , PaperClipIcon, NewspaperIcon , RectangleStackIcon } from '@heroicons/react/24/solid';

const HR = () => {

   return (
       <div>            
            {/* <div>
                <h2 className='text-3xl text-primary text-center font-bold'>
                    Waiting for  technical Interview date
                </h2>
                <div className='m-auto' style={{width:"800px"}}>
                <img src='https://cdn2.hubspot.net/hubfs/1877165/shutterstock_1451395859.jpg' alt='waiting response'>
                </img>
                </div>
            </div>    */}

          <div>
                <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    <div className='m-auto'>
                    <img src='https://media.istockphoto.com/id/1312120473/vector/interview-concept-professional-job-interview-business-people-work-man-businessman-design.jpg?s=612x612&w=0&k=20&c=EjW-KEkdAwCi_i393dBrWAkRpj2jXEAKNT7BMdjIXDk=' alt='waiting response'>
                    </img>
                    </div>
                   
                    <div className='bg-slate-50	 p-12'>
                        <h2 className='text-2xl text-primary  font-bold'>
                        Prepare your self for Technical interview
                        </h2>
                        <p className='font-bold m-3' >
                                Interview Name : <span className=' ms-2 text-gray-500'> Tech. Interview   </span>
                        </p>
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

            </div>    
       </div>
    );
}

export default HR;