import { useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import Info from "./components/Info";
import Loader from "./components/Loader";
import LogInButton from "./components/LogInButton";
import LogInPin from "./components/LogInPin";
import Menu from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* user status */}
      <div className="App bg-gray-800">
        <Info />
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
