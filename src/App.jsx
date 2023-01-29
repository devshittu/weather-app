import { useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";
import Info from "./components/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* user status */}
      <div className="App bg-gray-800"></div>

      <Info />
      <AppBG />
    </>
  );
}

export default App;
