import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "../GlobalState";
import {
  USER_LOGIN_STATUS,
  USER_LOGIN_STATUS_LOGGED_IN,
  USER_LOGIN_STATUS_LOGGED_OUT,
  USER_LOGIN_STATUS_LOGGING_IN,
  USER_LOGIN_STATUS_LOG_IN_ERROR,
  USER_LOGIN_STATUS_VERIFYING_LOG_IN,
} from "../helpers/constants";
import { setData } from "../hooks/user.action";

function PinDigit(props) {
  const [hidden, setHiddenTo] = useState(false);

  useEffect(() => {
    if (props.value) {
      const timeout = setTimeout(() => {
        setHiddenTo(true);
      }, 500);

      return () => {
        setHiddenTo(false);

        clearTimeout(timeout);
      };
    }
  }, [props.value]);

  return (
    <div
      className={
        `app-pin-digit focused items-center h-20 w-14 inline-flex relative border-white/50 border-2 bg-white-600 rounded justify-center after:content-[''] after:shadow-md after:z-20 after:absolute before:content-[''] before:shadow-md before:z-20 before:absolute ` +
        { focused: props.focused, hidden }
      }
    >
      <span className="app-pin-digit-value text-5xl m-0 p-0">
        {props.value || ""}
      </span>
    </div>
  );
}
function LogInPin({ setUserStatus }) {
  // const { userStatus, setUserStatusTo } = useContext(AppContext);

  const [globalState, updateGlobalState] = useGlobalState();

  const userLogInState = globalState[USER_LOGIN_STATUS];

  const [pin, setPinTo] = useState("");
  const [rememberMe, setRememberMeTo] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (
      userLogInState === USER_LOGIN_STATUS_LOGGING_IN ||
      userLogInState === USER_LOGIN_STATUS_LOG_IN_ERROR
    ) {
      ref.current.focus();
    } else {
      setPinTo("");
    }
  }, [userLogInState]);

  useEffect(() => {
    if (pin.length === 4) {
      async function verify() {
        try {
          setUserStatus(USER_LOGIN_STATUS_VERIFYING_LOG_IN);

          const verifyC = (pin) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (pin === "1234") {
                  if (rememberMe) setData(true); //add a remind me checkmark.
                  resolve(true);
                } else {
                  reject(`Invalid pin: ${pin}`);
                }
              }, Math.floor(Math.random() * (700 - 300 + 1)) + 300);
            });
          };
          if (await verifyC(pin)) {
            setUserStatus(USER_LOGIN_STATUS_LOGGED_IN);
          }
        } catch (err) {
          console.error(err);

          setUserStatus(USER_LOGIN_STATUS_LOG_IN_ERROR);
        }
      }

      verify();
    }

    if (userLogInState === USER_LOGIN_STATUS_LOG_IN_ERROR) {
      setUserStatus(USER_LOGIN_STATUS_LOG_IN_ERROR);
    }
  }, [pin]);

  const handleOnChange = (e) => {
    if (e.target.value.length <= 4) {
      setPinTo(e.target.value.toString());
    }
  };

  const handleOnChangeRememberMe = (e) => {
    setRememberMeTo(!rememberMe);
  };

  const handleOnClick = () => {
    ref.current.focus();
  };

  const handleOnCancel = () => {
    setUserStatus(USER_LOGIN_STATUS_LOGGED_OUT);
  };

  return (
    <div className=" absolute z-30 opacity-0 left-[50%] top-[50%] pointer-events-auto text-white app-pin-wrapper space-y-3">
      <input
        className="bg-transparent border-none ring-0 h-0 absolute w-0"
        disabled={
          userLogInState !== USER_LOGIN_STATUS_LOGGING_IN &&
          userLogInState !== USER_LOGIN_STATUS_LOG_IN_ERROR
        }
        id="app-pin-hidden-input"
        maxLength={4}
        ref={ref}
        type="number"
        value={pin}
        onChange={handleOnChange}
      />
      <div className="flex gap-2" onClick={handleOnClick}>
        <PinDigit focused={pin.length === 0} value={pin[0]} />
        <PinDigit focused={pin.length === 1} value={pin[1]} />
        <PinDigit focused={pin.length === 2} value={pin[2]} />
        <PinDigit focused={pin.length === 3} value={pin[3]} />
      </div>
      <h1>
        Enter the "1234"{" "}
        <a
          onClick={() => setUserStatus(USER_LOGIN_STATUS_LOGGED_OUT)}
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Cancel
        </a>
      </h1>

      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          checked={rememberMe}
          onChange={handleOnChangeRememberMe}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="link-checkbox" className="ml-2 font-medium">
          Remember me{" "}
          {/* <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
            terms and conditions
          </a>
          . */}
        </label>
      </div>
    </div>
  );
}

export default LogInPin;
