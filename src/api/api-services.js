import {geoDBApi, weatherApi, autoLocationApi} from "./api";

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