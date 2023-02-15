import axios from "axios";

export const geoDBApi = axios.create({
  baseURL: import.meta.env.VITE_GEO_DB_API_URL,

  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_GEO_DB_API_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_GEO_DB_API_KEY 
  },

});

geoDBApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Handle unauthorized error
    } else if (error.response.status === 404) {
      // Handle not found error
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  }
);

export const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_API_URL,

  params: {'appid': import.meta.env.VITE_OPEN_WEATHER_API_KEY},
})