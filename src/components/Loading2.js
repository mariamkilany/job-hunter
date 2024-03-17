import React from "react";

const Loading2 = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center bg-opacity-50">
      {" "}
      {/* Added bg-opacity-50 class for transparency */}
      <div className="w-16 h-16 rounded-full border-4 border-white border-dashed animate-spin">
        <div className="flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white animate-ping"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading2;
