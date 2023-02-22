import React, { useEffect, useState } from "react";
import AppButton from "./AppWidgets/AppButton";
import AppDailyCard from "./AppDailyCard";
import AppSearch from "./AppSearch/AppSearchBox";
import AppSection from "./AppWidgets/AppSection";
import CityItem from "./CityItem";
import CompareCityWrapper from "./CompareCityWrapper";
import TimeWeatherInfo from "./TimeWeatherInfo";
import { autoLocationApiService, weatherApiService } from "../api/api-services";
import { useGlobalState } from "../GlobalState";
import {
  APP_LOADER,
  REAL_TIME_LOCATION_WEATHER_INFO,
} from "../helpers/constants";
import { capitalizeSentence, farenheitToCelcius } from "../helpers/utils";
import { getSuntimes } from "../helpers/datetime";

function Menu() {
  const [globalState, updateGlobalState] = useGlobalState();
  const [ipLocation, setIpLocation] = useState();
  const getRealtimeLocation = (locationData) => {
    return { latitude: locationData?.lat, longitude: locationData?.lng };
  };

  const fetchWeather = async (location) => {
    try {
      updateGlobalState(APP_LOADER, true);
      const response = await weatherApiService.get("weather", {
        lat: location?.latitude,
        lon: location?.longitude,
      });
      if (response.data) {
        updateGlobalState(REAL_TIME_LOCATION_WEATHER_INFO, response.data);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      updateGlobalState(APP_LOADER, false);
    }
  };

  const getWeatherForecastInfo = async (location) => {
    try {
      let endpoints = [
        {
          url: `weather`,
          params: {
            lat: location?.latitude,
            lon: location?.longitude,
          },
        },
        {
          url: `forecast`,
          params: {
            lat: location?.latitude,
            lon: location?.longitude,
            cnt: 40,
          },
        },
      ];
      // Promise.all() with delays for each promise
      // https://stackoverflow.com/questions/47419854/delay-between-promises-when-using-promise-all
      let tasks = [];
      for (let i = 1; i < endpoints.length + 1; i++) {
        const delay = 1501 * i;
        // const delay = 500 * i;
        tasks.push(
          new Promise(async function (resolve) {
            // the timer/delay
            await new Promise((res) => setTimeout(res, delay));
            let result = weatherApiService.get(
              endpoints[i - 1].url,
              endpoints[i - 1].params
            );

            //resolve outer/original promise with result
            resolve(result);
          })
        );
      }
      let results = Promise.all(tasks).then(
        // (response) => {
        ([{ data: currentWeatherCondition }, { data: forecastWeather }]) => {
          console.log("currentWeatherCondition:// ", currentWeatherCondition);
          updateGlobalState("city", {
            currentWeather: currentWeatherCondition,
            forecast: forecastWeather,
          });
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  };
  const loadLocation = async () => {
    try {
      updateGlobalState(APP_LOADER, true);
      // const response = await autoLocationApiService.get();
      // console.log("autoLocationApiService://", response.data);
      // if (response.data) {
      //   console.log("response.data", response.data?.locationData);
      //   // updateGlobalState("ipLocation", response.data);
      //   updateGlobalState(
      //     "realtimeLocation",
      //     getRealtimeLocation(response.data?.locationData)
      //   );

      //   setIpLocation(response.data);
      //   setTimeout(() => {
      //     if (!globalState?.realtimeLocation) {
      //       fetchWeather({
      //         latitude: response.data?.locationData.lat,
      //         longitude: response.data?.locationData.lng,
      //       });
      //     }
      //   }, 1500);
      // }

      // fetchWeather({
      //   latitude: 51.5072,
      //   longitude: -0.1275,
      // });
      getWeatherForecastInfo({
        latitude: 51.5072,
        longitude: -0.1275,
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      updateGlobalState(APP_LOADER, false);
    }
  };
  useEffect(() => {
    if (!globalState?.ipLocation) {
      loadLocation();
    }
  }, []);

  return (
    <div className="app-menu relative overflow-hidden h-screen pointer-events-none opacity-0 z-20">
      {JSON.stringify(globalState)}
      <br />
      {JSON.stringify(ipLocation)}
      <div className="wrapper mt-[10vh] min-h-[80vh] md:p-20 p-3 bg-gradient-to-t from-slate-900/70">
        <div className="container max-w-7xl mx-auto relative pointer-events-auto text-white">
          <section className="app-header flex justify-between">
            <TimeWeatherInfo />
            <div>
              <button
                type="button"
                className="inline-block p-2 md:p-6 mt-2 md:mt-0 backdrop-blur bg-white/10 border-2 md:border-4 border-white/20 text-white rounded-lg shadow-md hover:bg-white/30 hover:shadow-lg focus:bg-white/30 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/50 active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 md:w-8 "
                  viewBox="0 0 512 512"
                >
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
                </svg>
              </button>
            </div>
          </section>
          <section className="nav flex gap-3 overflow-auto pb-2 w-full menu-app-section-bound">
            <h1 className="text-2xl leading-5">Categories: </h1>
            <AppButton>Weather</AppButton>
            <AppButton>Cities</AppButton>
          </section>
          <AppSection title={`Search Location`}>
            <AppSearch />
          </AppSection>
          {JSON.stringify(globalState?.realTimeLocationWeather)}
          <AppSection title={`How it looks & feel out there?`}>
            <article className="bg-white/70 dark:bg-slate-900/70 rounded-lg shadow-2xl md:flex md:h-72">
              <img
                src="https://images.unsplash.com/photo-1457269449834-928af64c684d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkwOTI0MA&ixlib=rb-4.0.3&q=80&w=500"
                alt="Laptop on Desk"
                className="w-full md:w-1/3 h-20 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
              />
              <div className="p-6 text-slate-700 dark:text-white/70">
                <h2 className="font-bold text-xl md:text-3xl mb-2 ">
                  {globalState?.realTimeLocationWeather?.weather[0].main}
                </h2>
                {/* <p className="">It currently feels like -2</p>
                <p className="">It currently feels like -2</p> */}

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
                        {Math.round(
                          globalState?.realTimeLocationWeather?.main?.temp_max
                        )}
                        °
                        <span className="inline-flex text-3xl text-slate-500 dark:text-slate-400">
                          /{" "}
                          {Math.round(
                            globalState?.realTimeLocationWeather?.main?.temp_min
                          )}
                          °
                        </span>
                      </span>
                    </div>
                    <p className=" leading-loose mt-2">
                      {capitalizeSentence(
                        globalState?.realTimeLocationWeather?.weather[0]
                          .description
                      )}
                      .
                      <br />
                      {globalState?.realTimeLocationWeather?.wind.speed} MPH
                      winds.
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
                          {getSuntimes(
                            globalState?.realTimeLocationWeather?.sys.sunrise,
                            "time"
                          )}
                        </span>{" "}
                        <span className="text-xs text-slate-600 dark:text-slate-400 ">
                          {getSuntimes(
                            globalState?.realTimeLocationWeather?.sys.sunrise,
                            "a"
                          )}
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
                          {getSuntimes(
                            globalState?.realTimeLocationWeather?.sys.sunset,
                            "time"
                          )}
                        </span>{" "}
                        <span className="text-xs  text-slate-600 dark:text-slate-400">
                          {getSuntimes(
                            globalState?.realTimeLocationWeather?.sys.sunset,
                            "a"
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AppSection>
          <AppSection title={`This week in West London`}>
            {/* <div className="flex flex-row md:space-x-8 overflow-x-auto gap-4 md:gap-2"> */}
            <div className="flex flex-row space-x-4 md:space-x-8 overflow-x-auto">
              <AppDailyCard className="from-sky-700/40" />
              <AppDailyCard className="from-emerald-700/40" />
              <AppDailyCard className="from-amber-700/40" />
              <AppDailyCard className="from-violet-700/40" />
            </div>
          </AppSection>
          <AppSection title={`Nearby Cities`}>
            <div className="flex sm:-m-4 -mx-4 -mb-10 -mt-4 flex-wrap gap-4">
              {globalState?.citiesNearby?.map((item) => {
                return <CityItem key={item.id} data={item} />;
              })}

              {globalState?.citiesNearby?.length === 0 && (
                <SearchNoResultItem keyword={keyword} />
              )}
              {/* <CityItem photo="https://images.unsplash.com/photo-1614785246748-edc43ab91f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjMwNg&ixlib=rb-4.0.3&q=80&w=500" />
              <CityItem photo="https://images.unsplash.com/photo-1559035636-405d0c36d1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjgwOQ&ixlib=rb-4.0.3&q=80&w=500" />
              <CityItem photo="https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyMDc3OQ&ixlib=rb-4.0.3&q=80&w=1080" /> */}
            </div>
          </AppSection>

          <AppSection title={`Cities Comparism`}>
            <CompareCityWrapper />
          </AppSection>

          {/* <AppSection title={`Cities Elements`}>
            <article className="flex flex-col md:flex-row md:max-w-xl rounded-lg backdrop-blur bg-white/40 shadow-lg ">
              <div className="h-auto w-full">
                <img
                  className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg "
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
              </div>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </article>
          </AppSection>

          <AppSection title={`How it looks & feel out there?`}>
            <div className="flex gap-3">
              <div className="day-card backdrop-blur bg-white/10 border border-white/20 h-[8vw] w-32 shadow-lg rounded-lg relative">
                <div className="day-card-content flex flex-col h-full items-center justify-evenly p-3">
                  <div>32 deg F</div>
                  <div>Icon</div>
                  <div>Day of week</div>
                </div>
              </div>
            </div>
            </AppSection>
            

          <AppSection title={`Meta Data`}>
            <div className="flex gap-4">
              <div className="meta-card h-[7vw] shadow-lg rounded-lg relative w-1/6 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1614785246748-edc43ab91f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjMwNg&ixlib=rb-4.0.3&q=80&w=500')] ">
                <div className="meta-card-content flex flex-col h-full items-end justify-start p-6  bg-gradient-to-b from-slate-900 rounded-lg">
                  <div>33 Metric</div>
                  <div>Icon</div>
                  <div>Humidity</div>
                </div>
              </div>
              <div className="meta-card h-[7vw] shadow-lg rounded-lg relative w-1/6 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1559035636-405d0c36d1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTI1MjgwOQ&ixlib=rb-4.0.3&q=80&w=500')] ">
                <div className="meta-card-content flex flex-col h-full items-end justify-start p-6  bg-gradient-to-b from-slate-900 rounded-lg">
                  <div>33 Metric</div>
                  <div>Icon</div>
                  <div>Humidity</div>
                </div>
              </div>
            </div>
          </AppSection>

          <AppSection title={`World Forecast`}>
            <div className="flex gap-4">
              <div className="city-card h-[24vw] shadow-xl rounded-lg relative w-1/4 bg-white/10 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkzNjgzNw&ixlib=rb-4.0.3&q=80&w=500')] ">
                <div className="city-card-content flex flex-col h-full items-end justify-end p-6  bg-gradient-to-t from-slate-900 rounded-lg">
                  <div>Hot</div>
                  <div>32 C</div>
                  <div>London</div>
                </div>
              </div>
            </div>
          </AppSection> */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
