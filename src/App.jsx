import { useState } from "react";
import "./App.css";
import AppBG from "./components/AppBG";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* user status */}
      <div className="App bg-gray-800"></div>
      <AppBG />
    </>
  );
}

export default App;
