import "./hero.css"
export default function Example() {

  return (
    <div className="h-screen" >

      <div className="  px-6 pt-14 lg:px-8 heroSection h-full flex items-center ">
     
        <div className=" max-w-2xl py-2 sm:py-48 lg:py-2 ">
       
          <div className="text-center  ">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl" style={{color:"white"}}>
            Discover Over <span className="text-lightGreen">
            5000+ Resume
            </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600" style={{color:"white"}}>
            Great platform for the jobhunter seeker that searching for new employees .
            Also Great platform for Job candidates seeker that searching for new career heights and passionate about startups

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{backgroundColor:"rgb(25 185 185)" , color:"white"}}
               >

                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 " 
                style={{color:"white"}}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}