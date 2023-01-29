import { useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import Info from "./components/Info";
import LogInPin from "./components/LogInPin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* user status */}
      <div className="App bg-gray-800"></div>

      <Info />
      <LogInPin />
      <AppBG />
    </>
  );
}

export default App;
