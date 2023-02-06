import { useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import TimeWeatherInfo from "./components/TimeWeatherInfo";
import Loader from "./components/Loader";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";
import InfoFixedWrapper from "./components/InfoFixedWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* user status */}
      <div className="App bg-gray-800">
        <InfoFixedWrapper>
          <TimeWeatherInfo />
        </InfoFixedWrapper>
        <LogInPin />
        {/* Menu */}
        <Menu />
        <AppBG />
        <LogInButton />
        <Loader />
      </div>
    </>
  );
}

export default App;
