import { createContext, useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import TimeWeatherInfo from "./components/TimeWeatherInfo";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";
import InfoFixedWrapper from "./components/InfoFixedWrapper";
import LogInButtonWrapper from "./components/LogInButtonWrapper";
import GlobalState from "./GlobalState";
function App() {
  const [userLogInState, setUserLogInState] = useState("logged-in");
  // // const [globalState] = useGlobalState();
  // console.log("useGlobalState()", useGlobalState());

  const setUserStatus = (status) => {
    setUserLogInState(status);
  };
  // const [globalState] = useGlobalState();
  // console.log(globalState)
  // if (globalState?.isLoading) return <Loader />;

  return (
    <>
      {/* user status */}
      <GlobalState>
        <div className={`App bg-gray-800 ${userLogInState}`}>
          {/* {JSON.stringify(globalState)} */}
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
        </div>
      </GlobalState>
    </>
  );
}

export default App;
