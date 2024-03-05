import React from 'react';
import "./posting.css"
const Posting = () => {
    return (
        <div className='container mx-auto'>
            <div className="rectangle-with-cut h p-20">
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold text-captalize' style={{textTransform:"capitalize" , color:"white"}}>
                        Start posting jobs today

                        </h3>
                        <p className='text-2xl py-2 my-3' style={{color:"white"}}>
                        Start posting jobs for only $10.
                        </p>

                        <a
                href="#"
                className="rounded-md  px-3.5 py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{backgroundColor:"white" , color:"#093B3B"}}
               >

                       Sign up now
              </a>
                    </div>
                    <div>
                        <img src='/Images/posts.png'>
                        </img>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Posting;
