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
import GlobalState from "./GlobalState";
function App() {
  const [userLogInState, setUserLogInState] = useState("logged-in");

  const setUserStatus = (status) => {
    setUserLogInState(status);
  };
  // const [globalState] = useGlobalState();
  // if (globalState?.isLoading) return <Loader />;
  
  return (
    <>
      {/* user status */}
      <GlobalState>
        <div className={`App bg-gray-800 ${userLogInState}`}>
          <InfoFixedWrapper>
            <TimeWeatherInfo />
          </InfoFixedWrapper>
          <LogInPin />
          {/* Menu */}
          <Menu />
          <AppBG />
          <LogInButtonWrapper>
            <LogInButton setUserStatus={setUserStatus} />
          </LogInButtonWrapper>
          <Loader />
        </div>
      </GlobalState>
    </>
  );
}

export default App;
