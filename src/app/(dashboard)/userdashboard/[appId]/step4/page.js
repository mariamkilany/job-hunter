'use client'
// pages/feedback.js
import React, { useState } from 'react';
import ApplicationStepper from '@/components/ApplicationStepper'
export default function Feedback() {

  return (
   <>
   <ApplicationStepper></ApplicationStepper>
    <div>
          {/* <h2 className="mt-6  text-3xl font-bold text-primary">
           Employee Feedback 
           <hr></hr>
          </h2> */}
          
    </div>

   <div className="min-h-screen flex items-center justify-center   px-4 sm:px-6 lg:px-8">
        <div>

            <img src='https://thumbs.dreamstime.com/b/cute-little-boy-feel-sad-get-bad-grade-exam-227190004.jpg'>
            </img>
        </div>

      <div className="max-w-lg border border-1 border-gray-400 rounded-2xl  py-6 px-12 w-full space-y-8">
      
         <h2 className="  text-lg  font-bold  text-primary ">
        Sorry for not passing  all recruitement process , wish you all the best 
         </h2>

        <h2 className="mt-2 text-lg font-medium ">
          Feedback Message 
          </h2>
          <div className="rounded-md shadow-sm -space-y-px">
              <p className='text-gray-500'>
              thre is s feeed bak from the back end either  good or bad
              </p>
          </div>

       

          <div>
         
          </div>
   
      </div>
   </div>

   {/* <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div>
             <img src='https://png.pngtree.com/png-clipart/20230916/original/pngtree-cartoon-graduate-boy-is-celebrating-clipart-vector-png-image_12260503.png'>
            </img>
        </div>

      <div className="max-w-lg border border-1 border-gray-400 rounded-2xl  py-6 px-12 w-full space-y-8">
      
       <h2 className="  text-lg font-bold  text-primary ">
        Congartulation, you have passed all recruitement process
         </h2> 
       

        <h2 className="mt-2 text-lg font-medium ">
          Feedback Message 
          </h2>
          <div className="rounded-md shadow-sm -space-y-px">
              <p className='text-gray-500'>
              thre is s feeed bak from the back end either  good or bad
              </p>
          </div>

       

          <div>
         
          </div>
   
      </div>
   </div> */}
    </>
  );
}
