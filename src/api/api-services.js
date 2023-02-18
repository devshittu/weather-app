import {geoDBApi, weatherApi} from "./api";

export const GeoDBApiService = {

  get: (endpoint, params) => {
    const defaultConfig = {
      params: {
        ...params,
      },
    }
    return geoDBApi.request(`/${endpoint}`, defaultConfig).catch(error => {
      throw new Error(`GeoApiService ${error}`);
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