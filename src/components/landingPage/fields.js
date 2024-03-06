import React from 'react';

const Fields = () => {
    return (
        <div>
              <div className='container py-12 mx-auto' >
                <h2 className='text-3xl font-bold  '>
                    Explore our <span className="text-primary"> Categories</span>
                </h2>
                <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 py-9 '>
                    <div className='p-6 m-5 shadow-md border  ' >
                        <img src='/Images/icons/design.png' alt='design icon'></img>
                        <h3 className='pt-5 font-bold pb-2'> UI/UX</h3>
                        <a className="text-sm font-semibold leading-6  text-slate-400	" >
                            235 jobs avaliable <span aria-hidden="true">→</span>
                        </a>
                    </div>
                   
                    <div className='p-6 m-5 shadow-md border ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                        <h3 className='pt-5 font-bold pb-2'> FrontEnd</h3>
                        <a className="text-sm font-semibold leading-6  text-slate-400	" >
                            235 jobs avaliable <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className='p-6 m-5 shadow-md border  ' >

                        <img src='/Images/icons/code.png' alt='code icon'></img>


                        <h3 className='pt-5 font-bold pb-2'> BackEnd</h3>
                        <a className="text-sm font-semibold leading-6  text-slate-400	" >
                            235 jobs avaliable <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className='p-6 m-5 shadow-md border  ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="w-10 h-10 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>

                        <h3 className='pt-5 font-bold pb-2'> FullStack</h3>
                        <a className="text-sm font-semibold leading-6  text-slate-400	" >
                            235 jobs avaliable <span aria-hidden="true">→</span>
                        </a>
                    </div>
                  
                    
                    
                </div>
            </div>

        </div>
    );
}

export default Fields;
