import React from "react";
import { formatDayTime, getDayOfWeek } from "../../helpers/datetime";

function AppHourlyCard({ className, data }) {
  return (
    <article
      className={`max-w-md md:max-w-xl min-w-[170px] md:min-w-min rounded-lg md:rounded-2xl backdrop-blur mb-8 bg-white/30 shadow-lg bg-gradient-to-tr  ${className}`}
    >
      {/* min-w-[170px] md:min-w-[265px] */}
      <div className="p-3 md:p-6 flex flex-col justify-start space-y-4">
        <div className="flex justify-center md:justify-between items-center">
          <h5 className="text-lg leading-tight md:text-2xl md:self-auto">
            {formatDayTime(data?.dt_txt)}
          </h5>
          {/* <span className="px-4 py-1 border-2 hidden md:block border-white/20 text-emerald-500x text-l leading-tight rounded bg-white bg-opacity-5 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
           
          {getDayOfWeek(data?.dt_txt)}
          </span> */}
        </div>
        <div className="w-full flex flex-col md:flex-row">
          {/* <img
            src="../../public/animated/rain-and-sleet-mix.svg "
            className="h-14 md:h-24  min-w-2/3 md:mx-4 self-center align-middle grow"
          /> */}
          <svg
            className="fill-white h-14 md:h-24  min-w-2/3 md:mx-4 self-center align-middle grow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M122.4 1.2C127.6-.9 133.4-.2 137.9 3l70.3 50.3L278.5 3c4.5-3.2 10.3-3.9 15.4-1.8s8.8 6.7 9.7 12.2l14.1 85.3L403 112.8c5.4 .9 10.1 4.6 12.2 9.7s1.4 10.9-1.8 15.4l-38.8 54.3c-2.2-.1-4.3-.2-6.5-.2c-23.2 0-45 6.2-63.8 17c.1-12.5-2.2-25.3-7.3-37.6c-20.3-49-76.4-72.2-125.4-52s-72.2 76.4-52 125.4c18.3 44.3 66 67.5 111.1 56.6c-36.3 18.2-62.8 53.3-69.1 94.9l-23.6 16.9c-4.5 3.2-10.3 3.9-15.4 1.8s-8.8-6.7-9.7-12.2L98.7 317.7 13.4 303.6c-5.5-.9-10.1-4.6-12.2-9.7S-.2 282.9 3 278.5l50.3-70.3L3 137.9c-3.2-4.5-3.9-10.3-1.8-15.4s6.7-8.8 12.2-9.7L98.7 98.7l14.1-85.3c.9-5.5 4.6-10.1 9.7-12.2zM149 232.7c-13.5-32.7 2-70.1 34.6-83.6s70.1 2 83.6 34.6s-2 70.1-34.6 83.6s-70.1-2-83.6-34.6zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
          </svg>
          <span className="text-md md:text-2xl block text-center md:text-left mt-4 md:mt-0 md:ml-4 self-center shrink capitalize">
            {data?.weather[0]?.description}
          </span>
        </div>
        <div className="flex flex-row ">
          <div className="grow font-normal">
            <ul className="">
              <li className="flex-inline content-baseline md:space-y-1 md:space-x-3">
                <svg
                  className="inline-block w-3 md:w-6 h-auto fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
                </svg>
                <span className="inline-block text-sm md:text-xl ml-1 md:ml-2 leading-loose">
                  {`${data?.wind?.speed} km/h`}
                </span>
              </li>
              <li className="flex-inline content-baseline md:space-y-3">
                <svg
                  className="inline-block w-3 md:w-6 h-auto fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                </svg>
                <span className="inline-block text-sm md:text-xl ml-1 md:ml-2 leading-loose">
                  {/* Humidity: */}
                  {`${Math.round(data?.main?.humidity)} %`}
                </span>
              </li>
              <li className="flex-inline content-baseline md:space-y-3">
                <svg
                  className="inline-block w-3 md:w-6 h-auto fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
                </svg>
                <span className="inline-block text-sm md:text-xl ml-1 md:ml-2 leading-loose">
                  {/* Pressure: */}
                  {`${Math.round(data?.main?.pressure)} mbar`}
                </span>
              </li>
              <li className="flex-inline content-baseline md:space-y-3 hidden md:block">
                <svg
                  className="inline-block w-3 md:w-6 h-auto fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                </svg>
                <span className="inline-block text-sm md:text-xl ml-1 md:ml-2 leading-loose">
                  {/* Visibility:  */}
                  {`${Math.round(data?.visibility) / 1000} km`}
                </span>
              </li>
            </ul>
          </div>
          <div className="self-end shrink-0">
            <span className="font-heading inline-flex font-black ">
              {/* weather-temperature */}
              <span className="text-4xl md:text-8xl inline-flex items-center leading-3 ">
                {Math.round(data?.main?.temp)}
              </span>
              {/* weather-temperature-unit */}
              <span className="text-md md:text-2xl inline-flex  items-start h-10 md:h-20 ">
                °C
              </span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppHourlyCard;
