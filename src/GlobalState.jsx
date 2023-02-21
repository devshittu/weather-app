import { createContext, useContext, useState } from "react";
import { APP_LOADER } from "./helpers/constants";

const initState = {
  [APP_LOADER]: true,
  loggedInStatus: false,
//   currentCity: {
//     cityInfo: null,
//     cityDateTime: null,
//     citiesNearby: null,
//     weather: { forecast: null, today: null, daily: null },
//   },
//   searchedCity: {
//     cityInfo: null,
//     cityDateTime: null,
//     citiesNearby: null,
//     weather: { forecast: [], today: null, daily: null, thirdHourly: [] },
//   },
};
const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [globalState, setGlobalState] = useState(initState);
  const updateGlobalState = (key, value) => {
    setGlobalState((oldState) => {
      console.log("oldState", oldState);
      if (!oldState) {
        return { [key]: value };
      }
      if (oldState[key] !== value) {
        const newState = { ...oldState, [key]: value };
        // newState[key] = value;
        return newState;
      } else {
        return oldState;
      }
    });
  };

  return (
    <GlobalContext.Provider value={[globalState, updateGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalState = () => useContext(GlobalContext);
export default GlobalState;
