import React from "react";
import AppButton from "./AppButton";

function LogInButton() {
  return (
    <div className="LoginButton absolute opacity-100 pointer-events-auto bottom-0 left-[50%] pb-8 z-20 origin-[-50%_-40px] ">
      <AppButton>Sign In</AppButton>
    </div>
  );
}

export default LogInButton;
