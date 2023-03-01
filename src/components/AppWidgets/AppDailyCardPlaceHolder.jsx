import { parseISO } from "date-fns";
import React from "react";
import { formatDayTime, getDayOfWeek } from "../../helpers/datetime";

function AppDailyCardPlaceHolder({ className }) {
  //   const makeTint = () => (tint ? ` from-${tint}-700/40` : ` from-white/20`);
  return (
    <article
      className={`max-w-md md:max-w-xl min-w-[200px] md:min-w-[28%] rounded-lg md:rounded-2xl backdrop-blur mb-8 bg-white/30 shadow-lg bg-gradient-to-tr  ${className}`}
    >
      <div className="p-3 md:p-6 flex flex-col justify-start space-y-4">
        <div className="flex justify-center md:justify-between items-center">
          <h5 className="text-lg leading-tight md:text-2xl md:self-auto bg-slate-200 h-6 w-12 border border-slate-200 animate-pulse">
          </h5>
          <span className="px-4 py-1 hidden md:block border-white/20 text-emerald-500x text-l leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out  h-6 w-20 bg-slate-200  border border-slate-200 animate-pulse">
          
          </span>
        </div>
        <div className="w-full flex flex-col md:flex-row h-20 bg-slate-200 border border-slate-200 animate-pulse">
        </div>
        <div className="flex">
          <div className="text-white/60 dark:text-slate-700 grow md:mt-2">
            <div className="overflow-auto flex-grow">
              {/* text-sm sm:text-xl */}
              <div className="space-y-4">
                <dl>
                  <dt className="text-md border-b font-bold text-white  hidden md:block">
                    <span className="block h-6 w-24 bg-slate-200 border border-slate-200 animate-pulse"></span>
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2 hidden">
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                      
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                  </dd>

                  <dt className="text-md border-b font-bold text-white mt-4 hidden md:block">
                    <span className="block h-6 w-24 bg-slate-200 border border-slate-200 animate-pulse"></span>
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2  hidden">
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[45%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                  </dd>

                  <dt className="text-md border-b font-bold text-white mt-4">
                    <span className="block h-6 w-24 bg-slate-200 border border-slate-200 animate-pulse"></span>
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2">
                    <div className="flex items-center justify-between md:w-[100%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[100%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[100%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[100%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                    <div className="flex items-center justify-between md:w-[100%] mt-1 h-6 bg-slate-200 border border-slate-200 animate-pulse">
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppDailyCardPlaceHolder;
