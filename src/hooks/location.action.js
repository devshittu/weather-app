import { LS_PARAMS_CURRENT_LOCATION } from "../helpers/constants";

export function getLocation(){
    return JSON.parse(localStorage.getItem(LS_PARAMS_CURRENT_LOCATION)) || null
}

export function removeLocation(){
    localStorage.removeItem(LS_PARAMS_CURRENT_LOCATION)
}

export function setLocation(data){

    const cityData = (data)? {
        cityName: data.locationData.cityName,
        latitude: data.locationData.lat,
        longitude: data.locationData.lng,
        countryName: data.locationData.countryName,
        countryCode: data.locationData.countryCode,
        timezone: data.locationData.tz,
      } : {
        cityId: "Q845",
        cityName: "Ealing",
        latitude: 51.5072,
        longitude: -0.1275,
        countryName: "United Kingdom",
        countryCode: "GB",
        timezone: "Europe/London",
      }
    localStorage.setItem(
        LS_PARAMS_CURRENT_LOCATION, 
        JSON.stringify(cityData)
    );
}
