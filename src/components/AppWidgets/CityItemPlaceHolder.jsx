import React from "react";

function CityItemPlaceHolder({ photo }) {
  return (
    <>
      <div className="md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center min-w-fit max-w-sm mx-auto">
        <div
          className={
            `bg-[url('` +
            photo +
            `')] flex justify-end items-end z-20 bg-gray-300 h-56 rounded-lg shadow-lg w-[88%] md:w-80 bg-cover bg-center`
          }
        >
          <p className="uppercase tracking-widest text-sm text-white py-1 px-2  mr-4 mb-4 rounded opacity-75 shadow-lg h-7 w-36 bg-slate-400 border border-slate-400 animate-pulse"></p>
        </div>

        <div className="w-full  text-slate-800  dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 backdrop-blur -mt-36 pt-40 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-badge h-6 w-6 rounded-full m-[6px] bg-purple-100 ">
              <div className="h-3 w-3 rounded-full m-[6px] bg-purple-500 animate-pulse"></div>
            </div>
            <h4 className="flex-1 mt-1 h-7 w-28 bg-slate-400 border border-slate-400 animate-pulse">
            </h4>
          </div>

          <div className=" h-7 w-full bg-slate-400 border border-slate-400 animate-pulse">
          </div>

          <div className="py-4 text-slate-700 dark:text-slate-300 flex justify-between ">
            <div className=" h-24 w-full bg-slate-400 border border-slate-400 animate-pulse"></div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-300 text-slate-600 dark:text-slate-400">
            <div className="flex items-center h-6 w-16 bg-slate-400 border border-slate-400 animate-pulse"></div>
            <div className="flex items-center h-6 w-16 bg-slate-400 border border-slate-400 animate-pulse"></div>
            <div className="flex items-center h-6 w-16 bg-slate-400 border border-slate-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityItemPlaceHolder;
