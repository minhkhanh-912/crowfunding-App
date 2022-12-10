import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] w-full p-2 flex items-center rounded-full">
      <div className="flex-1 px-3">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full p-2 text-sm bg-transparent outline-none text-text1 placeholder:text-text4"
        />
      </div>
      <button className="w-[72px] h-10 rounded-full bg-primary flex justify-center flex-shrink-0 items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
