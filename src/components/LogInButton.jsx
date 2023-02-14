import React from "react";
import AppButton from "./AppWidgets/AppButton";

function LogInButton({ setUserStatus }) {
  return (
    <AppButton className={`bounce`} onClick={() => setUserStatus("logged-in")}>
      Sign In
    </AppButton>
  );
}

export default LogInButton;
