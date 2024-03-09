import { createContext, useContext, useState } from "react";
import { APP_LOADER, USER_LOGIN_STATUS_LOGGED_OUT, USER_LOGIN_STATUS } from "./helpers/constants";
import { ThemeProvider } from "./context/ThemeContext";

const initState = {
  [APP_LOADER]: true,
  loggedInStatus: false,
  [USER_LOGIN_STATUS]: USER_LOGIN_STATUS_LOGGED_OUT,
};
const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [globalState, setGlobalState] = useState(initState);
  const updateGlobalState = (key, value) => {
    setGlobalState((oldState) => {
      if (!oldState) {
        return { [key]: value };
      }
      if (oldState[key] !== value) {
        const newState = { ...oldState, [key]: value };
        // newState[key] = value;
        return newState;
      } else {
        return oldState;
      }
    });
  };

  return (
    <GlobalContext.Provider value={[globalState, updateGlobalState]}>
      <ThemeProvider>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}
export const useGlobalState = () => useContext(GlobalContext);
export default GlobalState;
