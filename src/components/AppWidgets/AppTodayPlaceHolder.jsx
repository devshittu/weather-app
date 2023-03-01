import React from "react";
function AppTodayPlaceHolder() {
  return (
    <article className="bg-white/70 dark:bg-slate-900/70 rounded-lg shadow-2xl md:flex md:h-72">
      <div className="w-full md:w-1/3 h-20 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover bg-slate-400 border border-slate-400 animate-pulse"></div>
      <div className="p-6 pb-0 text-slate-700 dark:text-white/70 grow md:pb-6">
        <div className="py-4 h-9 w-32 font-bold text-xl md:text-3xl mb-2  bg-slate-400 border border-slate-400 animate-pulse">
        </div>

        <div className=" text-slate-700 dark:text-slate-300 flex flex-col justify-between space-y-4">
          <div className="flex justify-between pb-3 border-b">
            <div>
              <div className="h-12 w-36 text-5xl text-slate-900 dark:text-slate-100 flex bg-slate-400 border border-slate-400 animate-pulse">
                
              </div>
            </div>
            <div className="leading-loose text-sm h-12 w-14 bg-slate-400 border border-slate-400 animate-pulse">
              
            </div>
          </div>

          <div className="flex justify-between h-20 w-full  bg-slate-400 border border-slate-400 animate-pulse">
           
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 md:pt-0 text-slate-600 dark:text-white/70 grow md:mt-12">
        <div className="overflow-auto flex-grow">
          <div className=" divide-y leading-loose space-y-4 ">
            <div className="flex items-center justify-between h-8 bg-slate-400 border border-slate-400 animate-pulse">
            </div>
            <div className="flex items-center justify-between h-8 bg-slate-400 border border-slate-400 animate-pulse">
            </div>
            <div className="flex items-center justify-between h-8 bg-slate-400 border border-slate-400 animate-pulse">
            </div>
            <div className="flex items-center justify-between h-8 bg-slate-400 border border-slate-400 animate-pulse">
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppTodayPlaceHolder;
