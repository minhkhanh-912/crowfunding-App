import IconClose from "components/icon/IconClose";
import React from "react";
import { ImageDefault } from "constains/Global";
import { useState } from "react";

const DashboardSearch = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="relative z-50">
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
      {show && (
        <div className="search-results w-[327px] sm:w-[400px] lg:w-[843px] absolute top-full -left-2/4 sm:left-0  bg-white translate-y-5 rounded-3xl">
          <div className="flex items-center justify-between p-3 rounded-t-3xl bg-graySoft">
            <h4 className="pl-3 text-sm font-medium underline text-text1">
              See all 10,124 fundraisier
            </h4>
            <button className="px-6 py-3 bg-error bg-opacity-20 rounded-xl text-error">
              <IconClose></IconClose>
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col items-start mb-6 gap-y-4">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-4 text-sm font-semibold">Related search</h3>
            <div className="flex flex-col text-sm gap-y-3 text-text2">
              <p>
                <strong>Education</strong> Fund
              </p>
              <p>scholl shiper</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchItem = () => {
  return (
    <div className="flex items-center justify-start gap-x-5">
      <img
        src={ImageDefault}
        alt=""
        className="w-[50px] h-[50px] rounded-xl object-cover"
      />
      <div className="flex-1">
        <h3 className="mb-1 text-sm text-text1">
          <span className="font-semibold">Education</span> fund for Durgham
          Family
        </h3>
        <p className="text-sm text-text3">By Durgham Family</p>
      </div>
    </div>
  );
};

export default DashboardSearch;
