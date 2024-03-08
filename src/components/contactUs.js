import React from "react";

const ContactUs = () => {
  return (
    <div
      className="h-700 p-5 m-100 flex flex-col shadow-lg items-center bg-white-smoke  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      style={{ width: "500px", backgroundColor: "white", borderRadius: "12px" }}
    >
      <img
        className=" object-cover w-full rounded-3-lg h-200 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/Images/contactUs.jpg"
        alt
        style={{ borderRadius: "30px 0px 30px 0px", width: "250px" }}
      />
      <div className="flex flex-col justify-between  leading-normal w-500">
        <form className="max-w-sm mx-auto p-4">
          <div className="mb-5 w-500">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="text1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="text1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Subject"
              required
            />
          </div>

          <div className="mb-5">
            <label
              for="text2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              type="text"
              id="text2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <button
            type="submit"
            style={{ color: "white" }}
            className=" bg-green  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
