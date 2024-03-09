'use client'
// pages/feedback.js
import React, { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
    console.log('Status:', status);
    setFeedback('');
    setStatus('');
  };

  return (
   <>
    <div>
          <h2 className="mt-6  text-3xl font-bold text-primary">
           Employee Feedback 
           <hr></hr>
          </h2>

    </div>

   <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div>
            <img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-bad-feedback-and-review-concept-for-customer-satisfaction-png-image_5071713.jpg'>
            </img>
        </div>

      <div className="max-w-lg border border-1 border-gray-400 rounded-2xl  py-6 px-12 w-full space-y-8">
      
      <h2 className="mt-2  text-2xl font-bold text-primary">
            Feedback 
            <hr></hr>
          </h2>

        <form className=" space-y-5" style={{marginTop:"15px"}} onSubmit={handleSubmit}>  
        <h2 className="  text-lg font-medium  ">
                Employee Status
         </h2>

        <div className="flex mt-2">
      
            <div className="flex items-center">
              <input
                id="accept"
                name="status"
                type="radio"
                value="accepted"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                checked={status === 'accepted'}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="accept" className="ml-2 me-8">
                Accepted
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="reject"
                name="status"
                type="radio"
                value="rejected"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                checked={status === 'rejected'}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="reject" className="ml-2">
                Rejected
              </label>
            </div>
          </div>

     
        <h2 className="mt-2 text-lg font-medium ">
          Feedback Message ( either positive or negative )
          </h2>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="feedback" className="sr-only">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows={5}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>

       

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
   </div>
    </>
  );
}
