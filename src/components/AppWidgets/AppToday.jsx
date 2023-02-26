import React from "react";

import { capitalizeSentence } from "../../helpers/utils";
import { getSunTimes } from "../../helpers/datetime";

function AppToday({ data }) {
  return (
    <article className="bg-white/70 dark:bg-slate-900/70 rounded-lg shadow-2xl md:flex md:h-72">
      <img
        src="https://images.unsplash.com/photo-1457269449834-928af64c684d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkwOTI0MA&ixlib=rb-4.0.3&q=80&w=500"
        alt="Laptop on Desk"
        className="w-full md:w-1/3 h-20 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
      />
      <div className="p-6 pb-0 text-slate-700 dark:text-white/70 grow md:pb-6">
        <h2 className="font-bold text-xl md:text-3xl mb-2 ">
          {data?.weather[0].main}
        </h2>

        <div className="py-4 text-slate-700 dark:text-slate-300 flex flex-col justify-between space-y-4">
          <div className="flex justify-between pb-3 border-b">
            <div>
              <div className="text-5xl text-slate-900 dark:text-slate-100 flex">
                <svg
                  className="inline-flex fill-none stroke-2 w-12 stroke-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-4">
                  {`${Math.round(data?.main?.temp)}°C`}
                </span>
              </div>
            </div>
            <div className="leading-loose text-sm ">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-none stroke-yellow-500 stroke-2 mr-2 w-5"
                >
                  <path
                    d="M22 16.5H2M20 20H4M12 3V5M4 13H2M6.31412 7.31412L4.8999 5.8999M17.6855 7.31412L19.0998 5.8999M22 13H20M7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  <span className="font-bold">
                    {getSunTimes(data?.sys.sunrise, "time")}
                  </span>{" "}
                  <span className="text-xs text-slate-600 dark:text-slate-400 ">
                    {getSunTimes(data?.sys.sunrise, "a")}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="fill-none stroke-purple-500 stroke-2 mr-2 w-5"
                >
                  <path
                    d="M12 3V5M5.31412 7.31412L3.8999 5.8999M18.6858 7.31412L20.1 5.8999M6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15M22 15H2M19 19H5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>
                  <span className="font-bold">
                    {getSunTimes(data?.sys.sunset, "time")}
                  </span>{" "}
                  <span className="text-xs  text-slate-600 dark:text-slate-400">
                    {getSunTimes(data?.sys.sunset, "a")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="leading-loose">
              {capitalizeSentence(data?.weather[0].description)}
              .
              <br />
              {data?.wind.speed} km/h winds.
            </p>

            <div className="text-5xl text-slate-900 dark:text-slate-100 ">
              <span className="ml-4x">
                {`${Math.round(data?.main?.temp_max)}°`}
                <span className="inline-flex text-3xl text-slate-500 dark:text-slate-400">
                  / {`${Math.round(data?.main?.temp_min)}°`}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 md:pt-0 text-slate-600 dark:text-white/70 grow md:mt-12">
        <div className="overflow-auto flex-grow">
          {/* text-sm sm:text-xl */}
          <div className=" divide-y divide-white-700 leading-loose">
            <div className="flex items-center justify-between">
              <p>Feels like</p>
              <span className="text-gray-800 dark:text-gray-200">{`${Math.round(
                data?.main?.feels_like
              )}°C`}</span>
            </div>
            <div className="flex items-center justify-between">
              <p>Wind</p>
              <span className="text-gray-800 dark:text-gray-200">{`${data?.wind?.speed} km/h`}</span>
            </div>

            <div className="flex items-center justify-between ">
              <p>Humidity</p>
              <span className="text-gray-800 dark:text-gray-200">
                {" "}
                {`${Math.round(data?.main?.humidity)} %`}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p>Visibility</p>
              <span className="text-gray-800 dark:text-gray-200">
                {`${Math.round(data?.visibility) / 1000} km`}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p>Pressure</p>
              <span className="text-gray-800 dark:text-gray-200">
                {`${Math.round(data?.main?.pressure)} mbar`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppToday;
