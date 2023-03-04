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
                if (pin === '1234') {
                  resolve(true);
                } else {
                  reject(`Invalid pin: ${pin}`);
                }
              }, Math.floor(Math.random() * (700 - 300 + 1) ) + 300);
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

  const handleOnClick = () => {
    console.log('Clicked')
    ref.current.focus();
  };

  const handleOnCancel = () => {
    setUserStatus(USER_LOGIN_STATUS_LOGGED_OUT);
  };

  return (
    <div className=" absolute z-30 opacity-0 left-[50%] top-[50%] pointer-events-auto text-white app-pin-wrapper">
      
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
        <a onClick={() => setUserStatus(USER_LOGIN_STATUS_LOGGED_OUT)}>
          Cancel
        </a>
      </h1>
    </div>
  );
}

export default LogInPin;