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
        {/* left-[75%] md:left-[50%] */}
        <div className="welcome-message text-white absolute opacity-0 pointer-events-none z-20 top-28 md:ml-10 md:min-w-min">
          <div className="m-10">
          <h1 className="text-3xl md:text-6xl mb-4">Welcome to the Weather App!</h1>
          {/* <p className="text-lg md:text-2xl leading-loose text-white/80"> Looks like you're in {`${globalState?.currentCity?.cityName}, ${globalState?.currentCity?.countryCode}`}, but if you were hoping for sunny Hawaii, we'll need you to sign in below and work some of that magic! 😉</p> */}
          <p className="mb-4 text-lg md:text-2xl leading-loose text-white"> Where we know it's raining cats and dogs in <strong>{`${globalState?.currentCity?.cityName}, ${globalState?.currentCity?.countryCode}`}</strong>. If we got it wrong and it's actually raining men or pizzas, sign in below to <a onClick={()=> alert('change location')}>change</a>  your location. 😜🌧️🐶🐱🍕💦</p>
          <p className="text-lg md:text-2xl leading-loose text-white"> And yes, we built this using Vite + Reactjs + tailwind – we're nerdy like that. ☀️❄️🤓</p>
          {/* <p className="text-lg text-white/80"> {items[Math.floor(Math.random()*items.length)]||''}</p> */}
          </div>
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
