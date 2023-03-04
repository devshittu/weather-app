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
import { USER_LOGIN_STATUS } from "./helpers/constants";
import AppWelcomeMessage from "./components/AppWidgets/AppWelcomeMessage";
function App() {
  const [globalState, updateGlobalState] = useGlobalState();
  // const [userLogInState, setUserLogInState] = useState("logged-out");
  console.log("globalState", globalState);
  // const setUserStatus = (status) => {
  //   setUserLogInState(status);
  // };
  const userLogInState = globalState[USER_LOGIN_STATUS];
  const setUserStatus = (status) => {
    updateGlobalState(USER_LOGIN_STATUS, status);
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
            )}
          />
        </InfoFixedWrapper>
        <LogInPin />
        {/* Menu */}
        <Menu setUserStatus={setUserStatus} />
        <AppWelcomeMessage countryCode={globalState?.currentCity?.countryCode} cityName={globalState?.currentCity?.cityName} />
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
