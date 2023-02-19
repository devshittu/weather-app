import { createContext, useContext, useState } from "react";

const initState = {
  isLoading: true,
  loggedInStatus: false,
  currentCity: {
    cityInfo: null,
    cityDateTime: null,
    citiesNearby: null,
    weather: { forecast: null, today: null, daily: null },
  },
  searchedCity: {
    cityInfo: null,
    cityDateTime: null,
    citiesNearby: null,
    weather: { forecast: [], today: null, daily: null, thirdHourly: [] },
  },
};
const GlobalContext = createContext(initState);

function GlobalState({ children }) {
  const [globalState, setGlobalState] = useState(null);
  const updateGlobalState = (key, value) => {
    setGlobalState((oldState) => {
      if (oldState[key] !== value) {
        const newState = { ...oldState };
        newState[key] = value;
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
