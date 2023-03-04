import { parseISO } from "date-fns";
import React from "react";
import { formatDayTime, getDayOfWeek } from "../../helpers/datetime";

function AppDailyCard({ className, data }) {
  //   const makeTint = () => (tint ? ` from-${tint}-700/40` : ` from-white/20`);
  return (
    <article
      className={`max-w-md md:max-w-xl min-w-[200px] md:min-w-[28%] rounded-lg md:rounded-2xl backdrop-blur mb-8 bg-white/30 shadow-lg bg-gradient-to-tr  ${className}`}
    >
      <div className="p-3 md:p-6 flex flex-col justify-start space-y-4">
        <div className="flex justify-center md:justify-between items-center">
          <h5 className="text-lg leading-tight md:text-2xl md:self-auto">
            {getDayOfWeek(data?.dt * 1000)}
          </h5>
          <span className="px-4 py-1 border-2 hidden md:block border-white/20 text-emerald-500x text-l leading-tight rounded bg-white bg-opacity-5 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            {data?.weather[0].main}
          </span>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          {/* <img
            src="../../public/animated/rain-and-sleet-mix.svg "
            className="h-14 md:h-24  min-w-2/3 md:mx-4 self-center align-middle grow"
          /> */}

          <div className="">
            <span className="font-heading inline-flex font-black ">
              {/* weather-temperature */}
              <span className="text-4xl md:text-8xl inline-flex items-center leading-3x ">
                {Math.round((data?.temp?.day + data?.temp?.night) / 2)}
              </span>
              {/* weather-temperature-unit */}
              <span className="text-md md:text-2xl inline-flex items-start h-10 md:h-20 md:mt-3">
                °C
              </span>
            </span>
          </div>
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
        <div className="flex">
          <div className="text-white/60 dark:text-slate-700 grow md:mt-2">
            <div className="overflow-auto flex-grow">
              {/* text-sm sm:text-xl */}
              <div className="space-y-4">
                <dl>
                  <dt className="text-md border-b font-bold text-white  hidden md:block">
                    Temperature
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2 hidden">
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Day</p>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.temp?.day
                      )}°C`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Night</p>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.temp?.night
                      )}°C`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Night</p>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.temp?.night
                      )}°C`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Evening</p>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.temp?.eve
                      )}°C`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Max</p>
                      <span className="text-white dark:text-slate-200">
                        {`${Math.round(data?.temp?.max)}°C`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <p>Min</p>
                      <span className="text-white dark:text-slate-200">
                        {`${Math.round(data?.temp?.min)}°C`}
                      </span>
                    </div>
                  </dd>

                  <dt className="text-md border-b font-bold text-white mt-4 hidden md:block">
                    Sun Times
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2  hidden">
                    <div className="flex items-center justify-between md:w-[45%]">
                      <label>Sunrise</label>
                      <span className="text-white dark:text-slate-200">{`${formatDayTime(
                        data?.sunrise * 1000,
                        false
                      )}`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[45%]">
                      <label>Sunset</label>
                      <span className="text-white dark:text-slate-200">{`${formatDayTime(
                        data?.sunset * 1000,
                        false
                      )}`}</span>
                    </div>
                  </dd>

                  <dt className="text-md border-b font-bold text-white mt-4">
                    Details
                  </dt>
                  <dd className="md:flex md:flex-wrap md:justify-around mt-2">
                    {data?.rain && (
                      <div className="flex items-center justify-between md:w-[100%]">
                        <label>Rain Chance</label>
                        <span className="text-white dark:text-slate-200">{`${Math.round(
                          data?.rain
                        )} mm`}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between md:w-[100%]">
                      <label>Pressure</label>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.pressure
                      )} hPa`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[100%]">
                      <label>Humidity</label>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.humidity
                      )} %`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[100%]">
                      <label>Dew Point</label>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.dew_point
                      )} ° C`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[100%]">
                      <label>Wind Speed</label>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.wind_speed
                      )} km/h`}</span>
                    </div>
                    <div className="flex items-center justify-between md:w-[100%]">
                      <label>Wind Degree</label>
                      <span className="text-white dark:text-slate-200">{`${Math.round(
                        data?.wind_deg
                      )} °`}</span>
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

export default AppDailyCard;
