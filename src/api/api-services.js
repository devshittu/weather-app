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

  getNearbyCities: async function (cityId, params) {
    const param = { radius: 100, limit: 3, minPopulation: API_CALL_LIMIT_MIN_POPULATION, ...params };
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

  get: (endpoint, params) => {
    const defaultConfig = {
      params: {
        ...params,
      },
    }
    return weatherApi.request(`/${endpoint}`, defaultConfig).catch(error => {
      throw new Error(`weatherApiService ${error}`);
    });
  },

};


// export default ApiService;