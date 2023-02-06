import React from "react";
import AppButton from "./AppButton";

function LogInButton({ setUserStatus }) {
  return (
    <AppButton className={`bounce`} onClick={() => setUserStatus("logged-in")}>
      Sign In
    </AppButton>
  );
}

export default LogInButton;
