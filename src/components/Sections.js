import React from "react";

const Sections = () => {
  return (
    <>
      <div className="d-flex justify-content-between py-20">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl  font-medium text-gray-900 dark:text-green">
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied is to do what you believe is great work.
              And the only way to do great work is to love what you do. If you
              haven't found it yet, keep looking. Don't settle. As with all
              matters of the heart, you'll know when you find it.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-green">
                Steve Jobs
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Co-founders of Apple
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
      <hr
        className="h-px my-8 bg-gray-900 border-0.5"
        style={{ borderColor: "lightgrey" }}
      ></hr>
      <div className="text-center w-50 bg-light">
        <div className="mx-auto text-center">
          <h2 className="text-center text-4xl font-extrabold dark:text-white">
            Post Your Jobs
            <span
              className=" text-center text-blue-800 text-xl font-semibold me-2 px-2.5 py-0.2 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 "
              style={{ backgroundColor: "#4ab47652" }}
            >
              PRO
            </span>
          </h2>
        </div>
        <p className="text-xl my-2">
          You can Add your Jobs here By providing your Suitable Payment Methods
        </p>
        <div className="my-3">
          {" "}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            style={{ backgroundColor: "#093B3B", color: "white" }}
          >
            Go PayNow
          </button>
        </div>
      </div>
    </>
  );
};

export default Sections;
