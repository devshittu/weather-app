import React, { useMemo } from "react";
import SearchNoResultItem from "./SearchNoResultItem";
import SearchResultItem from "./SearchResultItem";
import { useState, useEffect, useCallback, useContext } from "react";
import { GeoDBApiService } from "../../api/api-services";
import debounce from "lodash.debounce";
import { useGlobalState } from "../../GlobalState";

function AppSearchBox() {
  const [searchResult, setSearchResult] = useState();
  const [keyword, setKeyword] = useState("");

  const [globalState, updateGlobalState] = useGlobalState();

  const doSearch = async (searchTerm) => {
    try {
      const response = await GeoDBApiService.get("cities?limit=10", {
        namePrefix: searchTerm, //"lagos"
        minPopulation: 500000,
      });
      const jsonData = response.data;

      if (jsonData) {
        setSearchResult(jsonData.data);
      }
    } catch (error) {
      throw error;
    }
  };

  const getLocationInfo = async (locationData, event) => {
    try {
      let uniqueCityID = locationData?.wikiDataId;
      let endpoints = [
        { url: `cities/${uniqueCityID}`, params: {} },
        { url: `cities/${uniqueCityID}/dateTime`, params: {} },
        {
          url: `cities/${uniqueCityID}/nearbyCities`,
          params: { radius: 100, limit: 3, minPopulation: 1000000 },
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
            let result = GeoDBApiService.get(
              endpoints[i - 1].url,
              endpoints[i - 1].params
            );

            //resolve outer/original promise with result
            resolve(result);
          })
        );
      }
      let results = Promise.all(tasks).then(
        ([
          {
            data: { data: searchedCityInfo },
          },
          {
            data: { data: searchedCityDateTime },
          },
          {
            data: { data: citiesNearbySearched },
          },
        ]) => {
          updateGlobalState("searchedCity", {
            cityInfo: searchedCityInfo,
            cityDateTime: searchedCityDateTime,
            citiesNearby: citiesNearbySearched,
            // weather: {
            //   forecast: [],
            //   today: null,
            //   daily: null,
            //   thirdHourly: [],
            // },
          });
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // doSearch();
  }, []);

  const handleOnChange = (event) => {
    setKeyword(event.target.value);
    doSearch(event.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(handleOnChange, 500), []);
  return (
    <div>
      <div className="md:w-4/6 z-20 relative">
        <div className="pt-2 relative h-16">
          <input
            onChange={debouncedChangeHandler}
            className="  placeholder:text-slate-500 dark:placeholder:text-white w-full h-full h-10x px-5 pr-16  text-lg md:text-2xl text-slate-700 dark:text-white/70
          backdrop-blur bg-white/30 dark:bg-slate-900/30 border-2 md:border-4 border-white/80 dark:border-slate-900/80  rounded-xl md:rounded-lg shadow-md hover:bg-white/60 dark:hover:bg-slate-900/60 hover:shadow-lg focus:bg-white/60  dark:focus:bg-slate-900/60 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white/80 dark:active:bg-slate-900/80 active:shadow-lg transition duration-150 ease-in-out"
            type="text"
            name="search"
            placeholder="Search a city..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              className="h-8 w-8 fill-white dark:fill-slate-400"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <br />
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md  w-full rounded-xl shadow-xl overflow-hidden  text-slate-700 dark:text-white/70">
        {searchResult?.map((item) => {
          return (
            <SearchResultItem
              key={item.id}
              data={item}
              onClickView={(e) => getLocationInfo(item, e)}
              onClickMakeDefault={(e) => getWeatherInfo(item, e)}
            />
          );
        })}
        {searchResult?.length === 0 && keyword !== "" && (
          <SearchNoResultItem keyword={keyword} />
        )}
      </div>
    </div>
  );
}

export default AppSearchBox;
