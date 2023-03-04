import { createContext, useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import TimeWeatherInfo from "./components/TimeWeatherInfo";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";
import InfoFixedWrapper from "./components/InfoFixedWrapper";
import LogInButtonWrapper from "./components/LogInButtonWrapper";
import { useGlobalState } from "./GlobalState";
function App() {
  const [globalState, updateGlobalState] = useGlobalState();
  const [userLogInState, setUserLogInState] = useState("logged-out");
console.log('globalState',globalState)
  const setUserStatus = (status) => {
    setUserLogInState(status);
  };
  return (
    <>
      {/* user status */}
      {/* <GlobalState> */}
        <div className={`App bg-gray-800 ${userLogInState}`}>
          <InfoFixedWrapper>
            <TimeWeatherInfo 
              temperature={Math.round(
                globalState?.city?.currentWeather?.main?.temp
              )}/>
          </InfoFixedWrapper>
          <LogInPin />
          {/* Menu */}
          <Menu />
          {/* left-[75%] md:left-[50%] */}
          <div className="current-city absolute opacity-100 block pointer-events-nonex z-20 top-2 md:top-0 w-96 h-36 left-[75%] md:left-[50%]">
           <h1> Your current city is detected as: {`${globalState?.currentCity?.cityName}, ${globalState?.currentCity?.countryName}`}</h1>
          </div>
          <AppBG />
          <LogInButtonWrapper>
            <LogInButton setUserStatus={setUserStatus} />
          </LogInButtonWrapper>
        </div>
      {/* </GlobalState> */}
    </>
  );
}

export default App;
