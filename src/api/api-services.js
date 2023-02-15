import {geoDBApi} from "./api";

const ApiService = {

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


  // post(resource, params) {
  //   return weatherApi.post(`${resource}`, params);
  // },

};

export default ApiService;