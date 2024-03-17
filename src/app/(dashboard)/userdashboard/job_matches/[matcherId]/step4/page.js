"use client";
// pages/feedback.js
import { useDispatch, useSelector } from "react-redux";
import { getSingleApp } from "@/lib/features/application/applicationAction";
import { useParams } from "next/navigation";
import { useEffect } from "react";
export default function Feedback() {
  const singleApp = useSelector(
    (state) => state.applications.singleApplication
  );
  const dispatch = useDispatch();
  const appId = useParams().matcherId;

  useEffect(() => {
    dispatch(getSingleApp(appId))
  
 
  }, []);
  console.log()


  return (
    <>
      <div className="flex  items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-1/3">
          <img src="https://www.business2community.com/wp-content/uploads/2020/02/9c-jpGgMtszbzkaHXFNB6eOdoZjOHAUcuc600kKoxjo4n4-JX5PSSJ-rwqya4moCO8sfqkPvEe9x6cvPDCHatVVpyRdaYJW_sEpyxojlh4ni6ruJUb9q8ldST56A8o6yo939COii.png"></img>
        </div>

        <div className="max-w-lg border border-1 border-gray-400 rounded-2xl  py-6 px-12 w-full space-y-8">
          <h2 className="  text-lg  font-bold  text-primary ">
            { console.log(singleApp?.status)}
            {singleApp?.status === "rejected"
              ? "Sorry for not passing all recruitement process , wish you all the best"
              : singleApp?.status === "accepted"?"Congratulation You are accepted with us !! 🎉🎉" :"Waiting for Feedback"}
          </h2>
          <div className="rounded-md shadow-sm -space-y-px">
            <p className="text-gray-500">
              {singleApp?.process?.step4?.feedback}
            </p>
          </div>

          <div></div>
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
