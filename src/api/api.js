import axios from "axios";

export const geoDBApi = axios.create({
  baseURL: import.meta.env.VITE_GEO_DB_API_URL,

  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_GEO_DB_API_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_SECRET_KEY 
  },

});

geoDBApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Handle unauthorized error
      console.error(`401 Bad request encountered`);
    } else if (error.response.status === 404) {
      // Handle not found error
      console.error(`404 error encountered`);
    } else {
      // Handle other errors
      console.error(`Handle other errors`);
    }
    return Promise.reject(error);
  }
);

export const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_API_URL,

  params: {'appid': import.meta.env.VITE_OPEN_WEATHER_API_KEY},
})

export const autoLocationApi = axios.create({
  baseURL: import.meta.env.VITE_AUTO_LOCATION_API_URL,

  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_AUTO_LOCATION_API_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_SECRET_KEY
  },
})