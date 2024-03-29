import React from "react";
import { getSunTimes } from "../helpers/datetime";
import { getCardinalDirection } from "../helpers/utils";

function CityItem({ data, photo }) {
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
          <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2  mr-4 mb-4 rounded opacity-75 shadow-lg">
            {(data?.name || "Unknown") + ", " + (data?.countryCode || "XX")}
          </p>
        </div>

        <div className="w-full  text-slate-800  dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 backdrop-blur -mt-36 pt-40 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-badge h-6 w-6 rounded-full m-[6px] bg-purple-100">
              <div className="h-3 w-3 rounded-full m-[6px] bg-purple-500 "></div>
            </div>
            <h4 className="category-title flex-1 text-2xl">
              {" "}
              {data?.weather?.weather[0].main}
            </h4>
          </div>

          <div className="title-post font-medium capitalize">
            {data?.weather?.weather[0].description}
          </div>

          <div className="py-4 text-slate-700 dark:text-slate-300 flex justify-between">
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
                <span>
                  {`${Math.round(data?.weather?.main?.temp_max)}°`}
                  <span className="inline-flex text-3xl text-slate-500 dark:text-slate-400">
                    / {`${Math.round(data?.weather?.main?.temp_min)}°`}
                  </span>
                </span>
              </div>
              <p className="text-sm w-56 normal-case leading-loose mt-2">
                {data?.weather?.weather[0].description}
                <br />
                The current temperature at {`${data?.weather?.name}`} is{" "}
                {`${Math.round(data?.weather?.main?.temp)}°`} and currently
                feels like {`${Math.round(data?.weather?.main?.feels_like)}°`}.
                <br />
                The wind speed is {`${data?.weather?.wind?.speed}`} km/h and the
                wind direction is{" "}
                {`${data?.weather?.wind?.deg}° (${getCardinalDirection(
                  data?.weather?.wind?.deg
                )})`}
              </p>
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
                    {getSunTimes(data?.weather?.sys.sunrise, "time")}
                  </span>{" "}
                  <span className="text-xs text-slate-600 dark:text-slate-400 ">
                    {getSunTimes(data?.weather?.sys.sunrise, "a")}
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
                    {getSunTimes(data?.weather?.sys.sunset, "time")}
                  </span>{" "}
                  <span className="text-xs  text-slate-600 dark:text-slate-400">
                    {getSunTimes(data?.weather?.sys.sunset, "a")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-300 text-slate-600 dark:text-slate-400">
            <div className="flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-4 fill-none stroke-2 stroke-slate-600 dark:stroke-slate-400 "
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.5 1.5V3.1M3.6 10H2M5.4512 4.95137L4.31982 3.82M15.5498 4.95137L16.6812 3.82M19 10H17.4M6.50007 10.0001C6.50007 7.79093 8.29093 6.00007 10.5001 6.00007C12.0061 6.00007 13.3177 6.83235 14.0001 8.06206M6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.46419 14 6.90991 14.0791 7.32442 14.2245C8.04061 12.3396 9.86387 11 12 11C14.1361 11 15.9594 12.3396 16.6756 14.2245C17.0901 14.0791 17.5358 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C13.3597 22 9.87921 22 6 22Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <p>
                <span className="text-slate-900 dark:text-slate-100 font-bold">
                  {`${Math.round(data?.weather?.visibility) / 1000} km`}
                </span>{" "}
                <span className="text-sm">Clarity</span>
              </p>
            </div>
            <div className="flex items-center">
              <p>
                <span className="text-slate-900 dark:text-slate-100 font-bold">
                  {`${Math.round(data?.weather?.main?.pressure)} hPa`}
                </span>{" "}
                <span className="text-sm">Pressure</span>
              </p>
            </div>
            <div className="flex items-center">
              <p>
                <span className="text-slate-900 dark:text-slate-100 font-bold">
                  {`${Math.round(data?.weather?.main?.humidity)}°`}
                </span>{" "}
                <span className="text-sm">Humidity</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityItem;
