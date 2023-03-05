import { useEffect } from "react";
import "./App.css";
import AppBackgroundImage from "./components/AppBackgroundImage";
import TimeWeatherInfo from "./components/TimeWeatherInfo";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";
import InfoFixedWrapper from "./components/InfoFixedWrapper";
import LogInButtonWrapper from "./components/LogInButtonWrapper";
import { useGlobalState } from "./GlobalState";
import {
  USER_LOGIN_STATUS,
  USER_LOGIN_STATUS_LOGGED_IN,
  USER_LOGIN_STATUS_LOGGED_OUT,
} from "./helpers/constants";
import AppWelcomeMessage from "./components/AppWidgets/AppWelcomeMessage";
import { getData, setData } from "./hooks/user.action";
function App() {
  const [globalState, updateGlobalState] = useGlobalState();
  const userLogInState = globalState[USER_LOGIN_STATUS];
  const setUserStatus = (status) => {
    updateGlobalState(USER_LOGIN_STATUS, status);
  };

  useEffect(() => {
    const isLoggedIn = getData();
    if (!isLoggedIn) {
      setUserStatus(USER_LOGIN_STATUS_LOGGED_OUT);
    } else {
      setData(true);
      setUserStatus(USER_LOGIN_STATUS_LOGGED_IN);
    }
  }, []);

  return (
      <div className={`bg-slate-800 ${userLogInState}`}>
      {/* user status */}
        <InfoFixedWrapper>
          <TimeWeatherInfo
            temperature={Math.round(
              globalState?.city?.currentWeather?.main?.temp
            )}
          />
        </InfoFixedWrapper>
        <LogInPin setUserStatus={setUserStatus} />
        {/* Menu */}
        <Menu setUserStatus={setUserStatus} />
        <AppWelcomeMessage
          countryCode={globalState?.currentCity?.countryCode}
          cityName={globalState?.currentCity?.cityName}
        />
        <AppBackgroundImage />
        <LogInButtonWrapper>
          <LogInButton setUserStatus={setUserStatus} />
        </LogInButtonWrapper>
      </div>
  );
}

export default App;
