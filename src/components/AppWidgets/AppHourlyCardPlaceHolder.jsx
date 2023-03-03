import React from "react";
import { formatDayTime, getDayOfWeek } from "../../helpers/datetime";

function AppHourlyCardPlaceHolder({ className }) {
  return (
    <article
      className={`max-w-md md:max-w-xl min-w-[170px] md:min-w-[360px] rounded-lg md:rounded-2xl backdrop-blur-lg mb-8 bg-white/60 shadow-lg bg-gradient-to-tr  ${className}`}
    >
      <div className="p-3 md:p-6 flex flex-col justify-start space-y-4">
        <div className="flex justify-center md:justify-between items-center">
          <h5 className="text-lg leading-tight md:text-2xl md:self-auto  w-14 h-6 bg-slate-200 border border-slate-200 animate-pulse"></h5>
        </div>
        <div className="w-full flex flex-col md:flex-row h-28 bg-slate-200 border border-slate-200 animate-pulse"></div>
        <div className="flex flex-row ">
          <div className="grow font-normal">
            <ul className="w-full">
              <li className="flex-inline content-baseline md:space-y-1 md:space-x-3 h-7 bg-slate-200 border border-slate-200 animate-pulse"></li>
              <li className="flex-inline content-baseline md:space-y-3  h-7 bg-slate-200 border border-slate-200 animate-pulse"></li>
              <li className="flex-inline content-baseline md:space-y-3  h-7 bg-slate-200 border border-slate-200 animate-pulse"></li>
              <li className="flex-inline content-baseline md:space-y-3 hidden md:block h-7 bg-slate-200 border border-slate-200 animate-pulse"></li>
              <li className="flex-inline content-baseline md:space-y-3 hidden md:block h-7 bg-slate-200 border border-slate-200 animate-pulse"></li>
            </ul>
          </div>
          <div className="self-end shrink-0">
            <span className="font-heading inline-flex font-black ml-4 w-20 h-16 md:h-24  bg-slate-200 border border-slate-200 animate-pulse"></span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppHourlyCardPlaceHolder;
