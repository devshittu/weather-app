import React, { useEffect, useState, useMemo } from "react";
import AppButton from "./AppWidgets/AppButton";
import AppDailyCard from "./AppWidgets/AppDailyCard";
import AppHourlyCard from "./AppWidgets/AppHourlyCard";
import AppSearch from "./AppSearch/AppSearchBox";
import AppSection from "./AppWidgets/AppSection";
import CityItem from "./CityItem";
import CompareCityWrapper from "./CompareCityWrapper";
import TimeWeatherInfo from "./TimeWeatherInfo";
import {
  autoLocationApiService,
  GeoDBApiService,
  requestSlower,
  weatherApiService,
} from "../api/api-services";
import { useGlobalState } from "../GlobalState";
import {
  APP_LOADER,
  API_CALL_LIMIT_TWENTY_FOUR_HOUR,
} from "../helpers/constants";
import AppToday from "./AppWidgets/AppToday";
import { isThisWeek, isToday, parseISO } from "date-fns";
import { getLocation, setLocation } from "../hooks/location.action";
import Loader from "./Loader";
import AppTodayPlaceHolder from "./AppWidgets/AppTodayPlaceHolder";
import AppDailyCardPlaceHolder from "./AppWidgets/AppDailyCardPlaceHolder";
import AppHourlyCardPlaceHolder from "./AppWidgets/AppHourlyCardPlaceHolder";

function Menu() {
  const [globalState, updateGlobalState] = useGlobalState();

  const [currentLocation, setCurrentLocation] = useState();
  const [todayForecast, setTodayForecast] = useState();
  const [twentyFourHoursForecast, setTwentyFourHoursForecast] = useState();
  const [dailyForecast, setDailyForecast] = useState();
  const [nearbyCities, setNearbyCities] = useState();

  const fetchNearbyCities = async (cityId) => {
    try {
      // updateGlobalState(APP_LOADER, true);
      let nearbyCitiesLocations = [];
      const response = await GeoDBApiService.getNearbyCities(cityId)
        .then((response) => {
          if (response.data) {
            const results = response.data.data;
            const getWeatherRequestParamsByLocation = results.map((item) => {
              const reqParam = {
                longitude: item.longitude,
                latitude: item.latitude,
              };
              return reqParam;
            });

            nearbyCitiesLocations = [...results];

            return requestSlower(
              getWeatherRequestParamsByLocation,
              weatherApiService.getWeather
            );
          }
        })
        .then((response) => {
          const nearbyCitiesWithWeather = nearbyCitiesLocations.map(
            (item, i) => {
              const addWeatherData = {
                ...item,
                weather: response[i].data,
              };
              return addWeatherData;
            }
          );
          // get weather for each  cities
          setNearbyCities(nearbyCitiesWithWeather);
          // updateGlobalState("citiesNearby", response.data.data);
        });
    } catch (error) {
      throw new Error(error);
    } finally {
      updateGlobalState(APP_LOADER, false);
    }
  };

  const getWeatherForecastInfo = (location) => {
    //Current city
    // updateGlobalState(APP_LOADER, true);
    try {
      weatherApiService.getAllWeatherForecastInfo(location).then(
        // (response) => {
        ([
          { data: currentWeatherCondition },
          { data: forecastWeather },
          { data: dailyForecast },
        ]) => {
          updateGlobalState("city", {
            currentWeather: currentWeatherCondition,
            forecast: forecastWeather,
            dailyForecast: dailyForecast,
          });
          // setTodayForecast(filterTodayForecast(forecastWeather?.list));
          setTwentyFourHoursForecast(
            (forecastWeather?.list).slice(0, API_CALL_LIMIT_TWENTY_FOUR_HOUR)
          );
          setDailyForecast(dailyForecast?.daily);
        }
      );
    } catch (error) {
      throw new Error(error);
    } finally {
      // updateGlobalState(APP_LOADER, false);
    }
  };
  const filterThisWeekForecastByDate = (forecastItems, todayDate) => {
    return forecastItems.filter((item) => isThisWeek(parseISO(item.dt_txt)));
  };
  const filterTodayForecast = (forecastItems) => {
    return forecastItems.filter((item) => isToday(parseISO(item.dt_txt)));
  };

  const loadLocation = async () => {
    try {
      let autoLocationDetails = {};
      updateGlobalState(APP_LOADER, true);
      const response = await autoLocationApiService
        .get()
        .then((response) => {
          const locationData = response.data?.locationData;
          autoLocationDetails = { ...locationData };
          const requestParams = {
            countryIds: locationData?.countryCode,
            namePrefix: locationData?.cityName,
          };
          return GeoDBApiService.getMatchingCities(requestParams);
        })
        .then((response) => {
          // response first data
          const { wikiDataId, type, region, regionCode, latitude, longitude } =
            response.data.data[0];

          autoLocationDetails = {
            ...autoLocationDetails,
            wikiDataId,
            type,
            region,
            regionCode,
            latitude,
            longitude,
          };

          setLocation(autoLocationDetails);
          setCurrentLocation(autoLocationDetails);
          getWeatherForecastInfo({
            latitude,
            longitude,
          });
          fetchNearbyCities(wikiDataId);
        });
    } catch (error) {
      throw new Error(error);
    } finally {
      updateGlobalState(APP_LOADER, false);
    }
  };
  useEffect(() => {
    // removeLocation();
    const locationNow = getLocation();
    if (!locationNow) {
      loadLocation();
    } else {
      const { latitude, longitude, wikiDataId } = locationNow;
      setCurrentLocation(locationNow);
      // use the local storage info to load the
      getWeatherForecastInfo({
        latitude,
        longitude,
      });
      fetchNearbyCities(wikiDataId);
    }
  }, []);

  const memoizedState = useMemo(
    () => ({
      currentLocation,
      todayForecast,
      twentyFourHoursForecast,
      dailyForecast,
      nearbyCities,
    }),
    [
      currentLocation,
      todayForecast,
      twentyFourHoursForecast,
      dailyForecast,
      nearbyCities,
    ]
  );
  const mainBody = (
    <div className="app-menu relative overflow-hidden h-screen pointer-events-none opacity-0 z-20">
      <div className="wrapper mt-[10vh] min-h-[80vh] md:p-20 p-3 bg-gradient-to-t from-slate-900/70">
        <div className="container max-w-7xl mx-auto relative pointer-events-auto text-white">
          <section className="app-header flex justify-between">
            <TimeWeatherInfo
              temperature={Math.round(
                globalState?.city?.currentWeather?.main?.temp
              )}
            />
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
          <section className="nav flex gap-3 overflow-auto pb-2 w-full menu-app-section-bound mt-16">
            <h1 className="text-2xl leading-5">Categories: </h1>
            <AppButton>Weather</AppButton>
            <AppButton>Cities</AppButton>
          </section>
          <AppSection title={`Search Location`}>
            <AppSearch />
          </AppSection>
          <AppSection title={`How it looks & feel out there?`}>
            {!globalState?.city?.currentWeather ? (
              <AppTodayPlaceHolder />
            ) : (
              <AppToday data={globalState?.city?.currentWeather}></AppToday>
            )}
          </AppSection>
          <AppSection
            title={`${
              currentLocation?.cityName
                ? "Today in " + currentLocation?.cityName
                : "Weather Today"
            }`}
          >
            <div className="flex flex-row space-x-4 md:space-x-8 overflow-x-auto">
              {!memoizedState.twentyFourHoursForecast ? (
                <>
                  <AppHourlyCardPlaceHolder className="from-sky-700/40" />
                  <AppHourlyCardPlaceHolder className="from-sky-700/40" />
                  <AppHourlyCardPlaceHolder className="from-sky-700/40" />
                  <AppHourlyCardPlaceHolder className="from-sky-700/40" />
                  <AppHourlyCardPlaceHolder className="from-sky-700/40" />
                </>
              ) : (
                memoizedState.twentyFourHoursForecast?.map((item, i) => {
                  return (
                    <AppHourlyCard
                      key={i}
                      data={item}
                      className="from-sky-700/40"
                    />
                  );
                })
              )}
            </div>
          </AppSection>
          <AppSection title={`This week in ${currentLocation?.cityName}`}>
            <div className="flex flex-row space-x-4 md:space-x-8 overflow-x-auto">
              {!memoizedState.dailyForecast ? (
                <>
                  <AppDailyCardPlaceHolder className="from-sky-700/40" />
                  <AppDailyCardPlaceHolder className="from-sky-700/40" />
                  <AppDailyCardPlaceHolder className="from-sky-700/40" />
                  <AppDailyCardPlaceHolder className="from-sky-700/40" />
                  <AppDailyCardPlaceHolder className="from-sky-700/40" />
                </>
              ) : (
                memoizedState.dailyForecast?.map((item, i) => {
                  return (
                    <AppDailyCard
                      key={i}
                      data={item}
                      className="from-sky-700/40"
                    />
                  );
                })
              )}
            </div>
          </AppSection>
          <AppSection title={`Nearby Cities`}>
            <div className="flex sm:-m-4 -mx-4 -mb-10 -mt-4 flex-wrap gap-4">
              {nearbyCities?.map((item) => {
                return (
                  <CityItem
                    key={item.id}
                    data={item}
                    photo="https://images.unsplash.com/photo-1444084316824-dc26d6657664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzUxNjkxMQ&ixlib=rb-4.0.3&q=80&w=500"
                  />
                );
              })}

              {nearbyCities?.length === 0 && (
                <SearchNoResultItem keyword={keyword} />
              )}
            </div>
          </AppSection>

          <AppSection title={`Cities Comparison`}>
            <CompareCityWrapper />
          </AppSection>
        </div>
      </div>
    </div>
  );
  return <>{globalState[APP_LOADER] ? <Loader /> : mainBody}</>;
}

export default Menu;
