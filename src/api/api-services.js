import { API_CALL_LIMIT_MIN_POPULATION } from "../helpers/constants";
import {geoDBApi, weatherApi, autoLocationApi} from "./api";

export const GeoDBApiService = {

  get: function (endpoint, params){
    const defaultConfig = {
      params: {
        ...params,
      },
    }
    return geoDBApi.request(`/${endpoint}`, defaultConfig).catch(error => {
      throw new Error(`GeoApiService ${error}`);
    });
  },

  getMatchingCities: async function (params) {
    const param = { countryIds: '', namePrefix: '', ...params };
    return await this.get(`cities/`, param);
  },

  getNearbyCities: async function (cityId, params) {
    // const param = { radius: 100, limit: 3, minPopulation: API_CALL_LIMIT_MIN_POPULATION, ...params };
    const param = { radius: 100, limit: 3, minPopulation: Math.round(API_CALL_LIMIT_MIN_POPULATION * 0.000025), ...params };
    return await this.get(`cities/${cityId}/nearbyCities`, param);
  },

  getCityDateTime: async (cityId) => {
    return await this.get(`cities/${cityId}/dateTime`);
  },
  getCityDetails: async (cityId) => {
    return await this.get(`cities/${cityId}`);
  },

  getLocationInfo: async (locationData, event) => {
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
            let result = this.get(
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
          });
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const autoLocationApiService = {
  get: () => {
    return autoLocationApi.request(``).catch(error => {
      throw new Error(`autoLocationApiService ${error}`);
    });
  },

};

export const weatherApiService = {

  get: function (endpoint, params) {
    const defaultConfig = {
      params: {
        ...params,
      },
    }
    return weatherApi.request(`/${endpoint}`, defaultConfig).catch(error => {
      throw new Error(`weatherApiService ${error}`);
    });
  },

  // getWeather: async function (location) {
  getWeather: async function (location) {
    return await weatherApiService.get(`weather`,
    {
      lat: location?.latitude,
      lon: location?.longitude,
    });
  },

  getThirdHourlyForecast: async function (location) {
    return await this.get(`forecast`,
    {
      lat: location?.latitude,
      lon: location?.longitude,
      cnt: 40,
    });
  },


  getSevenDailyForecast: async function (location) {
    return await this.get(`onecall`,
    {
      lat: location?.latitude,
      lon: location?.longitude,
      cnt: 40,
      exclude: "current,hourly,minutely,alerts",
    });
  },


  getAllWeatherForecastInfo: async function (location) {
    // try {
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
        // {
        //   url: `onecall`,
        //   params: {
        //     lat: location?.latitude,
        //     lon: location?.longitude,
        //     cnt: 40,
        //     exclude: "current,hourly,minutely,alerts",
        //   },
        // },
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
            let result = this.get(
              endpoints[i - 1].url,
              endpoints[i - 1].params
            );
            // let result = endpoints[i -1 ](location);
            //resolve outer/original promise with result
            resolve(result);
          }.bind(this) )
        // } )
        );
      }
      return Promise.all(tasks).then(response => response);
    // } catch (error) {
    //   throw new Error(error);
    // }
  }
};

export const requestSlower = async function (locations, getFunc) {

  const promises = locations.map((location, index) => {
    const delay = 2000 * index; // increase the delay for each endpoint
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(getFunc(location));
      }, delay);
    });
  });

  const responses = await Promise.all(promises);
  return responses;
}
// export default ApiService;