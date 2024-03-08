import React from "react";

const Profile = () => {
  return (
    <>
      <div
        id="main-content"
        className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64"
      >
        <div className="w-3/4 p-10">
          <div>
            <img
              className="object-cover w-full h-32 lg:h-48"
              src="https://resources.thomascook.in/images/holidays/sightSeeing/8-big-ben-min.jpg"
              alt
            />
          </div>
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="w-24 h-24 rounded-full ring-4 ring-blue-300 sm:h-32 sm:w-32"
                  src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
                  alt
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
                  <h1 className="text-2xl font-bold text-blue-300 truncate">
                    Youssef Adly
                  </h1>
                  <h6 className="font-light text-gray-500">
                    Product Designer at <b>Twitter</b>
                  </h6>
                </div>
                <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex justify-center px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
              <h1 className="text-2xl font-bold text-blue-300 truncate">
                Youssef Adly
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
