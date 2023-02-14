import axios from "axios";

export const geoCitiesApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=51.507222222&lon=-0.1275&appid='
});
export const weatherApi = axios.create({
  baseURL: ''
})