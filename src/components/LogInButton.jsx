import React from "react";
import {
  USER_LOGIN_STATUS_LOGGED_IN,
  USER_LOGIN_STATUS_LOGGING_IN,
} from "../helpers/constants";
import AppButton from "./AppWidgets/AppButton";

function LogInButton({ setUserStatus }) {
  //USER_LOGIN_STATUS_LOGGED_IN
  return (
    <AppButton
      className="animate-bounce"
      onClick={() => setUserStatus(USER_LOGIN_STATUS_LOGGING_IN)}
    >
      Sign In
    </AppButton>
  );
}

export default LogInButton;
