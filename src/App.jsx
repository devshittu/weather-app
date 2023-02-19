import { createContext, useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import TimeWeatherInfo from "./components/TimeWeatherInfo";
import Loader from "./components/Loader";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";
import InfoFixedWrapper from "./components/InfoFixedWrapper";
import LogInButtonWrapper from "./components/LogInButtonWrapper";

export const AppDataContext = createContext(null);

function App() {
  const [userLogInState, setUserLogInState] = useState("logged-in");
  const [appData, setAppData] = useState(null);
  const updateAppData = (data) => {
    console.log('updating AppData...', data)
    setAppData(data);
  }

  const setUserStatus = (status) => {
    setUserLogInState(status);
  };
  return (
    <>
      {/* user status */}
      <div className={`App bg-gray-800 ${userLogInState}`}>
        <InfoFixedWrapper>
          <TimeWeatherInfo />
        </InfoFixedWrapper>
        <LogInPin />
        {/* Menu */}
        <AppDataContext.Provider value={[appData, updateAppData]}>
          <Menu />
        </AppDataContext.Provider>
        <AppBG />
        <LogInButtonWrapper>
          <LogInButton setUserStatus={setUserStatus} />
        </LogInButtonWrapper>
        <Loader />
      </div>
    </>
  );
}

export default App;
